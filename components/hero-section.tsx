"use client";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/announcement";
import { Button } from "./ui/button";
import { Info, ArrowRight, SquareArrowOutUpRight } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
        <div>
            <Announcement>
                <AnnouncementTag>Demo</AnnouncementTag>
                <AnnouncementTitle>
                New feature added
                <Info className="shrink-0 text-muted-foreground" size={16} />
                </AnnouncementTitle>
            </Announcement>
            <h1 className="from-primary/50 via-foreground/85 to-primary/20 bg-gradient-to-tl bg-clip-text text-center tracking-tighter text-balance text-transparent text-5xl md:text-8xl py-4">AI Virtual Try-On Shopify App</h1>
        </div>

        <div className="flex gap-4 mt-8">
            <Button variant="secondary" className="text-md">
                Get Started
                <ArrowRight />
            </Button>
            <Button variant="link" className="text-md">
                Learn More
                <SquareArrowOutUpRight />
            </Button>
        </div>
    </section>
  )
}