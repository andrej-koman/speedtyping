import Link from "next/link";
import { Button } from "./button";
import { LogIn } from "lucide-react";

export default function LoginButton() {
  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href="/login">
        <LogIn className="mr-2 h-5 w-5" />
        Login
      </Link>
    </Button>
  );
}
