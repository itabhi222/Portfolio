"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <div className="absolute left-40 top-32 h-72 w-72 rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute right-40 bottom-20 h-72 w-72 rounded-full bg-blue-700/20 blur-[120px]" />

      <div className="container grid items-center gap-12 pt-24 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="mb-4 text-violet-400 uppercase tracking-[5px]">
            Hello I'm
          </p>

          <h1 className="mb-5 text-6xl font-extrabold leading-tight">
            Abhishek <br />

            <span className="text-gradient">
              Verma
            </span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-300">
            System Administrator
            <br />
            Cloud & Infrastructure Engineer
          </h2>

          <p className="max-w-xl leading-8 text-gray-400">
            System Administrator with 4+ years of experience managing
            Windows Server, Ubuntu Linux, AWS Cloud,
            Active Directory, Microsoft 365,
            Sophos Firewall and enterprise IT infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-violet-500 px-7 py-4 transition hover:bg-violet-600"
            >
              Contact Me
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "AWS",
              "Linux",
              "Windows",
              "Office365",
              "Azure",
              "Sophos",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-sm"
              >
                {item}
              </span>
            ))}

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 blur-xl opacity-70" />

            <Image
              src="/anime.jpg"
              width={420}
              height={420}
              alt="Profile"
              className="relative rounded-full border-4 border-violet-500 object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
