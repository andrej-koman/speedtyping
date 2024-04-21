import Link from "next/link"
import { Button } from "./button"

export default function SignInButton() {
    return (
        <Button variant="secondary" asChild>
            <Link href="/sign-in">Sign in</Link>
        </Button>
    )
}