import Link from "next/link";
import { Button } from "./button";
import { LogIn } from "lucide-react";

export default function LoginButton() {
  return (
    <Button asChild variant="ghost" size="icon">
      <Link href="/login">
        <LogIn className="h-4 w-4" />
      </Link>
    </Button>
  );
}
