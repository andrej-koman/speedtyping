import { getQuotes } from "~/server/queries";

export default async function PlayPage() {
  // TODO - Please add a DataTable instead of normal table
  const quotes = await getQuotes();
  return <div className="grid-cols-5 grid grid-rows-3 w-full h-full"></div>;
}
