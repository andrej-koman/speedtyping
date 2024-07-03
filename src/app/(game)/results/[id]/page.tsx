import Results from "../_components/results";
import { getResults } from "~/server/queries";
import { currentUser } from "@clerk/nextjs/server";
import { getUserPlay } from "~/server/queries";
import { redirect } from "next/navigation";

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  const user = await currentUser();
  if (!user) throw new Error("User not found");

  const play = await getUserPlay(params.id, user.id);
  if (!play) return redirect("/notfound");

  const results = await getResults(user, play);
  return (
    <div className="flex h-[calc(100vh-5rem)] w-screen flex-col items-center p-0">
      <Results results={results} />
    </div>
  );
}
