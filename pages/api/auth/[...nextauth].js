import NextAuth from "next-auth";
import clientPromise from "./lib/db";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise, {
    collection: "sessions",
    databaseName: "auth",
  }),

  callbacks: {
    async session(session, user) {
      return session;
    },
  },
};

export default NextAuth(authOptions);
