import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

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
  lengthWord: varchar("lengthWord").default("short").notNull(),
});

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  quote_id: integer("quote_id")
    .references(() => quotes.id)
    .notNull(),
  user_id: varchar("user_id").notNull(),
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id").notNull(),
  xp: integer("xp").default(0).notNull(),
  total_started: integer("total_games").default(0).notNull(),
  total_finished: integer("total_finished").default(0).notNull(),
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
