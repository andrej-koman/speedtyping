'use client';

import { useState, useEffect } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
import { Separator} from "~/components/ui/separator"
import { Button } from "~/components/ui/button";
import PlayIcon from "~/icons/play-icon";
import XMarkIcon from "~/icons/x-mark-icon";

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
        <TooltipProvider>
            <div className="flex items-center justify-center flex-col w-full">
                <Card className="mx-96 mt-10">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center">
                            <span className="me-3">Time: {game.time / 10}s</span>
                            <span>WPM: {game.wpm}</span>
                        </div>
                        <div className="flex items-center ms-auto space-x-3">

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleStart} size="icon">
                                        <PlayIcon />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Start the game</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleCancel} variant="destructive" size="icon">
                                        <XMarkIcon />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Cancel the game</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Separator />
                        <div className="text-foreground relative mt-5">
                            <span>{text}</span>
                            <span className="text-green-500 absolute left-0 top-0">{game.text}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center rounded-lg">
                            <span className="text-foreground">{game.typing}</span>
                        </div>
                    </CardFooter>
                </Card>
                {game.hasEnded && (
                    <div className="p-3 bg-red-500 rounded-lg text-white">
                        Game over!
                    </div>
                )}
            </div>
        </TooltipProvider>
    )
}