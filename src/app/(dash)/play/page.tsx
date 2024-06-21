import { getFilteredQuotes, countFilteredQuotes } from "~/server/queries";
import QuoteSearch from "../_components/quote-search";
import QuoteList from "../_components/quote-list";
import { QuoteListLoadingProvider } from "~/contexts/QuoteListLoadingContext";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return {
    title: t("play"),
    description: "The home page",
  };
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query: string;
    searchBy: string;
  };
}) {
  let quotes: Quote[] = [];
  let quoteCount = 0;
  if (searchParams) {
    if (searchParams.query && searchParams.searchBy) {
      quotes = await getFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
        1,
      );

      quoteCount = await countFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
      );
    }
  }

  return (
    <div className="flex w-full flex-row justify-center ps-1">
      <div className="flex h-full w-full">
        <div className="flex w-full flex-col space-y-4">
          <QuoteListLoadingProvider>
            <QuoteSearch
              queryDefault={searchParams?.query ?? ""}
              searchByDefault={(searchParams?.searchBy ?? "Text") as SearchBy}
            />
            <QuoteList quotes={quotes} quoteCount={quoteCount} />
          </QuoteListLoadingProvider>
        </div>
      </div>
    </div>
  );
}
