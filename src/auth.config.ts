
import type { NextAuthConfig } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { signinHandler } from "@/services/auth.service";

export const authConfig: NextAuthConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email", 
                },
                password: {
                    type: "password",
                    label: "Password"
                }
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required")
                }
                const user = await signinHandler({
                    email: String(credentials.email),
                    password: String(credentials.password)
                })                
                if(!user) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })
    ],
    session: {
        strategy: "jwt",  
    },
    pages: {
        signIn: "/auth/signin"
    },
    callbacks: {
        async jwt({ user, token }) {
            return {...user, ...token}
        }
    }
};