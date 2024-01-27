## TODOLIST

```
⚪️ Implement TailwindCSS
⚪️ Disable dark mode
⚪️ Disable Heic upload on frontend (backend is already done)
⚪️ Somewhat optimize images and videos
⚪️ Add/Create favicon
⚪️ Multiple file upload
⚪️ Selecting multiple files and ability to download them
⚪️ Download all files
⚪️ GOD MODE (admin panel) - Delete files and other stuff
⚪️ Next/Prev buttons for files
⚪️ Infinite scroll and lower the amount of files loaded at once
⚪️ Sharing option?
```

# Svatbogram

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## .env requirements

```MD
# To setup DB and fetch data
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# For auth secret run this bash command: `openssl rand -base64 32`
AUTH_SECRET=
AUTH_URL=http://localhost:3000/api/auth

# Setup for admin user without DB users
USERNAME=
PASSWORD=
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
