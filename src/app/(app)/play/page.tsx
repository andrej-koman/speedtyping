import { getRandomQuote } from "~/server/queries";
import Game3DModel from "./_components/game-model";
import { Euler, Vector3 } from "three";
import { calculateCarSpeed } from "~/lib/utils";
import Game from "./_components/game";
import { GameProvider } from "~/contexts/GameContext";

export const dynamic = "force-dynamic";

export default async function Play() {
    const cameraPosition = new Vector3(-15, 30, 60);
    const cameraRotation = new Euler(5, 25, 0);
    const center = new Vector3(-15, -5, 20);

    const quote = (await getRandomQuote())[0];
    if (!quote) {
        throw new Error("No quotes found. Please add some quotes to the database.");
    };

    const carSpeed = calculateCarSpeed(quote.text.length);

    return (
        <GameProvider>
            <div className="container flex flex-col p-0 items-center justify-center w-screen h-[calc(100vh-3.6rem)]">
                <Game carSpeed={carSpeed} quote={quote} />
                <Game3DModel cameraRotation={cameraRotation} cameraPosition={cameraPosition} center={center} carSpeed={carSpeed} />
            </div>
        </GameProvider>
    )
}