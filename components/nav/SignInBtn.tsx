"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

function SignInBtn() {
  return (
    <Button variant={"outline"} onClick={() => signIn()}>
      SignInBtn
    </Button>
  );
}

export default SignInBtn;
