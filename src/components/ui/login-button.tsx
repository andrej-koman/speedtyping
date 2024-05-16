import Link from "next/link";
import { Button } from "./button";
import SignInIcon from "~/icons/sign-in-icon";

export default function LoginButton() {
  return (
    <Button asChild variant="ghost" size="icon">
      <Link href="/login">
        <SignInIcon className="h-6 w-6" />
      </Link>
    </Button>
  );
}
