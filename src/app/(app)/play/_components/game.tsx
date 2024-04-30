"use client";
import { useEffect } from "react";
import { type Object3D, Quaternion, Vector3 } from "three";
import { useGame } from "~/contexts/GameContext";
import { setUpGame } from "~/lib/utils";

export default function Game({
  quote,
  carSpeed,
}: {
  quote: Quote;
  carSpeed: number;
}) {
  const { carRef, curveRef, textRef, cameraRef } = useGame();
  const targetQuaternion = new Quaternion();
  let t = 0;

  useEffect(() => {
    setUpGame(document.querySelectorAll(".word"));

    const handleKeyDown = (e: { key: string }) => {
      if (!e.key.match(/^[a-zA-ZčšžČŠŽ!?:,;. ]{1}$/)) return;

      if (carRef.current && curveRef.current) {
        // update the car's position to create the animation
        // eslint-disable-next-line react-hooks/exhaustive-deps
        t += carSpeed;

        // Make the car stop at the end of the curve
        t = Math.min(1, t);
        const point = curveRef.current.getPointAt(t);
        const tangent = curveRef.current.getTangentAt(t);
        carRef.current.position.set(point.x, point.y - 0.5, point.z + 8);

        // Calculate the target rotation
        targetQuaternion.setFromAxisAngle(
          new Vector3(0, 1, 0),
          -Math.atan2(-tangent.x, tangent.z),
        );

        // Gradually rotate the car towards the target rotation
        carRef.current.quaternion.slerp(targetQuaternion, 0.5);
      }

      if (textRef.current && cameraRef.current) {
        (textRef.current as unknown as Object3D).lookAt(
          cameraRef.current.position,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-[100%] items-center justify-center text-2xl">
      <div className="flex w-[40rem] flex-row flex-wrap justify-center">
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
  );
}
