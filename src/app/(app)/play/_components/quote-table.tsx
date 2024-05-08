"use client";

import { Table, TableBody, TableRow } from "~/components/ui/table";

import { useRouter } from "next/navigation";

export default function QuoteTable({ quotes }: { quotes: Quote[] }) {
  const router = useRouter();

  return (
    <Table className="w-full text-center">
      <TableBody>
        {quotes.map((quote) => (
          <TableRow
            onClick={() => {
              void router.push(`/play/${quote.id}`);
            }}
            key={quote.id}
            className="cursor-pointer"
          >
            <td className="py-3">
              <div className="w-[250px] overflow-hidden text-ellipsis text-nowrap text-start">
                {quote.text}
              </div>
            </td>
            <td>
              <div className="text-sm text-gray-400">by {quote.author}</div>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
