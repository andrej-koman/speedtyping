import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
  doublePrecision,
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
  total_plays: integer("total_plays").default(0).notNull(),
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const plays = pgTable("plays", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id").notNull(),
  quote_id: integer("quote_id")
    .references(() => quotes.id)
    .notNull(),
  mistakes: integer("mistakes").default(0).notNull(),
  characters: integer("characters").default(0).notNull(),
  words: integer("words").default(0).notNull(),
  time: doublePrecision("time").default(0).notNull(),
  viewed: boolean("viewed").default(false).notNull(),
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
