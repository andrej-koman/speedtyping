import Link from "next/link";
import "./not-found.css";
import { Separator } from "~/components/ui/separator";
import Logo from "./_components/logo";

function NotFoundLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="hover:text-primary hover:underline underline-offset-4" href={href}>
      {children}
    </Link>
  );
}

export default function NotFound() {
  return (
    <div className="not-found grid h-screen w-screen grid-cols-3 grid-rows-4">
      <div className="col-start-1 row-span-2 row-start-2 ms-auto flex flex-col justify-start">
        <Logo href="/" size="lg" />
        <h1 className="text-[150px]">404</h1>
        <h1 className="text-5xl font-bold">Page not found</h1>
        <div className="mt-12 flex flex-row items-center justify-start space-x-4">
          <NotFoundLink href="/">Home</NotFoundLink>
          <Separator orientation="vertical" />
          <NotFoundLink href="/search">Search</NotFoundLink>
        </div>
      </div>
    </div>
  );
}
