"use client";
import { useEffect, useRef } from "react";
import { type Object3D, Quaternion, Vector3 } from "three";
import { useGame } from "~/contexts/GameContext";

export default function GameText({
  quote,
  carSpeed,
  className,
  has3D,
}: {
  quote: Quote;
  carSpeed: number;
  className?: string;
  has3D: boolean;
}) {
  const { carRef, curveRef, textRef, cameraRef, hasStartedState } = useGame();
  const [hasStarted, setHasStarted] = hasStartedState;
  const currentWordIndex = useRef(0);
  const currentLetterIndex = useRef(0);

  const words = useRef([] as unknown as NodeListOf<Element>);

  const targetQuaternion = new Quaternion();
  let t = 0;

  // TODO
  // - Dodaj, da se game nekak konča
  // - Dodaj, da se spaci upoštevajo / ugotovi kako jih upoštevati
  // - Naredi, da se ob prvem začetku tipkanja skrijejo nepomembne stvari
  useEffect(() => {
    words.current = document.querySelectorAll(".word");
    const handleKeyDown = (e: { key: string; ctrlKey: boolean }) => {
      if (!e.key.match(/^[a-zA-ZčšžČŠŽ!?:,;. ]{1}$/)) return;

      const currentWord = words.current[currentWordIndex.current];
      const letters = currentWord?.querySelectorAll(".letter");
      const currentLetter = currentWord?.children[currentLetterIndex.current];

      if (!currentLetter || !currentWord || !letters) return;

      if (!hasStarted) {
        setHasStarted(true);
      }

      if (e.key === " ") {
        moveCar();
        updateText();
        return;
      }

      if (e.key === currentLetter.textContent) {
        currentLetter.classList.add("correct");
        currentLetterIndex.current++;

        // Check if the word is completed
        if (currentLetterIndex.current >= letters.length) {
          currentWordIndex.current++;
          currentLetterIndex.current = 0;
        }

        // Move the car
        moveCar();
        // Update the text
        updateText();

        // Check if the game is finished
        if (currentWordIndex.current >= words.current.length) {
          console.log("Game finished");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveCar = () => {
    if (carRef.current && curveRef.current && has3D) {
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
  };

  const updateText = () => {
    if (textRef.current && cameraRef.current) {
      (textRef.current as unknown as Object3D).lookAt(
        cameraRef.current.position,
      );
    }
  };

  return (
    <div
      className={`noselect flex w-[60rem] flex-row flex-wrap justify-center ${className ?? ""}`}
    >
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
  );
}
