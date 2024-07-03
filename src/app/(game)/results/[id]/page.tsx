import { currentUser } from "@clerk/nextjs/server";
import NotFound from "~/app/not-found";
import { getUserPlay, getQuoteById } from "~/server/queries";
import Results from "../_components/results";
import { calculateXPGained } from "~/lib/game";

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  let xp = null,
    user = null,
    play = null,
    quote = null;
  user = await currentUser();
  if (!user) {
    return <NotFound />;
  }

  play = await getUserPlay(params.id, user.id);
  if (!play) {
    return <NotFound />;
  }

  quote = await getQuoteById(play.quote_id);
  if (!quote) {
    return <NotFound />;
  }

  if (play.viewed === false) {
    xp = calculateXPGained(play);
  }

  return (
    <div className="flex h-[calc(100vh-5rem)] w-screen flex-col items-center p-0">
      <Results play={play} xp={xp} />
    </div>
  );
}
