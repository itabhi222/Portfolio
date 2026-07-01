"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Abhishek Verma<span className="text-violet-500">.</span>
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-violet-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B1023]">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-4 text-gray-300 hover:bg-violet-600/10"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
