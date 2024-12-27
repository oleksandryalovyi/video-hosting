"use client";
import { useRouter } from "next/navigation";
import React from "react";

type NavbarItemProps = Readonly<{
  label: string;
  active: boolean;
  path: string;
}>;

function Navlink({ label, active, path }: NavbarItemProps) {
  const router = useRouter();

  const handleNavClick = () => {
    router.push(path);
  };
  return (
    <div
      onClick={handleNavClick}
      className={`font-bold
        ${
          active
            ? "text-white cursor-default border-b-2 pb-[1px]"
            : "text-gray-400 hover:text-white hover:underline cursor-pointer transition"
        }`}
    >
      {label}
    </div>
  );
}

export default Navlink;
