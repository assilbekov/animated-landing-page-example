"use client";

import Image from "next/image";
import logoSvg from "@/assets/images/logo.svg";
import { Button } from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center px-4 md:pr-2 bg-neutral-950/70 backdrop-blur">
          <div>
            <Image src={logoSvg} alt="Logo" className="w-auto h-9 md:h-12" />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex items-center gap-6 font-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                  "origin-left transition",
                  isOpen && "rotate-45 -translate-y-1"
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge("transition", isOpen && "opacity-0")}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                  "origin-left transition",
                  isOpen && "-rotate-45 translate-y-1"
                )}
              ></line>
            </svg>
            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log in
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
