"use client";

import Image from "next/image";
import { useState } from "react";
import Network from "./components/Network";

type ModalType = "about" | "mission" | "vision" | "focus" | null;

export default function Home() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <main className="relative min-h-screen bg-[#05070a] text-white overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-green-900/20" />

      {/* Network animation */}
      <Network />

      {/* Top menu */}
      <header className="absolute top-6 left-1/2 z-20 -translate-x-1/2">
        <nav className="flex gap-8 text-sm md:text-base text-gray-300">
          <button onClick={() => setOpenModal("about")} className="hover:text-white">
            About Us
          </button>
          <button onClick={() => setOpenModal("mission")} className="hover:text-white">
            Mission
          </button>
          <button onClick={() => setOpenModal("vision")} className="hover:text-white">
            Vision
          </button>
          <button onClick={() => setOpenModal("focus")} className="hover:text-white">
            Core Focus
          </button>
        </nav>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Logo */}
        <Image
          src="/logo_serendipityglobal.png"
          alt="Serendipity Global Logo"
          width={580}
          height={580}
          className="mb-4"
          priority
        />

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-200">
          Technology & Services. Coming Soon.
        </p>

        {/* Services */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-lg md:text-xl font-medium text-gray-300 max-w-5xl">
          <span>Cybersecurity</span>
          <span className="opacity-60">•</span>
          <span>Cloud</span>
          <span className="opacity-60">•</span>
          <span className="opacity-60">•</span>
          <span>Infrastructure</span>
          <span className="opacity-60">•</span>
          <span>Enterprise Hardware</span>
          <span className="opacity-60">•</span>
          <span>Networking</span>
          <span className="opacity-60">•</span>
          <span>Professional Services</span>
        </div>

        {/* CTA */}
        <a
          href="mailto:info@serendipity-global.com"
          className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-600 to-green-500 px-10 py-4 text-base font-semibold text-white transition hover:scale-105 hover:opacity-95"
        >
          Contact us
        </a>

        {/* Bottom info */}
        <div className="mt-6 flex flex-col items-center gap-2 text-xs text-gray-500">
          <span>© 2026 Serendipity Global LLC</span>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Made in USA</span>

            <span className="flex items-center gap-1 text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-3xl rounded-xl bg-[#0b0f16] p-8 text-left text-gray-300 shadow-xl">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {openModal === "about" && (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white">About Us</h2>
                <p>
                  Serendipity Global LLC is a technology company focused on delivering
                  enterprise-grade solutions, professional services, and value-added
                  technology for organizations seeking secure, efficient, and scalable
                  operations.
                </p>
                <p className="mt-3">
                  We specialize in technology distribution, implementation, and support,
                  operating as a trusted technology partner rather than just a provider.
                </p>
              </>
            )}

            {openModal === "mission" && (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white">Mission</h2>
                <p>
                  To connect organizations with reliable, high-impact technology solutions
                  that deliver security, efficiency, and sustainable value through deep
                  technical expertise and a client-focused approach.
                </p>
              </>
            )}

            {openModal === "vision" && (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white">Vision</h2>
                <p>
                  To become a trusted global technology partner, recognized for technical
                  excellence, solution quality, and long-term relationships with clients,
                  manufacturers, and distributors.
                </p>
              </>
            )}

            {openModal === "focus" && (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Core Focus / What We Do
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Technology distribution and resale through authorized distributors</li>
                  <li>IT infrastructure and cybersecurity solutions</li>
                  <li>Cloud, networking, and endpoint technologies</li>
                  <li>Professional and managed IT services</li>
                  <li>Technical consulting and implementation support</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
