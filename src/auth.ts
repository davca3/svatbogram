'use server';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import bcrypt from 'bcrypt';

export type User = {
  id: string;
  username: string;
  password: string;
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;

          if (username !== process.env.USERNAME) return null;
          if (password !== process.env.PASSWORD) return null;

          return {
            id: '1',
            username: 'admin',
            password: 'test',
          };
        }

        console.warn('Invalid credentials');
        return null;
      },
    }),
  ],
});
