import Link from "next/link"
import { Button } from "./button"
import SignInIcon from "~/icons/sign-in-icon"

export default function SignInButton() {
    return (
        <Button asChild variant="ghost" size="icon">
            <Link href="/sign-in">
                <SignInIcon className="h-4 w-4" />
            </Link>
        </Button>
    )
}