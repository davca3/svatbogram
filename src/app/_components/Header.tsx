import { sacramento } from "@/components/fonts";
import { FunctionComponent } from "react";
import UploadButton from "./UploadButton";

const Header: FunctionComponent = () => {
  return (
    <div className="h-16 bg-primary">
      <div className="container mx-auto flex justify-between gap-4 items-center h-full p-4 text-white">
        {/* title */}
        <h1 className={`text-3xl ${sacramento.className}`}>Svatbogram</h1>

        {/* actions */}
        <div>
          <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
