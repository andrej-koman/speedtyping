CREATE TABLE IF NOT EXISTS "quotes" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"source" varchar NOT NULL,
	"type" varchar NOT NULL,
	"author" varchar NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
