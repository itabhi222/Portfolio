"use client";

import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="container">

        <h2 className="text-center text-5xl font-bold">
          Get In <span className="text-violet-500">Touch</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Looking for a System Administrator or Cloud Infrastructure Engineer?
          Feel free to contact me.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:it.abhishek222@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
          >
            <Mail className="text-violet-500" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-3 text-gray-400">
              it.abhishek222@gmail.com
            </p>

          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="tel:+916395216088"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
          >
            <Phone className="text-violet-500" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Phone
            </h3>

            <p className="mt-3 text-gray-400">
              +91 6395216088
            </p>

          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="https://linkedin.com/in/abhishek-verma-ab8a5b222"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
          >
            <Linkedin className="text-violet-500" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="mt-3 text-gray-400">
              Connect with me
            </p>

          </motion.a>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
          >
            <MapPin className="text-violet-500" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Location
            </h3>

            <p className="mt-3 text-gray-400">
              India
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
