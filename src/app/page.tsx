// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Sticky header with brand tabs + nav */}
      <Header />

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* ---- FOOTER ---- */}
<footer className="mt-16 border-t border-white/10 py-8 text-xs text-neutral-400">
  <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">

    {/* ---- SOCIAL ICONS ---- */}
    <div className="flex items-center gap-6">

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 hover:opacity-100 transition"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 hover:opacity-100 transition"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
        className="hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-80 hover:opacity-100 transition"
        >
          <path d="M19.6 3.2H4.4A4.4 4.4 0 0 0 0 7.6v8.8a4.4 4.4 0 0 0 4.4 4.4h15.2a4.4 4.4 0 0 0 4.4-4.4V7.6a4.4 4.4 0 0 0-4.4-4.4zM9.75 15.57V8.43L15.5 12l-5.75 3.57z"/>
        </svg>
      </a>
    </div>

    {/* ---- LEGAL LINKS ---- */}
    <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
      <a href="/terms" className="hover:text-neutral-200">Terms &amp; Conditions</a>
      <span className="h-3 w-px bg-white/20" />
      <a href="/privacy" className="hover:text-neutral-200">Privacy Statement</a>
    </div>

    {/* ---- COPYRIGHT ---- */}
    <div className="text-center">
      Copyright © {new Date().getFullYear()} Loyalty Exhibits. All rights reserved.
    </div>
  </div>
</footer>
<FloatingContactButton />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 py-16">
      {/* Image carousel with overlay text & button */}
      <HeroCarousel />

      {/* Stats under the carousel */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <HeroStat label="Installations" value="150+" />
        <HeroStat label="Cities" value="20+" />
        <HeroStat label="Client Satisfaction" value="4.9/5" />
      </div>
    </section>
  );
}

/* -------------------- HERO CAROUSEL -------------------- */

type Slide = {
  image: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image: "/tradeshow.png",
    headline: "Immersive Brand Experience",
    subheadline: "Custom & rental exhibits that let your brand shine.",
    ctaLabel: "Let’s Connect",
    ctaHref: "#contact",
  }
];

function HeroCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) =>
    setIndex((i + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
      <div className="relative h-[300px] sm:h-[420px] md:h-[460px]">

        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div
                className="
                  relative z-10
                  max-w-xl
                  px-14 sm:px-16 md:px-20
                  py-8
                  "
                >
                <h1 className="
                  text-2xl sm:text-4xl md:text-5xl
                  font-semibold tracking-tight
                ">
                  {slide.headline}
                </h1>

                <p className="
                  mt-3
                  text-sm sm:text-base
                  text-neutral-200
                ">
                  {slide.subheadline}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={slide.ctaHref}
                    className="rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
                  >
                    {slide.ctaLabel}
                  </a>

                  <a
                    href="#gallery"
                    className="rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    View Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* LEFT ARROW */}
        <button
          onClick={() => goTo(index - 1)}
          className="
            absolute left-2 sm:left-4
            top-1/2 -translate-y-1/2
            z-20
            h-9 w-9 sm:h-10 sm:w-10
            rounded-full
            bg-black/60
            text-white
            backdrop-blur
            hover:bg-black/80
          "
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => goTo(index + 1)}
          className="
            absolute right-2 sm:right-4
            top-1/2 -translate-y-1/2
            z-20
            h-9 w-9 sm:h-10 sm:w-10
            rounded-full
            bg-black/60
            text-white
            backdrop-blur
            hover:bg-black/80
          "
        >
          ›
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${
                i === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------- REST OF SECTIONS -------------------- */

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wide text-neutral-400">
        {label}
      </div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  );
}

// AboutSection, AboutCard, GallerySection, ContactSection stay the same as you had ↓
// (leaving them unchanged)

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <p className="mt-4 max-w-2xl text-sm text-neutral-300 sm:text-base">
        Loyalty Exhibits is a woman-owned creative design firm located in the heart of Washington, D.C. We specialize in crafting distinctive, high-impact booth spaces for companies that want to stand out and truly showcase their products and services.

Our team blends innovative design, polished craftsmanship, and flawless execution to transform ordinary exhibit footprints into immersive brand experiences. Whether you're unveiling a new product, strengthening market presence, or elevating your company’s image at a major show, we build spaces that tell your story with clarity and style.
      </p>
<div className="mt-6 grid gap-4 sm:grid-cols-3 place-items-cente justify-center">
  <AboutCard title="Small business women owned." body="Let us bring your vision to life—beautifully and professionally." />
  <AboutCard title="Over 30 years of experience." body="" />
</div>
    </section>
  );
}

function AboutCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
      <div className="text-sm font-medium">{title}</div>
      <p className="mt-2 text-xs text-neutral-300 sm:text-sm">{body}</p>
    </div>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
      <p className="mt-4 max-w-2xl text-sm text-neutral-300 sm:text-base">
        Some exmaples of our work.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900"
          >
            <div className="flex h-full items-end p-3 text-xs text-neutral-200">
              Artwork {item}
            </div>
          </div>
        ))}
      </div>
{/* 
      <div className="mt-8 rounded-2xl border border-dashed border-white/20 p-4 text-xs text-neutral-400">
        3rd-party gallery embed goes here (iframe/script from your gallery
        provider).
      </div> */}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl text-sm text-neutral-300 sm:text-base">
        Tell us about your space, event, or brand, and we’ll follow up shortly.
      </p>

      <form
        className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        method="POST"
      >
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-neutral-200">
            Name
          </label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
            placeholder="Your name"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-medium text-neutral-200">
            Company
          </label>
          <input
            name="company"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
            placeholder="Company name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-neutral-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-neutral-200">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-neutral-200">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
            placeholder="Tell us about your event, timeline, budget, and goals."
          />
        </div>

        {/* Hidden subject for clean emails */}
        <input
          type="hidden"
          name="_subject"
          value="New Loyalty Exhibits Contact Submission"
        />

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

function FloatingContactButton() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <a
      href="#contact"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-purple-600 text-white
        shadow-lg shadow-black/40
        transition hover:bg-purple-500 hover:scale-105
      "
      aria-label="Contact us"
    >
      {/* Mail / Message icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </a>
  );
}