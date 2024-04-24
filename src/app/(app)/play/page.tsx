import { getRandomQuote } from "~/server/queries";
import Game3DModel from "./_components/game-model";

export const dynamic = "force-dynamic";

export default async function Play() {

    const quote = (await getRandomQuote())[0];
    if (!quote) {
        throw new Error("No quotes found. Please add some quotes to the database.");
    };

    return (
        <div className="container flex items-center justify-center">
            <div>
                Welcome to the game
            </div>
            <div className="w-screen h-screen absolute left-0 top-0 -z-10">
                <Game3DModel />
            </div>
        </div>
    )
}