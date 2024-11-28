import NextAuth, {
  type DefaultSession,
  type User as NextAuthUser,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface JWT {
    role: string;
    id: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

interface CustomUser extends NextAuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const users: CustomUser[] = [
          {
            id: "1",
            name: "Admin User",
            email: "admin@email.com",
            role: "admin",
          },
          {
            id: "2",
            name: "Normal User",
            email: "user@email.com",
            role: "user",
          },
        ];

        const matchedUser = users.find(
          (user) => user.email === credentials?.email
        );

        if (matchedUser) {
          return matchedUser;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as CustomUser).role;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id) session.user.id = token.id as string;
      if (token.role) session.user.role = token.role as string;
      return session;
    },
  },
  trustHost: true,
  pages: {
    signIn: "/login",
  },
});
