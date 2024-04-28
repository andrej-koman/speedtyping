import { getRandomQuote } from "~/server/queries";
import Game3DModel from "./_components/game-model";
import { Euler, Vector3 } from "three";
import { calculateCarSpeed } from "~/lib/utils";

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
        <div className="container flex flex-col p-0 items-center justify-center w-screen h-[calc(100vh-3.6rem)]">
            <div className="h-[60%] text-2xl flex items-center justify-center">
                <div className="flex flex-row justify-center flex-wrap w-[40rem]">
                    {quote.text.split(' ').map((element, index) => {
                        return (
                            <>
                                <div key={`${element} ${index}`} className="word">
                                    {element.split('').map((letter, index) => {
                                        return (
                                            <span className="letter" key={`${letter} ${index}`}>{letter}</span>
                                        )
                                    })
                                    }
                                </div>
                                {index !== quote.text.split(' ').length - 1 && (
                                    <div className="word-space">
                                        &nbsp;
                                    </div>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
            <Game3DModel cameraRotation={cameraRotation} cameraPosition={cameraPosition} center={center} carSpeed={carSpeed} />
        </div>
    )
}