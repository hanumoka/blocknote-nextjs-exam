import React from "react";
import Image from "next/image";

interface CoverProps {
  url?: string;
}

const Cover: React.FC<CoverProps> = ({ url }) => {
  return (
    <div
      className={`relative w-full h-[35vh] bg-neutral-300 ${
        !url ? "hidden" : ""
      }`}
    >
      {!!url && (
        <>
          <Image
            src={url}
            alt="cover"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute w-[20%] h-[20%] right-0 bottom-0 group flex justify-center items-center bg-yellow-400">
            {/* Upload 버튼 위치 */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cover;
