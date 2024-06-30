"use client";

import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { push } = useRouter();

  const cookieData = Cookies.get("data");
  const data: any = cookieData ? JSON.parse(cookieData) : null;

  return (
    <div className=" flex flex-col-reverse gap-y-[20px] items-center justify-center p-[60px]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          Cookies.remove("token");
          Cookies.remove("data");
          push("/login");
        }}
      >
        Logout
      </button>
      <Link href={"https://github.com/nishantchy842"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://avatars.githubusercontent.com/u/117557072?v=4"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data?.name}</div>
            <p className="text-gray-700 text-base">{data?.email}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #ComputerEngineer
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Nextjs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Nestjs
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
