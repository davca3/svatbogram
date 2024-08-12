import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FunctionComponent } from 'react';
import SignOut from './SignOut';
import { MenuIcon } from 'lucide-react';
import UploadButton from './UploadButton';

const AdminMenu: FunctionComponent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Admin menu</SheetTitle>
          <SheetDescription>Administrátorská nastavení</SheetDescription>
        </SheetHeader>

        <div className="flex h-full flex-col gap-2 py-4">
          <UploadButton />

          <SignOut />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminMenu;
