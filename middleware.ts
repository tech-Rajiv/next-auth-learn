import withAuth from "next-auth/middleware";

console.log("from middleware");
export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/user/:path*"],
};
