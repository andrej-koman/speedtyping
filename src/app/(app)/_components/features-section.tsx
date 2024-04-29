import { CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import FlagIcon from "~/icons/flag-icon"
import { PaintBrushIcon } from "~/icons/paint-brush-icon"
import QueueListIcon from "~/icons/queue-list-icon"
import CarSection from "./car-section"
import CursorArrowIcon from "~/icons/cursor-arrow-icon"

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
        <div className="col-span-1 row-span-1 grid items-start gap-6 lg:col-span-1">
            <CardHeader className="space-y-1 flex-row justify-between items-center">
                <CardTitle>{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                {description}
            </CardContent>
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <div className="xl:w-[75rem] items-start justify-center gap-6 rounded-lg p-8 grid grid-cols-3 grid-rows-1">
            <div className="flex items-center justify-center flex-col col-span-1">
                <Feature title="Typing Practice" icon={<FlagIcon className="h-6 w-6" />} description="Practice your typing skills with our interactive typing game. Improve your typing speed and accuracy." />
                <Separator />
                <Feature title="Customization" icon={<PaintBrushIcon className="h-6 w-6" />} description="Customize the app's appearance with a variety of customization options. Choose and color your car, find the best track for you and more." />
                <Separator />
                <Feature title="Leaderboards" icon={<QueueListIcon className="h-6 w-6" />} description="Compete against other racers and climb to the top of the leaderboards. Can you beat the fastest typists in the world?" />
            </div>
            <div className="h-[100%] w-[100%] col-span-2 relative">
                <CarSection />
                <CursorArrowIcon className="h-6 w-6 absolute top-5 right-5" />
            </div>
        </div>
    )
}