import { AUTH_OPTIONS } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(AUTH_OPTIONS);

export const GET = handler;
export const POST = handler;
