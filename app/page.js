"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const createHandle = () => {
    router.push(`/generate?handle=${text}`);
  };
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative top-12 md:top-0">
        <div className="flex items-center justify-center flex-col md:ml-[10vw] gap-4 p-4 text-center md:text-left pt-24 md:pt-4">
          <p className="text-yellow-300 font-bold text-4xl md:text-6xl">
            Everything you are. In one, simple Link in Bio
          </p>
          <p className="text-yellow-200 text-lg">
            Unify your work, social accounts, and passions with one seamless
            link that instantly introduces your audience to everything you care
            about, helping them explore and engage with your world effortlessly
            and beautifully.
          </p>
          <div className="input flex flex-col sm:flex-row gap-5 my-3 justify-center md:justify-start items-center">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="px-4 py-2 bg-white text-black rounded-xl border focus:outline-green-300 w-full sm:w-auto"
              type="text"
              placeholder="Enter Unique Handle"
            />
            <button
              onClick={() => createHandle()}
              type="button"
              className="rounded-full text-gray-900 mt-1.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm px-5 py-2.5 text-center"
            >
              Claim social url
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 md:p-0">
          <Image
            className="top-8 relative"
            alt="loading.."
            src={"/icon33.jpeg"}
            width={500}
            height={600}
          />
        </div>
      </section>
    </main>
  );
}
