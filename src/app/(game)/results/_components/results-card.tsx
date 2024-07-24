import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";

export default function ResultsCard({
  data,
  title,
  personalBest,
  className,
}: {
  data: number;
  title: string;
  personalBest: number;
  className?: string;
}) {
  const isPersonalBest = data === personalBest;
  return (
    <Card className={className ?? ""}>
      <CardHeader className="p-3">
        <CardTitle className="flex flex-row items-center justify-between">
          <small className="h-max text-sm font-semibold">{title}</small>
          {isPersonalBest && <Badge className="text-sm">New PB</Badge>}
          {!isPersonalBest && (
            <Badge variant="secondary" className="text-sm">
              PB: {personalBest}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 py-0 text-center">
        <h1 className="h-max text-[56px]">{data}</h1>
      </CardContent>
      <CardFooter className="p-3"></CardFooter>
    </Card>
  );
}
