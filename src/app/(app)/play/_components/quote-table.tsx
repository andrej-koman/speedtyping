"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { useRouter } from "next/navigation";

export default function QuoteTable({ quotes }: { quotes: Quote[] }) {
  const router = useRouter();

  return (
    <Table className="w-[750px]">
      <TableCaption>Recently added</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="w-[250px]">Text</TableHead>
          <TableHead>Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quotes.map((quote) => (
          <TableRow
            onClick={() => {
              // Redirect to /play/[id]
              void router.push(`/play/${quote.id}`);
            }}
            key={quote.id}
          >
            <td>{quote.id}</td>
            <td>{quote.text}</td>
            <td>{quote.created_at.toDateString()}</td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
