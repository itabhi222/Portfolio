"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Abhishek
            <span className="text-violet-500">
              .
            </span>
          </h2>

          <p className="mt-2 text-gray-400">
            System Administrator | Cloud & Infrastructure Engineer
          </p>

        </div>

        <div className="flex gap-6">

          <a
            href="mailto:it.abhishek222@gmail.com"
          >
            <Mail />
          </a>

          <a
            href="https://linkedin.com/in/abhishek-verma-ab8a5b222"
            target="_blank"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
          >
            <Github />
          </a>

        </div>

      </div>

      <p className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} Abhishek Verma. All Rights Reserved.
      </p>

    </footer>
  );
}
