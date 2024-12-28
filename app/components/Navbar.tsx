"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Navlink from "./Navlink";

type NavbarProps = Readonly<{
  username?: string;
}>;

enum NavbarLinks {
  "/" = "Home",
  "/movies" = "Movies",
  "/favorites" = "Favorites",
}

function Navbar({ username }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full fixed z-40">
      {username ? (
        <div className="px-4 md:px-16 py-6 flex flex-row justify-between items-center transition duration-300">
          <div className="flex flex-row items-center">
            <Image
              onClick={() => router.push("/")}
              width={200}
              height={50}
              src="/images/logo.svg"
              className="h-24 w-36 cursor-pointer"
              alt="Logo"
            />
            <div className="flex-row ml-8 gap-6 hidden lg:flex">
              {Object.entries(NavbarLinks).map(([path, label]) => (
                <Navlink
                  key={path}
                  label={label}
                  active={pathname === path}
                  path={path}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <Image
              className="h-12 w-12 rounded-full mr-4"
              width={100}
              height={100}
              src="/images/devbro.png"
              alt="avatar"
            />

            <button
              className="flex
                flex-row
                items-center
                bg-red-600
                py-1
                px-4
                text-white
                font-semibold
                rounded-[4px]
                hover:bg-red-700
                transition"
              onClick={() => console.log("logout")}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-16 py-6 flex flex-row justify-between items-center transition duration-300">
          <Image
            width={100}
            height={100}
            src="/images/logo.svg"
            className="h-24 w-36"
            alt="Logo"
          />

          <button
            onClick={() => router.push("/auth")}
            className="
                flex
                flex-row
                items-center
                bg-red-600
                py-1
                px-4
                text-white
                font-semibold
                rounded-[4px]
                hover:bg-red-700
                transition
                "
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
