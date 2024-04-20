import Game from "./_components/game";
import { getRandomQuote } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Play() {

    const quote = (await getRandomQuote())[0];
    if (!quote) {
        throw new Error("No quotes found. Please add some quotes to the database.");
    };

    return (
        <Game quote={quote} />
    )
}