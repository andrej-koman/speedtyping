import { Github, Mail, Copyright } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "~/components/ui/tooltip";

export default function SidebarFooter() {
  const iconClass = "h-4 w-4";

  // TODO - Add a modal contact maybe
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-row items-center justify-between space-x-1 pb-5">
        <div className="flex flex-row items-center">
          <Copyright className="h-3 w-3" />
          <span className="ms-1 text-xs font-bold italic">
            2024, Andrej Koman
          </span>
        </div>
        <div className="flex flex-row items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/andrej-koman/hitrostnotipkanje"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <Github className={iconClass} />
              </a>
            </TooltipTrigger>
            <TooltipContent>Github</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="mailto:andrejkoman@hotmail.com"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <Mail className={iconClass} />
              </a>
            </TooltipTrigger>
            <TooltipContent>Contact me</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
