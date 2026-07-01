"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "4",
    label: "Companies",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "100+",
    label: "Projects & Tasks",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <div className="container">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="text-center text-5xl font-bold"
        >
          About <span className="text-violet-500">Me</span>
        </motion.h2>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.2}}
          className="mx-auto mt-10 max-w-4xl text-center text-lg leading-9 text-gray-400"
        >
          System Administrator with 3+ years of experience managing
          Windows Server, Ubuntu Linux, AWS Cloud,
          Microsoft 365, Azure Entra ID,
          Active Directory and Sophos Firewall.

          Experienced in deploying production applications,
          managing enterprise infrastructure,
          troubleshooting complex environments,
          implementing backup strategies,
          and maintaining secure cloud solutions.

          Currently expanding expertise towards DevOps
          with Docker, Kubernetes, Jenkins and Automation.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          {stats.map((item)=>(
            <motion.div
              key={item.label}
              whileHover={{y:-10}}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <h3 className="text-5xl font-bold text-violet-500">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
