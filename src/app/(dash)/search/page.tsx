import { Suspense } from "react";
import QuoteSearchPage from "./_components/quote-search-page";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query: string;
    searchBy: string;
  };
}) {
  return (
    <div className="flex w-full flex-row justify-center ps-1">
      <Suspense>
        <QuoteSearchPage searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
