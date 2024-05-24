"use client";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";
import { useRouter } from "next/navigation";
import { Badge } from "~/components/ui/badge";

export default function QuoteList({
  quotes,
  quoteCount,
  className,
}: {
  quotes: Quote[];
  quoteCount: number;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div className="space-y-2">
      <div
        className={cn("flex w-full items-center justify-between", className)}
      >
        <div></div>
        <small className="text-muted-foreground">
          {quotes.length} out of {quoteCount} shown
        </small>
      </div>
      <ScrollArea className="h-full">
        <ScrollBar forceMount={true} />
        <div className="flex flex-col space-y-4">
          {quotes.length > 0 ? (
            <>
              {quotes.map((quote) => (
                <button
                  key={quote.id}
                  className={cn(
                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                  )}
                  onClick={() => {
                    router.push(`/play/${quote.id}`);
                  }}
                >
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{quote.source}</div>
                    </div>
                    <div className="text-xs font-medium">{quote.author}</div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {quote.text.substring(0, 300)}
                  </div>
                  <div className="flex flex-col items-center">
                    <Badge variant="default" className="capitalize">
                      {quote.lengthWord}
                    </Badge>
                  </div>
                </button>
              ))}
            </>
          ) : (
            <div className="flex w-full justify-center">
              <small className="text-muted-foreground">No quotes found</small>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
