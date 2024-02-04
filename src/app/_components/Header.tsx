import { auth } from '@/auth';
import { sacramento } from '@/components/fonts';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import SignOut from './SignOut';
import UploadButton from './UploadButton';

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
              className={`pointer-events-none mb-4 ml-1 inline h-8 w-8 brightness-0 invert filter`}
              src="two-hearts.png"
              alt=""
            />
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
