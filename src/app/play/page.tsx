import Game from "./_components/game";
import { getRandomQuote } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Play() {

    const text = (await getRandomQuote())[0];
    if (!text) {
        throw new Error("No quotes found. Please add some quotes to the database.");
    };

    return (
        <Game text={text.text} />
    )
}