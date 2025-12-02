import CredentialsProvider from "next-auth/providers/credentials";

export const AUTH_OPTIONS = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials: ", credentials);
        return {
          id: "01",
          name: "rajiv",
          email: "rajiv@gmail.com",
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log("token: ", token);
      if (session && session.user) {
        session.userId = token?.sub;
      }
      console.log("session: ", session);
      return session;
    },
  },
};
