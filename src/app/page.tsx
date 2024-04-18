import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function HomePage() {
  // Add a button, that goes to /play
  return (
    <>
      <SignedOut>
        <main className="flex justify-center items-center mt-3">
          <h1 className="text-4xl font-bold text-center">
            Welcome to the Quote Game. Please sign in to play!
          </h1>
        </main>
      </SignedOut>
      <SignedIn>
        <main className="flex justify-center items-center mt-3">
          <div className="container flex flex-col h-14 max-w-screen-lg items-center justify-between">
            <h1 className="text-4xl font-bold text-center">Welcome to the Quote Game!</h1>
            <p className="text-lg text-center">Click the button below to start playing!</p>
            <a href="/play" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Play
            </a>
          </div>
        </main>
      </SignedIn>
    </>
  );
}