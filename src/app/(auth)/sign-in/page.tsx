import type { Metadata } from "next"
import Link from "next/link"
import Logo from "~/app/_components/logo"
import { Button } from "~/components/ui/button"

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function SignInPage() {
    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Button asChild variant="ghost">
                    <Link
                        href="/examples/authentication"
                        className="absolute right-4 top-4 md:right-8 md:top-8"
                    >
                        Login
                    </Link>
                </Button>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Logo />
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}