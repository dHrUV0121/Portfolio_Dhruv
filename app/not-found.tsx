import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <p className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold opacity-20">
        404
      </p>
      <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] uppercase">
        Oops! Page not found.
      </p>
      <div>
        <Link href="/" className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] uppercase">
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
