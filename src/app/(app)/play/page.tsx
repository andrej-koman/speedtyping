import { getQuotes } from "~/server/queries";
import QuoteTable from "./_components/quote-table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default async function PlayPage() {
  // TODO - Please add a DataTable instead of normal table
  const quotes = await getQuotes();
  return (
    <div className="h-[calc(100vh-3.6rem)] w-screen flex items-center flex-col">
      <div className="h-full grid grid-cols-3 grid-rows-1 gap-4 py-4 max-w-screen-2xl">
        <Card className="col-span-1 col-start-3">
          <CardHeader>
            <CardTitle>Recently played</CardTitle>
            <CardDescription>Your recently played quotes.</CardDescription>
          </CardHeader>
          <CardContent>
            <QuoteTable quotes={quotes} />
          </CardContent>
        </Card>
        <div className="col-span-2 col-start-1 row-start-1">
          <Button variant="default">
            Play random
          </Button> 
        </div>
      </div>
    </div>
  );
}
