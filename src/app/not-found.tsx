import Link from "next/link";
import { Button } from "~/components/ui/button";
import BackIcon from "~/icons/back-icon";
import Illustration404 from "~/illustrations/404-illustration";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-8">
      <Illustration404 />
      <Button asChild type="button" variant="default">
        <Link href="/">
          <BackIcon className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
