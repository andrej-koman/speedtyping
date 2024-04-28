"use client";
import { useEffect } from "react";
import { type Object3D, Quaternion, Vector3 } from "three";
import { useGame } from "~/contexts/GameContext";

export default function Game({
    quote,
}: {
    quote: Quote
}) {
    const { carRef, curveRef, textRef, cameraRef } = useGame();
    let t = 0;
    const targetQuaternion = new Quaternion();
    const carSpeed = 0.003;

    useEffect(() => {
        const handleKeyDown = (e: { key: string; }) => {
            if (!e.key.match(/^[a-zA-ZčšžČŠŽ!?:,;.]{1}$/)) return;

            if (carRef.current && curveRef.current) {
                // update the car's position to create the animation
                // eslint-disable-next-line react-hooks/exhaustive-deps
                t = (t + carSpeed) % 1;
                const point = curveRef.current.getPointAt(t);
                const tangent = curveRef.current.getTangentAt(t);
                carRef.current.position.set(point.x, point.y - 0.5, point.z + 8);

                // calculate the target rotation
                targetQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), - Math.atan2(-tangent.x, tangent.z));

                // gradually rotate the car towards the target rotation
                carRef.current.quaternion.slerp(targetQuaternion, 0.5);
            }

            if (textRef.current && cameraRef.current) {
                (textRef.current as unknown as Object3D).lookAt(cameraRef.current.position);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])


    return (
        <div className="h-[60%] text-2xl flex items-center justify-center">
            <div className="flex flex-row justify-center flex-wrap w-[40rem]">
                {quote.text.split(" ").map((word, index) => (
                    <span key={`${index} ${word}`} className="word">
                        {word.split("").map((letter, index) => (
                            <span key={`${index} ${letter}`} className="letter">
                                {letter}
                            </span>
                        ))}
                        &nbsp;
                    </span>
                ))}
            </div>
        </div>
    )
}