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
        <div className="max-w-6xl text-center flex flex-col gap-2">
            <Announcement>
                <AnnouncementTag>Demo</AnnouncementTag>
                <AnnouncementTitle>
                New feature added
                <Info className="shrink-0 text-muted-foreground" size={16} />
                </AnnouncementTitle>
            </Announcement>
            <h1 className="from-primary/50 via-foreground/85 to-primary/20 bg-gradient-to-tl bg-clip-text text-center tracking-tighter text-balance text-transparent text-5xl md:text-8xl py-4">AI Virtual Try-On Shopify App</h1>

            <p className="text-muted-foreground text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta nulla qui aperiam iusto ut ea aliquam, minima voluptatem distinctio facere illum numquam expedita sapiente! Dolores omnis eaque sed temporibus.</p>
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