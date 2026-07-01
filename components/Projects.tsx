"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AWS Infrastructure Deployment",
    description:
      "Designed and managed cloud infrastructure using EC2, S3, IAM and CloudFront with secure access control.",
    tech: ["AWS", "EC2", "IAM", "S3", "CloudFront"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sophos Firewall Administration",
    description:
      "Configured VPN, NAT, firewall policies, web filtering, SSL certificates and enterprise network security.",
    tech: ["Sophos", "VPN", "NAT", "Firewall"],
    github: "#",
    demo: "#",
  },
  {
    title: "Microsoft 365 Administration",
    description:
      "Managed Exchange Online, Microsoft Teams, Azure Entra ID, licensing and user lifecycle.",
    tech: ["Microsoft 365", "Exchange", "Azure", "Teams"],
    github: "#",
    demo: "#",
  },
  {
    title: "Linux Web Hosting",
    description:
      "Hosted WordPress, PHP and Node.js applications using Apache Reverse Proxy with SSL.",
    tech: ["Ubuntu", "Apache", "Node.js", "PHP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Docker & Jenkins CI/CD",
    description:
      "Built containerized applications and automated deployment pipelines using Docker and Jenkins.",
    tech: ["Docker", "Jenkins", "CI/CD"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#090F1E]">
      <div className="container">

        <h2 className="text-center text-5xl font-bold">
          Featured <span className="text-violet-500">Projects</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          A collection of infrastructure, cloud and system administration
          projects that demonstrate hands-on enterprise experience.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <motion.div
              key={project.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-violet-600/20 px-4 py-2 text-sm text-violet-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href={project.github}
                  className="flex items-center gap-2 rounded-xl border border-violet-500 px-5 py-3 transition hover:bg-violet-600"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 transition hover:bg-violet-500"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
