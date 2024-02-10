'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';
import { Button } from './ui/button';
import {
  AlertCircleIcon,
  ArrowRightIcon,
  KeyRoundIcon,
  UserIcon,
} from 'lucide-react';
import { CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Button } from '@mui/material';
// import BadgeIcon from '@mui/icons-material/Badge';
// import KeyIcon from '@mui/icons-material/Key';
// import ErrorIcon from '@mui/icons-material/Error';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LoginForm() {
  const [errorMessage, dispath] = useFormState(authenticate, undefined);
  return (
    <>
      <CardHeader>
        <CardTitle>Přihlásit se</CardTitle>
        <CardDescription>
          Přihlášení pro administrátora aplikace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" action={dispath}>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="username"
              >
                Uživatelské jméno
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter your email address"
                  required
                />
                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Heslo
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={4}
                />
                <KeyRoundIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <AlertCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" type="submit" aria-disabled={pending}>
      Přihlásit se
      <ArrowRightIcon className="ml-auto h-5 w-5 fill-primary" />
    </Button>
  );
}
