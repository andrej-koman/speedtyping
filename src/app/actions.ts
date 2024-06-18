"use server";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";

export async function getUserStats(userId: string) {
  // TODO
  // - Fetch the user from Clerk
  // - Fetch the users stats from the database
  // - Return the user object with the stats
  return currentUser;
}
