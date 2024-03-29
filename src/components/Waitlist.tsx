"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  const [emails, setEmails] = useState("");
  return (
    <div
      id="waitlist"
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Tridev, your gateway to inclusive technology solutions.
          We&apos;re dedicated to making technology accessible and empowering
          for everyone. From AI-driven innovations to user-friendly
          applications, Tridev is committed to building a more inclusive digital
          future. Join us on our mission to create technology that works for
          all, regardless of ability, background, or experience.
        </p>

        <form action="https://formspree.io/f/xyyrwyqd" method="POST">
          <input
            required
            name="email"
            type="email"
            placeholder="hello@example.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  p-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
