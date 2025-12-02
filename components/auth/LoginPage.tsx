"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex flex-col gap-3 p-5 bg-white max-w-md mx-auto shadow rounded-xl">
      <div className="head">
        <h2 className="font-semibold text-lg text-center">SignIn</h2>
        <p className="mb-3 mt-2 text-center">
          please signin with your email and password
        </p>
      </div>
      <Input
        type="text"
        placeholder="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=""
      />

      <Button onClick={handleLogin}>Login</Button>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="underline cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
}
