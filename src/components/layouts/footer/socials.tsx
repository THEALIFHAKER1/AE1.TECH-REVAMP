import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialsConfig } from "@/config/sosials";
import Link from "next/link";

export default function Socials() {
    return (
        <div className="flex flex-row space-x-2">
            {socialsConfig.map((social, idx) => {
                return (
                    <TooltipProvider key={idx}>
                        <Tooltip>
                            <TooltipTrigger
                                className={`group flex items-center rounded border border-input px-1.5 py-1 duration-200`}
                            >
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    className="text-foreground/30 duration-200 hover:text-foreground/70"
                                >
                                    <social.icon />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-background text-foreground">
                                {social.platform}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </div>
    );
}
