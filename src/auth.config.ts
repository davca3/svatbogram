import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Nothing to do here, just return true to allow access
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
