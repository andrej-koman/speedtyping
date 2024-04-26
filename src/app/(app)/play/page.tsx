import { getRandomQuote } from "~/server/queries";
import Game3DModel from "./_components/game-model";
import { Vector3 } from "three";

export const dynamic = "force-dynamic";

export default async function Play() {
    const cameraPosition = new Vector3(-15, 30, 60);
    const center = new Vector3(-15, -5, 20);

    const quote = (await getRandomQuote())[0];
    if (!quote) {
        throw new Error("No quotes found. Please add some quotes to the database.");
    };

    return (
        <div className="container flex flex-col items-center justify-center w-screen h-screen">
            <div className="w-[100%] h-[40%] flex items-center justify-center">
                {quote.text.split(' ').map(element => {
                    return <span key={element}>{element}</span>;
                })}
            </div>
            <div className="w-[100%] h-[60%]">
                <Game3DModel cameraPosition={cameraPosition} center={center} />
            </div>
        </div>
    )
}