import { randomBytes, randomUUID } from "crypto";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch('/api/auth/authorize', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                if (res.ok && user) {
                    return user
                  }
                return null
            }
        })
    ],
    secret: 'xj8yQh6JbREhTUgfZvFyKFFap3hvq7ySBuoWcjfGEAQ=',
    session: {
        strategy: 'database',
        maxAge: 60 * 60 * 24 * 14,
        updateAge: 24 * 60 * 60,

        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    },
    pages: {
        signIn: '/login',
        signOut: '/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request'
    }
})

export { handler as GET, handler as POST }