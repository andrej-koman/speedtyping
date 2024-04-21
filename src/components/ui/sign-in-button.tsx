import Link from "next/link"
import { Button } from "./button"
import UserIcon from "~/icons/user-icon"

export default function SignInButton() {
    return (
        <Button asChild variant="ghost" size="icon">
            <Link href="/sign-in">
                <UserIcon />
            </Link>
        </Button>
    )
}