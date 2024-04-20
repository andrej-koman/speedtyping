import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <main className="flex justify-center items-center mt-3 flex-col">
          <h1 className="text-4xl font-bold text-center">
            Welcome.
          </h1>
          <h1>
            Please sign in to play!
          </h1>
        </main>
      </SignedOut>
    </>
  );
}