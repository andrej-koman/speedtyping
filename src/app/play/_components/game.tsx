'use client';

import { useState, useEffect } from "react";

type GameProps = {
    text: string;
    words: string[];
    currentWord: string;
    typing: string;
    hasStarted: boolean;
    time: number;
    wpm: number;
}

export default function Game({ text }: { text: string }) {
    // Splice the text into an array of words
    const tmp = text.split(" ");

    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

    const [game, setGame] = useState<GameProps>({
        text: "",
        words: tmp,
        currentWord: tmp.shift() ?? "",
        typing: "",
        hasStarted: false,
        time: 0,
        wpm: 0,
    });

    /** FUNCTIONS */
    const gameInit = () => {
        // Set all the game variables
        const tmp = text.split(" ");
        setGame({
            text: "",
            words: tmp,
            currentWord: tmp.shift() ?? '',
            typing: "",
            hasStarted: false,
            time: 0,
            wpm: 0,
        });
    }

    /** EVENT HANDLERS */
    const handleStart = () => {
        gameInit();
        setGame((prevGame) => ({ ...prevGame, hasStarted: true }));
    }

    const handleCancel = () => {
        gameInit();
        setGame((prevGame) => ({ ...prevGame, hasStarted: false }));
    }

    /** HOOKS */
    useEffect(() => {
        const calculateWPM = () => {
            // Calculate the words per minute
            const numberOfWords = game.text.split(" ").length
            const minutes = game.time / 600;
            return Math.floor(numberOfWords / minutes);
        }


        const handleKeyDown = (e: { key: string; }) => {
            // If the key is backspace, remove the last letter from the currentTypedWord
            if (e.key === "Backspace") {
                if (game.typing === "") return;

                setGame((prevGame) => ({ ...prevGame, typing: prevGame.typing.slice(0, -1) }));

                return;
            }

            if (e.key === " ") {
                // TODO: Naredi tako, da se preveri vsaka črka posebej
                if (game.typing === game.currentWord) {
                    const tmp = game.words;
                    const tmpWord = tmp.shift() ?? "";
                    setGame((prevGame) => ({
                        ...prevGame,
                        currentWord: tmpWord,
                        typing: "",
                        words: tmp,
                        text: (prevGame.text || "") + " " + prevGame.currentWord,
                        wpm: calculateWPM()
                    }));
                }

                return;
            }

            // If the key is not a letter or a special character, return
            if (!e.key.match(/^[a-zA-ZčšžČŠŽ!?:,;.]{1}$/)) return;


            setGame((prevGame) => {
                const newTyping = prevGame.typing + e.key;

                if (prevGame.words.length === 0 && prevGame.currentWord === newTyping) {
                    console.log("Game over");
                    return {
                        ...prevGame,
                        text: (prevGame.text || '') + " " + prevGame.currentWord,
                        hasStarted: false,
                        typing: ""
                    };
                }

                return { ...prevGame, typing: newTyping }
            });
        };


        if (game.hasStarted) {
            document.addEventListener("keydown", handleKeyDown);

            // setting time from 0 to 1 every 100 milisecond using javascript setInterval method

            setIntervalId(setInterval(() => setGame((prevGame) => ({ ...prevGame, time: prevGame.time + 1 })), 100));
        } else {
            document.removeEventListener("keydown", handleKeyDown);
            clearInterval(intervalId);
        }

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            clearInterval(intervalId);
        };
    }, [game.hasStarted, game.typing, game.currentWord, game.words, intervalId, game.text, game.time]); // Empty dependency array means this effe</GameProps></Timeout>ct runs once on mount and cleanup on unmount

    return (
        <>
            <div className="text-foreground relative">
                <span>{text}</span>
                <span className="text-green-500 absolute left-0 top-0">{game.text}</span>
            </div>
            <div className="text-foreground relative">
                <span>{text}</span>
                <span className="text-green-500 absolute left-0 top-0">{game.text}</span>
            </div>
            <div className="flex items-center">
                <span className="text-foreground">{game.typing}</span>
            </div>
            <div>
                <button onClick={handleStart} disabled={game.hasStarted} className="me-3">
                    <i className="fa-solid fa-play me-3" aria-hidden></i> Start
                </button>
                <button onClick={handleCancel} disabled={!game.hasStarted}>
                    <i className="fa-solid fa-xmark me-3" aria-hidden></i>Cancel
                </button>
            </div>
            <div>
                <span className="me-3">Time: {game.time / 10}s</span>
                <span>WPM: {game.wpm}</span>
            </div>
        </>
    )
}