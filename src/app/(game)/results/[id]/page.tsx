import { currentUser } from "@clerk/nextjs/server";
import NotFound from "~/app/not-found";
import { getUserPlay } from "~/server/queries";

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  const user = await currentUser();
  if (!user) {
    return <NotFound />;
  }

  const play = await getUserPlay(params.id, user.id);
  if (!play) {
    return <NotFound />;
  }

  if (play.viewed === false) {
    // Create the animation that adds the xp to the user
    // Set the play as viewed
  }

  return (
    <div>
      <h1>Play Results</h1>
      <p>Mistakes: {play.mistakes}</p>
      <p>Time: {play.time}</p>
      <p>Characters: {play.characters}</p>
      <p>Words: {play.words}</p>
    </div>
  );
}
