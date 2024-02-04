# Svatbogram

This is a simple photo/video sharing app for my wedding. It's built with Next.js and Supabase. Can be used for any event, not just weddings.

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

## TODOLIST

```md
⚪️ Multiple file upload
⚪️ Selecting multiple files and ability to download them
⚪️ Download all files - maybe make it with selecting feature
⚪️ GOD MODE (admin panel) - Delete files and other stuff
⚪️ Next/Prev buttons for files
⚪️ Infinite scroll and lower the amount of files loaded at once
⚪️ Add presentation mode
⚪️ Sharing option?
```

## Authors

- [<img src="https://github.com/davca3.png" width="20" height="20"> @davca3](https://www.github.com/davca3);
- [<img src="https://github.com/neumandaniel.png" width="20" height="20"> @neumandaniel](https://www.github.com/neumandaniel)
