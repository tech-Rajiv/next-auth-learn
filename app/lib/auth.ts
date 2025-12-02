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
        const { email, password } = credentials;

        return {
          id: "01",
          name: "rajiv",
          password,
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
