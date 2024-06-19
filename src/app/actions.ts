"use server";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserStats(userId: string) {
  // TODO
  // - Fetch the user from Clerk
  // - Fetch the users stats from the database
  // - Return the user object with the stats
}

export async function setLocale(locale: string, url: string) {
  // Set the cookie NEXT_LOCALE to the new locale
  // and reload the page
  cookies().set("NEXT_LOCALE", locale);

  // Redirect to the current page
  redirect(url);
}
