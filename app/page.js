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
      <section className=" min-h-[100vh] grid grid-cols-2">
        <div className=" flex items-center justify-center flex-col ml-[10vw] gap-4">
          <p className="text-yellow-300 font-bold text-6xl">
            Everything you are. In one, simple Link in Bio
          </p>
          <p className="text-yellow-200">
            Showcase your work, socials, and passions with a single beautiful
            link that connects audiences instantly to everything you love.
          </p>
          <div className="input flex gap-5 my-3 justify-center ">
            {" "}
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="px-2 py-2 bg-white text-black rounded-xl border focus:outline-green-300"
              type="text"
              placeholder="Enter Unique Handle"
            ></input>
            <button
              onClick={() => createHandle()}
              type="button"
              className="rounded-full  text-gray-900 mt-1.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Claim social url
            </button>
          </div>
        </div>
        <div className=" flex items-end justify-center flex-col mr-[10vw]">
          <Image
            className="top-8 relative"
            alt="loading.."
            src={"/icon33.jpeg"}
            width={500}
            height={600}
          ></Image>
        </div>
      </section>
    </main>
  );
}
