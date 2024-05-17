import "dotenv/config";
import { db } from "./index";
import { migrate } from "drizzle-orm/postgres-js/migrator";

console.log("Running migrations...");

// This will run migrations on the database, skipping the ones already applied
void migrate(db, { migrationsFolder: "./drizzle" });

console.log("Migrations completed!");

process.exit(0);
