"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import Navlink from "./Navlink";
import Routes from "../router/routes";

enum NavbarLinks {
  "/" = "Home",
  "/movies" = "Movies",
  "/favorites" = "Favorites",
}

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full fixed z-40">
      {false ? (
        <div className="px-4 md:px-16 py-6 flex flex-row justify-between items-center transition duration-300">
          <div className="flex flex-row items-center">
            <Image
              onClick={() => router.push(Routes.HOME)}
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
              onClick={() => console.log("Logout")}
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
            onClick={() => signIn("cognito", { callbackUrl: Routes.HOME })}
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
