"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import axios from "axios";

import BgProvider from "@/app/components/BgProvider";
import Routes from "@/app/router/routes";
import Input from "@/app/components/Input";

enum VariantEnum {
  login = "login",
  register = "register",
}

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [variant, setVariant] = useState<VariantEnum>(VariantEnum.login);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const changeVariant = () => {
    setVariant((prevVariant) =>
      prevVariant === VariantEnum.login
        ? VariantEnum.register
        : VariantEnum.login
    );
  };

  const register = async () => {
    console.log("register");
  };

  const login = async () => {
    console.log("login");
  };

  return (
    <BgProvider removeBgOnMobile>
      <div className="flex flex-col items-center h-full">
        <Image
          onClick={() => router.push(Routes.HOME)}
          width={100}
          height={100}
          src="/images/logo.svg"
          className="h-24 w-36 hover:cursor-pointer"
          alt="Logo"
        />
        <div className="text-white self-center flex-grow flex flex-col justify-center">
          <div className="flex flex-col gap-4 p-4 rounded-md">
            <h2>{variant === VariantEnum.login ? "Login" : "Register"}</h2>
            {variant === VariantEnum.register && (
              <Input
                id="username"
                label="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            )}
            <Input
              id="email"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {variant === VariantEnum.login ? (
              <div
                className="flex flex-row justify-between text-gray-500 hover:underline cursor-pointer hover:text-white"
                onClick={() => changeVariant()}
              >
                Don&apos;t have an account? Signup
              </div>
            ) : (
              <div
                className="flex flex-row justify-between text-gray-500 hover:underline cursor-pointer hover:text-white"
                onClick={() => changeVariant()}
              >
                Already have an account? Login
              </div>
            )}

            {variant === VariantEnum.login ? (
              <button onClick={login} className="bg-red-600 py-2 rounded">
                Login
              </button>
            ) : (
              <button onClick={register} className="bg-red-600 py-2 rounded">
                Register
              </button>
            )}
          </div>
          <div className="flex flex-row items-center justify-evenly w-full">
            <div
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                cursor-pointer
                hover:opacity-80
                transition"
              onClick={() => signIn("google", { callbackUrl: Routes.HOME })}
            >
              <FaGoogle size={32} />
            </div>
            <div
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                cursor-pointer
                hover:opacity-80
                transition"
              onClick={() => signIn("github", { callbackUrl: Routes.HOME })}
            >
              <FaGithub size={32} />
            </div>
          </div>
        </div>
      </div>
    </BgProvider>
  );
};

export default AuthPage;
