"use client"
import { AuthCard } from "@/components/auth/auth-card";

export const LoginForm = () => {
    return (
        <AuthCard cardTitle="Welcome Back!" backButtonHref="/auth/register" backButtonLabel="Create a new Account " showSocials>
            <div>
                <h1>Hey</h1>
            </div>
        </AuthCard>
    )
}