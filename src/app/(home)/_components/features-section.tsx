import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import FlagIcon from "~/icons/flag-icon"
import { PaintBrushIcon } from "~/icons/paint-brush-icon"
import QueueListIcon from "~/icons/queue-list-icon"

function Feature({
    title,
    icon,
    description
}: {
    title: string,
    icon: React.ReactNode,
    description: string
}) {
    return (
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <Card>
                <CardHeader className="space-y-1 flex-row justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    {icon}
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    {description}
                </CardContent>
            </Card>
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <div className="xl:w-[75rem] items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
            <Feature title="Typing Practice" icon={<FlagIcon className="h-6 w-6" />} description="Practice your typing skills with our interactive typing game. Improve your typing speed and accuracy." />
            <Feature title="Custom Themes" icon={<PaintBrushIcon className="h-6 w-6" />} description="Customize the app's appearance with a variety of themes. Choose from light, dark, and more." />
            <Feature title="Leaderboards" icon={<QueueListIcon className="h-6 w-6" />} description="Compete against other racers and climb to the top of the leaderboards. Can you beat the fastest typists in the world?" />
        </div>
    )
}