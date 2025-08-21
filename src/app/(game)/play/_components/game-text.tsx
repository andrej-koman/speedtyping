"use client";
import { useEffect, useRef } from "react";
import { type Quaternion, Vector3 } from "three";
import { useGame } from "~/contexts/GameContext";
import { type PlayStats } from "types/game";

export default function GameText({
  quote,
  carSpeed,
  className,
  handleGameFinish,
  handleGameStart,
}: {
  quote: Quote;
  carSpeed: number;
  className?: string;
  handleGameFinish: (stats: PlayStats) => void;
  handleGameStart: () => void;
}) {
  // Handle 3D stuff
  const {
    carRef,
    curveRef,
    textRef,
    targetQuaternionRef,
    tRef,
  } = useGame();

  // Game specific stuff
  const words = useRef<NodeListOf<Element>>(
    [] as unknown as NodeListOf<Element>,
  );

  // Single character index for simpler tracking
  const currentCharIndexRef = useRef(0);
  const gameStartedRef = useRef(false);

  // Statistics
  const statistics = useRef<PlayStats>({
    time: 0,
    characters: 0,
    words: 0,
    mistakes: 0,
  });

  const timerIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    words.current = document.querySelectorAll(".word");
    
    // Reset everything
    currentCharIndexRef.current = 0;
    gameStartedRef.current = false;
    tRef.current = 0;
    
    statistics.current = {
      time: 0,
      characters: 0,
      words: 0,
      mistakes: 0,
    };

    // Initialize all letters as upcoming
    initializeLetterStates();
    
    // Set initial cursor
    updateCursor();
    
    const handleKeyDown = (e: { key: string }) => {
      if (!e.key.match(/^[a-zA-ZčšžČŠŽ!?:,;. ]{1}$/)) return;

      const currentChar = quote.text[currentCharIndexRef.current];
      if (!currentChar) return; 

      if (e.key === " ") {
        if (currentChar === " ") {
          handleCorrectChar();
        }
        return;
      }

      if (e.key === currentChar) {
        handleCorrectChar();
      } else {
        handleIncorrectChar();
      }
    };

    const handleCorrectChar = () => {
      if (!gameStartedRef.current) {
        gameStartedRef.current = true;
        handleGameStart();
        timerIntervalRef.current = window.setInterval(() => {
          if (statistics.current) statistics.current.time += 0.1;
        }, 100);
      }

      // Mark current letter as correct with better visual feedback
      const { element } = getCurrentLetterElement();
      if (element) {
        element.classList.remove("upcoming", "cursor");
        element.classList.add("correct", "typed");
      }

      // Update statistics
      statistics.current.characters++;
      
      // If we just typed a space, increment words
      if (quote.text[currentCharIndexRef.current] === " ") {
        statistics.current.words++;
      }

      // Move to next character
      currentCharIndexRef.current++;

      // Check if game is finished
      if (currentCharIndexRef.current >= quote.text.length) {
        if (timerIntervalRef.current) {
          window.clearInterval(timerIntervalRef.current);
        }
        handleGameFinish(statistics.current);
        return;
      }

      updateCursor();
      moveCar();
    };

    const handleIncorrectChar = () => {
      // Mark current letter as incorrect with visual feedback
      const { element } = getCurrentLetterElement();
      if (element) {
        element.classList.remove("upcoming", "cursor");
        element.classList.add("incorrect", "typed");
      }

      // Update statistics
      statistics.current.mistakes++;
      
      // Still move to next character
      currentCharIndexRef.current++;

      // Check if game is finished
      if (currentCharIndexRef.current >= quote.text.length) {
        if (timerIntervalRef.current) {
          window.clearInterval(timerIntervalRef.current);
        }
        handleGameFinish(statistics.current);
        return;
      }

      updateCursor();
      moveCar();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quote.id]);

  const initializeLetterStates = () => {
    const allLetters = document.querySelectorAll(".letter");
    allLetters.forEach(letter => {
      letter.classList.remove("correct", "incorrect", "cursor", "typed");
      letter.classList.add("upcoming");
    });
  };

  const getCurrentLetterElement = () => {
    let wordIndex = 0;
    let letterIndex = 0;

    for (let i = 0; i < currentCharIndexRef.current; i++) {
      if (quote.text[i] === " ") {
        wordIndex++;
        letterIndex = 0;
      } else {
        letterIndex++;
      }
    }

    if (quote.text[currentCharIndexRef.current] === " ") {
      return { element: null, wordIndex, letterIndex };
    }

    if (quote.text[currentCharIndexRef.current] !== " ") {
      const word = words.current[wordIndex];
      if (!word) return { element: null, wordIndex, letterIndex };

      const element = word.children[letterIndex] as HTMLElement;
      return { element, wordIndex, letterIndex };
    }

    return { element: null, wordIndex, letterIndex };
  };

  const updateCursor = () => {
    // Remove cursor from all elements
    document.querySelectorAll(".letter.cursor").forEach(el => el.classList.remove("cursor"));

    // Skip if we're at the end
    if (currentCharIndexRef.current >= quote.text.length) {
      return;
    }

    // Skip spaces - they don't get visual cursor
    if (quote.text[currentCharIndexRef.current] === " ") {
      return;
    }

    const { element } = getCurrentLetterElement();
    if (element) {
      element.classList.add("cursor");
    }
  };

  const moveCar = () => {
    if (carRef.current && curveRef.current) {
      const totalCharacters = quote.text.length;
      const progress = Math.min(currentCharIndexRef.current / totalCharacters, 1);
      
      tRef.current = progress;
      
      const point = curveRef.current.getPointAt(tRef.current);
      const tangent = curveRef.current.getTangentAt(tRef.current);
      carRef.current.position.set(point.x, point.y - 0.5, point.z + 8);

      // Calculate the target rotation
      if (targetQuaternionRef) {
        (targetQuaternionRef.current as Quaternion).setFromAxisAngle(
          new Vector3(0, 1, 0),
          -Math.atan2(-tangent.x, tangent.z),
        );

        // Gradually rotate the car towards the target rotation
        carRef.current.quaternion.slerp(
          targetQuaternionRef.current as Quaternion,
          0.5,
        );
      }
    }
  };

  const updateText = () => {
    if (textRef.current) {
      // TODO
      // - Implement basic camera settings, which will be saved in local storage
      // - Implement the camera settings in the game
      /*
      (textRef.current as unknown as Object3D).lookAt(
      );
      */
    }
  };

  return (
    <div
      className={`noselect flex w-[60rem] flex-row flex-wrap justify-center leading-relaxed text-2xl ${className ?? ""}`}
      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
    >
      {quote.text.split(" ").map((word, wordIndex) => (
        <span key={`${wordIndex}-${word}`} className="word inline-block mr-2 mb-1">
          {word.split("").map((letter, letterIndex) => (
            <span 
              key={`${wordIndex}-${letterIndex}-${letter}`} 
              className="letter inline-block"
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
