"use client";
import { useEffect, useRef } from "react";
import { type Quaternion, Vector3 } from "three";
import { useGame } from "~/contexts/GameContext";
import { type PlayStats } from "types/game";

export default function GameText({
  quote,
  carSpeed: _carSpeed,
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

  const currentCharIndexRef = useRef(0);
  const gameStartedRef = useRef(false);
  const targetTRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

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
    targetTRef.current = 0;
    
    // Cancel any ongoing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    statistics.current = {
      time: 0,
      characters: 0,
      words: 0,
      mistakes: 0,
    };

    initializeLetterStates();
    updateCursor();
    
    const handleKeyDown = (e: { key: string }) => {
      // Handle backspace/delete
      if (e.key === "Backspace" || e.key === "Delete") {
        handleBackspace();
        return;
      }

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

    const handleBackspace = () => {
      if (currentCharIndexRef.current <= 0) return;

      // Move back one character
      currentCharIndexRef.current--;

      const { element } = getCurrentLetterElement();
      if (element) {
        element.classList.remove("correct", "incorrect", "typed");
        element.classList.add("upcoming");
      }

      if (statistics.current.characters > 0) {
        statistics.current.characters--;
      }

      if (quote.text[currentCharIndexRef.current] === " " && statistics.current.words > 0) {
        statistics.current.words--;
      }

      updateCursor();
      moveCar();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      
      if (timerIntervalRef.current) {
        window.clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
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
    document.querySelectorAll(".letter.cursor").forEach(el => el.classList.remove("cursor"));

    if (currentCharIndexRef.current >= quote.text.length) {
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
      const targetProgress = Math.min(currentCharIndexRef.current / totalCharacters, 1);
      
      targetTRef.current = targetProgress;
      if (!animationFrameRef.current) {
        animateCarMovement();
      }
    }
  };

  const animateCarMovement = () => {
    if (!carRef.current || !curveRef.current) return;

    const currentT = tRef.current;
    const targetT = targetTRef.current;
    
    // Calculate the distance to move this frame
    const distance = targetT - currentT;
    
    // If we're close enough, snap to target and stop animation
    if (Math.abs(distance) < 0.001) {
      tRef.current = targetT;
      updateCarPosition();
      animationFrameRef.current = null;
      return;
    }
    
    // Move towards target smoothly
    // Adjust the 0.05 value to make car faster (higher) or slower (lower)
    const speed = Math.min(Math.abs(distance) * 0.1, 0.05);
    tRef.current += distance > 0 ? speed : -speed;
    
    updateCarPosition();
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animateCarMovement);
  };

  const updateCarPosition = () => {
    if (!carRef.current || !curveRef.current) return;
    
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
        0.1, // Reduced from 0.5 for smoother rotation
      );
    }
  };

  return (
    <div
      className={`noselect flex w-[60rem] flex-row flex-wrap justify-center leading-relaxed text-3xl ${className ?? ""}`}
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
