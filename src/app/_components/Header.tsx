import { auth } from '@/auth';
import { sacramento } from '@/components/fonts';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import SignOut from './SignOut';
import UploadButton from './UploadButton';
import Image from 'next/image';

const Header: FunctionComponent = async () => {
  const authFunction = await auth();

  return (
    <div className="h-16 bg-primary">
      <div className="container mx-auto flex h-full items-center justify-between gap-4 p-4 text-white">
        {/* title */}
        <Link href="/">
          <h1 className={`text-3xl ${sacramento.className}`}>
            Svatbogram
            <img 
              className={`inline h-8 w-8 ml-1 mb-4 filter brightness-0 invert`} 
              src="two-hearts.png" 
              alt="" />
          </h1>
        </Link>
        {/* actions */}
        <div className="flex gap-4">
          {/* Common button */}
          <UploadButton />

          {/* Admin only button */}
          {authFunction && <SignOut />}
        </div>
      </div>
    </div>
  );
};

export default Header;
