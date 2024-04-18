import Game from "./_components/game";
import { getRandomQuote } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Play() {

    const text = (await getRandomQuote())[0];
    if (!text) {
        throw new Error("No quotes found");
    };

    return (
        <div className="container flex flex-col h-14 max-w-screen-lg items-center justify-between">
            <Game text={text.text} />
        </div>
    )
}