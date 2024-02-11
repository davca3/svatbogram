'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { FunctionComponent, PropsWithChildren } from 'react';

const Modal: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };
  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
