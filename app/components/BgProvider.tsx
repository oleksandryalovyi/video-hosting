import React from "react";

type BgProviderProps = Readonly<{
  children: React.ReactNode;
  removeBgOnMobile?: boolean;
}>;

const BgProvider: React.FC<BgProviderProps> = ({
  children,
  removeBgOnMobile = false,
}) => {
  return (
    <div
      className={`h-full w-full bg-[url('/images/main-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover `}
    >
      <div
        className={`bg-black w-full h-full ${
          removeBgOnMobile ? "lg:bg-opacity-60" : "bg-opacity-60"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BgProvider;
