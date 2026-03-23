"use client";

import { Hero } from "../components/Hero";
import { Showreel } from "../components/Showreel";
import { Work } from "../components/Work";
import { Stack } from "../components/Stack";
import { Agency } from "../components/Agency";
import { Contact } from "../components/Contact";

import { Stats } from "../components/Stats";

export function Home() {
    return (
        <>
            <Hero />
            <Showreel />
            <Stats />
            <Work />
            <Agency />
            <Stack />
            <Contact />
        </>
    );
}
