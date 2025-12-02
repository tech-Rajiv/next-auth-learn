import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type credPros = {
  email: string | null | undefined;
  password: string | undefined;
};
export const AUTH_OPTIONS = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials: ", credentials);
        const { email, password } = credentials;
        return {
          id: "01",
          name: "rajiv",
          email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      if (session && session.user) {
        session.userId = token?.sub;
      }
      return session;
    },
  },
};
