import Image from "next/image";
import localFont from "next/font/local";

import { NavBar, Footer } from "@/components/NavBar";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-grow">

        <h1 className="font-nunito text-8xl text-primary-400">test</h1>
        <input
          type="text"
          placeholder="Test UI"
          className="input input-bordered w-full max-w-xs bg-red-100 text-red-600"
        />
        <button className="btn bg-red-500">Button</button>
      </div>

      <Footer />
    </div>
  );
}
