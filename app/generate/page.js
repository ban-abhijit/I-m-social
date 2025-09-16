"use client";
import Image from "next/image";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Gene() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };
  async function submitLinks(links, handle, pic) {
    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          links: JSON.stringify(links),
          handle,
          pic,
        }),
      });

      const data = await res.json();
      console.log("data", data);
      if (data.success) {
        toast.success(data.message);
        setLinks([]);
        sethandle("");
        setpic("");
        router.push(`/${handle}`);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Error submitting links:", err);
      throw err;
    }
  }

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-4 mt-6 p-4">
        <h1 className="text-yellow-300 text-3xl sm:text-4xl font-bold mb-3 text-center">
          Create Your Social!
        </h1>
        <div className="flex flex-col gap-5 w-full max-w-sm">
          <h2 className="text-yellow-200 text-center sm:text-left">
            Step1: CLAIM YOUR HANDLE
          </h2>
          <input
            className="bg-white text-black p-2 rounded-2xl focus:outline-green-300 w-full"
            type="text"
            placeholder="Choose a handle"
            value={handle || ""}
            onChange={(e) => {
              sethandle(e.target.value);
            }}
          />
          <h2 className="text-yellow-200 text-center sm:text-left">
            Step2: ADD LINKS
          </h2>
          {links &&
            links.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 mb-2 w-full"
              >
                <input
                  className="bg-white text-black p-2 rounded-2xl focus:outline-green-300 w-full"
                  type="text"
                  placeholder="Enter link"
                  value={item.link || ""}
                  onChange={(e) => {
                    handleChange(index, e.target.value, item.linktext);
                  }}
                />
                <input
                  className="bg-white text-black p-2 rounded-2xl focus:outline-green-300 w-full"
                  type="text"
                  placeholder="Enter link text"
                  value={item.linktext || ""}
                  onChange={(e) => {
                    handleChange(index, item.link, e.target.value);
                  }}
                />
              </div>
            ))}
          <button
            onClick={addLink}
            type="button"
            className="rounded-full text-gray-900 mt-1.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
          >
            Add link
          </button>
          <h2 className="text-yellow-200 text-center sm:text-left">
            Step3: ADD PICTURE AND FINALIZE
          </h2>
          <input
            className="bg-white text-black p-2 rounded-2xl focus:outline-green-300 w-full"
            type="text"
            placeholder="Link to your photo"
            value={pic || ""}
            onChange={(e) => {
              setpic(e.target.value);
            }}
          />
          <button
            disabled={
              pic === "" ||
              handle === "" ||
              (links[0] && (links[0].linktext === "" || links[0].link === ""))
            }
            onClick={() => submitLinks(links, handle, pic)}
            type="button"
            className="rounded-full text-gray-900 mt-1.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create your Social Link
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full h-screen justify-center items-center p-4">
        <ToastContainer />
        <Image
          className="relative top-10"
          src={"/rightphoto.jpeg"}
          width={700}
          alt="Preview"
          height={800}
        />
      </div>
    </div>
  );
}

export default function Generate() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <Gene />
    </Suspense>
  );
}
