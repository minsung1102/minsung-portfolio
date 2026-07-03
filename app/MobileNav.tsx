"use client";

import { useState } from "react";

const links = [
  { href: "#how", label: "작업 방식" },
  { href: "#strengths", label: "핵심 역량" },
  { href: "#project", label: "프로젝트" },
  { href: "#skills", label: "기술 스택" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line"
      >
        <span
          className={`h-[1.5px] w-4 bg-text transition-transform ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-4 bg-text transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[1.5px] w-4 bg-text transition-transform ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-b border-line bg-ink px-6 py-4"
        >
          <nav className="flex flex-col gap-4 text-sm text-text-muted">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/minsung1102"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="hover:text-text transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
