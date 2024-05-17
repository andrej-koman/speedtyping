import { sql } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const lengthEnum = pgEnum("length", ["short", "medium", "long", "very_long"]);

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  source: varchar("source").notNull(),
  type: varchar("type").notNull(),
  author: varchar("author").notNull(),
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  lengthWord: lengthEnum("lengthWord").default("short").notNull(),
});
