
import { sacramento } from '@/components/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import twoHearts from '../../../public/two-hearts.png';
import { auth } from '@/auth';
import AdminMenu from './AdminMenu';

import UploadButton from './UploadButton';
// import { UploadButton } from './NewUploadButton';

const Header: FunctionComponent = async () => {
  const authFunction = await auth();

  return (
    <div className="sticky top-0 z-50 h-16 bg-primary w-screen overflow-hidden">
      <div className="container mx-auto flex h-full items-center justify-between gap-4 p-4 text-white">
        {/* title */}
        <Link href="/">
          <h1 className={`text-3xl ${sacramento.className}`}>
            Svatbogram
            <Image
              className={`pointer-events-none mb-4 ml-1 inline h-8 w-8 brightness-0 invert filter`}
              src={twoHearts}
              alt=""
              priority={true}
            />
          </h1>
        </Link>
        {/* actions */}
        <div className="flex gap-4">
          {authFunction ? <AdminMenu /> : <UploadButton />}
        </div>
      </div>
    </div>
  );
};

export default Header;
