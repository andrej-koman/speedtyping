"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createUserStats,
  getUserStatsForUser,
  userHasStatsObject,
} from "~/server/queries";
import { currentUser } from "@clerk/nextjs/server";

export async function getUserStats() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // If the user has no stats object, create one
  if (await userHasStatsObject(user.id)) {
    const stats = await getUserStatsForUser(user.id);
    if (stats) {
      return stats;
    }
  } else {
    await createUserStats(user.id);
    const stats = await getUserStatsForUser(user.id);
    if (stats) {
      return stats;
    }
  }

  return null;
}

export async function setLocale(locale: string, url: string) {
  // Set the cookie NEXT_LOCALE to the new locale
  // and reload the page
  cookies().set("NEXT_LOCALE", locale);

  // Redirect to the current page
  redirect(url);
}
