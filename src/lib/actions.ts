'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { supabase } from './db';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export const getImageModal = async (imageId: string) => {
  const { data } = await supabase
    .from('images')
    .select('*')
    .eq('id', imageId)
    .range(0, 1)
    .order('created_at', { ascending: false })
    .limit(3);

  return data;
};
