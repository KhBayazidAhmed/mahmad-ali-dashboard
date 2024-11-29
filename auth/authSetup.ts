import dbConnect from "@/lib/db/connection";
import NextAuth, {
  CredentialsSignin,
  type DefaultSession,
  type User as NextAuthUser,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/lib/db/models/User.Model";
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
class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}
class NoUserFoundLoginError extends CredentialsSignin {
  code = "No user found";
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new NoUserFoundLoginError();
        }
        const isPasswordValid = await bcrypt.compare(
          credentials?.password as string,
          user.password
        );
        if (!isPasswordValid) {
          throw new InvalidLoginError();
        }
        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
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
    redirect({ baseUrl }) {
      return `${baseUrl}/`;
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
    error: "/login",
  },
});
