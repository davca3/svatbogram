'use client';

import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { LogOutIcon } from 'lucide-react';

const SignOut = () => {
  return (
    <Button onClick={() => signOut()} variant="destructive">
      <LogOutIcon className="mr-2 h-4 w-4" />
      Odhlásit se
    </Button>
  );
};

export default SignOut;
