'use client';

import { signOut } from '@/auth';
import { Button } from '@mui/material';

const SignOut = () => {
  return (
    <Button onClick={() => signOut()} variant="contained" color="secondary">
      Odhlásit se
    </Button>
  );
};

export default SignOut;
