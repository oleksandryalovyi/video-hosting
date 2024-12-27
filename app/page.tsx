import BgProvider from "@/app/components/BgProvider";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <BgProvider>
      <Navbar />

      <div className="flex flex-col justify-center items-center pt-80 px-5 text-center gap-10">
        <h1 className="font-extrabold text-white text-5xl">
          Films, series and other video content
        </h1>
        <h4 className="font-sm text-white text-3xl">
          Watch anywhere. You can cancel a subscription anytime.
        </h4>
      </div>
    </BgProvider>
  );
}
