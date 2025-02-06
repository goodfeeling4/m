import Image from "next/image";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";
import Uploader from "@/components/uploader";
import { Toaster } from "@/components/toaster";

export default function Home() {
  return (
    <main className="flex relative flex-col justify-center items-center min-h-screen">
      <Toaster />
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        upload image
      </h1>
      <div className="p-12 mx-auto w-full max-w-xl rounded-lg ring-1 shadow-xl backdrop-blur-lg bg-white/30 ring-gray-900/5">
        <Uploader />
      </div>
      <p className="mt-6 w-full max-w-lg font-light text-center text-gray-600">
        <Link
          href="https://goodfeel4ever.4nets.org/"
          className="p-4 font-medium underline bg-gray-300 rounded-md transition-colors underline-offset-4 hover:text-black"
        > 
          click to see your impact
        </Link>
        .
      </p>
      <div className="flex justify-between px-20 py-10 w-full sm:absolute sm:bottom-0"></div>
    </main>
  );
}
