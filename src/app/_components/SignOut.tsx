'use client';

import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';

const SignOut = () => {
  return <Button onClick={() => signOut()}>Odhlásit se</Button>;
};

export default SignOut;
