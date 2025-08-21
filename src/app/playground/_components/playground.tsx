"use client";
import { useState } from "react";
import { GameProvider } from "~/contexts/GameContext";
import Play from "../../(game)/play/_components/play";
import { calculateCarSpeed } from "~/lib/game";
import { MOCK_QUOTES, DEFAULT_PLAYGROUND_SETTINGS } from "../mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

export default function PlaygroundComponent() {
  const [selectedQuote, setSelectedQuote] = useState<Quote>(MOCK_QUOTES[0]!);
  const [settings, setSettings] = useState(DEFAULT_PLAYGROUND_SETTINGS);

  const carSpeed = calculateCarSpeed(selectedQuote.text.length);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar with quote selection */}
      <div className="w-80 border-r bg-muted/20 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Playground Mode</CardTitle>
            <CardDescription>
              Test game functionality with mock quotes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-3 font-semibold">Select Quote:</h4>
              <div className="space-y-2">
                {MOCK_QUOTES.map((quote) => (
                  <Button
                    key={quote.id}
                    variant={selectedQuote.id === quote.id ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedQuote(quote)}
                  >
                    <span className="font-medium truncate">{quote.source}</span>
                    <Badge variant="secondary" className="text-xs ml-2">
                      {quote.lengthWord}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="mb-2 font-semibold">Current Quote Info:</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Source:</strong> {selectedQuote.source}</div>
                <div><strong>Author:</strong> {selectedQuote.author}</div>
                <div><strong>Length:</strong> {selectedQuote.text.length} chars</div>
                <div><strong>Words:</strong> {selectedQuote.text.split(" ").length} words</div>
                <div><strong>Car Speed:</strong> {carSpeed.toFixed(4)}</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Playground mode - no data is saved</p>
              <p>Perfect for testing game mechanics</p>
              <p>Try different quotes to test car animations</p>
              <p>All game options are available</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main game area */}
      <div className="flex-1">
        <GameProvider>
          <div className="flex h-screen w-full flex-col items-center justify-center p-0">
            <Play
              settings={{
                ...settings,
                isFavorite: selectedQuote.isFavorite ?? false,
              }}
              defaultLayout={[50, 50]}
              quote={selectedQuote}
              carSpeed={carSpeed}
            />
          </div>
        </GameProvider>
      </div>
    </div>
  );
}
