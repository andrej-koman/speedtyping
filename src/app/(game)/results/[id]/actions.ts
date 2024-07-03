"use server";
import { setPlayAsViewed, updateStats } from "~/server/queries";
import { currentUser } from "@clerk/nextjs/server";

/**
 * Handle the view play event.
 *
 */
export async function handleViewPlay(playId: number, xp: number) {
  const user = await currentUser();
  if (!user) {
    return;
  }

  await setPlayAsViewed(playId);
  await updateStats(user.id, xp);
}
