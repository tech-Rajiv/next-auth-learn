"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";

function Navbar() {
  const session = useSession();
  return (
    <div className="flex text-white py-2 px-5 justify-between gap-5">
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>signout</button>
      <Link href={"/user"}>User</Link>
      {JSON.stringify({ session })}
    </div>
  );
}

export default Navbar;
