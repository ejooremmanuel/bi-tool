import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials,req) {
        //@ts-expect-error testing
        const rememberMe = req.body.rememberMe === 'true';
        const user = { id: "1", name: "John Doe", email: credentials?.email,rememberMe };

        if (user && credentials?.password === "test123") {
          return user;
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: {
        user: string;
      };
      user: string;
    }) {
      if (user) token.user = user;
      return token;
    },
//@ts-expect-error testing
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Redirect for unauthenticated users
  },
};

// Export API routes in App Router format
//@ts-expect-error testing
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
