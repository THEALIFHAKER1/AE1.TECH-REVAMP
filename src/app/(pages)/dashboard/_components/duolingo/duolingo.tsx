import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/text";
import Image from "next/image";
import DuolingoImage from "@/assets/duolingo-family.png";
export default function Duolingo() {
    return (
        <Card className="relative h-full  w-full overflow-hidden text-white bg-[#58cc02] backdrop-blur-sm backdrop-saturate-150 ">
            <Image
                className="absolute -bottom-12 right-0 -z-10"
                src={DuolingoImage}
                alt="alt"
                width={300}
                height={300}
            />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-nowrap text-sm font-medium text-white">
                    <SectionTitle> Duolingo Activity </SectionTitle>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid max-h-64 overflow-auto gap-2"></CardContent>
        </Card>
    );
}
