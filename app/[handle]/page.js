import Link from "next/link";
import { prismaC } from "../lib/db";
import Image from "next/image";

export default async function Page({ params }) {
  const { handle } = await params;
  console.log(handle);
  const items = await prismaC.user.findFirst({ where: { handle: handle } });
  console.log(items.pic);

  return (
    <div className="min-h-screen flex justify-center py-10">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Profile Picture */}
        <Image
          src={items.pic}
          width={100}
          height={100}
          alt="loadin"
          className="rounded-full"
        />
        {/* Handle */}
        <span className="font-bold text-2xl mt-4">@{items.handle}</span>
        {/* Links */}
        <div className="flex flex-col w-full mt-8">
          {(items.links ? JSON.parse(items.links) : []).map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="py-4 px-2 bg-yellow-300 text-black rounded-md my-3 text-center">
                {item.linktext}
              </div>
            </Link>
          ))}
        </div>
        SHARE BY COPYING THE PAGE URL
      </div>
    </div>
  );
}
