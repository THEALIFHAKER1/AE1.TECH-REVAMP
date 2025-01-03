/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import { env } from "@/env.mjs";
import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const type = searchParams.get("type");
        const title = searchParams.get("title");
        const banner = searchParams.get("banner");

        const link = searchParams.get("link") ?? siteConfig.url.base;
        const heading = title
            ? title.length > 140
                ? `${title.substring(0, 140)}...`
                : title
            : false;

        if (!title) {
            return new ImageResponse(
                (
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black",
                            borderRadius: "8px",
                            border: "8px solid white",
                        }}
                    >
                        <img
                            width={300}
                            height={300}
                            src={`${env.NEXT_PUBLIC_APP_URL}/images/logo.svg`}
                            alt=""
                        />
                    </div>
                ),
                {
                    width: 1200,
                    height: 630,
                }
            );
        }

        return new ImageResponse(
            (
                <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-black text-white border-8 border-white">
                    <div tw="flex items-center">
                        <img
                            width={50}
                            height={50}
                            src={`${env.NEXT_PUBLIC_APP_URL}/icons/icon-512x512.png`}
                            alt=""
                        />
                        <p tw="ml-2 font-bold text-2xl">{siteConfig.author}</p>
                    </div>
                    <div tw="flex flex-col flex-1 py-10">
                        {type && (
                            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
                                {type}
                            </div>
                        )}
                        <div tw="flex text-[50px] font-bold text-wrap w-[400px]">
                            {heading.toString().length > 40
                                ? `${heading.toString().substring(0, 140)}...`
                                : heading}
                        </div>
                    </div>
                    <div tw="flex items-center w-full justify-between">
                        <div tw="flex text-xl">{link}</div>
                        <div tw="flex items-center">
                            <div tw="w-48 h-2 rounded-full bg-white mr-2" />
                            <div tw="w-2 h-2 rounded-full bg-white mr-2" />
                            <div tw="w-2 h-2 rounded-full bg-white" />
                        </div>
                    </div>
                    {banner && (
                        <img
                            tw="absolute border-2 border-white object-cover bg-center rounded-md bottom-[30%] right-[10%] transform translate-x-1/2 translate-y-1/2"
                            width={600}
                            height={300}
                            src={
                                banner.startsWith("http")
                                    ? banner
                                    : `${env.NEXT_PUBLIC_APP_URL}${banner}`
                            }
                            alt=""
                        />
                    )}
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}
