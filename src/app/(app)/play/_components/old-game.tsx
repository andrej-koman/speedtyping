'use client';

import { useState, useEffect } from "react";

export default function Game({ quote }: { quote: Quote }) {
    // Splice the text into an array of words
    const text = quote.text;

    const tmp = text.split(" ");

    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

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

    const startTimer = () => {
        const id = setInterval(() => {
            setGame(prevGame => ({ ...prevGame, time: prevGame.time + 1 }));
        }, 100);
        setIntervalId(id);
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    /** HOOKS */
    useEffect(() => {
        if (game.hasStarted) {
            startTimer();
        } else {
            stopTimer();
        }

        return () => {
            stopTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.hasStarted]);

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
                        typing: "",
                        hasEnded: true,
                    };
                }

                return { ...prevGame, typing: newTyping }
            });
        };


        if (game.hasStarted) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [game.hasStarted, game.typing, game.currentWord, game.words, intervalId, game.text, game.time]); // Empty dependency array means this effe</GameProps></Timeout>ct runs once on mount and cleanup on unmount

    return (
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
    )
}