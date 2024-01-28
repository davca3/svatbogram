'use server';
import { signIn } from '@/auth';
import { Action } from './reducer';
import { ImageType } from './types';
import { AuthError } from 'next-auth';

export const addImage = (image: ImageType): Action => ({
  type: 'add',
  image,
});

export const toggleShowcase = (showcaseOpen: ImageType | null): Action => ({
  type: 'toggleShowcase',
  showcaseOpen,
});

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
