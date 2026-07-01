"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Wrench,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      "Windows Server",
      "Windows 10/11",
      "Ubuntu Linux",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "CloudFront",
      "Azure Entra ID",
    ],
  },
  {
    title: "Microsoft Technologies",
    icon: Server,
    skills: [
      "Microsoft 365",
      "Exchange Online",
      "Exchange Admin Center",
      "Microsoft Teams",
      "Active Directory",
      "Group Policy",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "DNS",
      "DHCP",
      "TCP/IP",
      "VPN",
      "LAN Administration",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      "Sophos Firewall",
      "Sophos XDR",
      "Bitdefender",
      "ESET",
      "Seqrite",
    ],
  },
  {
    title: "Web & DevOps",
    icon: Code2,
    skills: [
      "Docker",
      "Jenkins",
      "Apache",
      "Nginx",
      "Git",
      "GitHub",
      "Node.js",
      "PHP",
      "WordPress",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "IT Operations",
    icon: Wrench,
    skills: [
      "VMware",
      "Backup & Recovery",
      "Incident Management",
      "Technical Support",
      "NAS Backup",
      "Disaster Recovery",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#090F1E]"
    >
      <div className="container">

        <h2 className="text-center text-5xl font-bold">
          Technical{" "}
          <span className="text-violet-500">
            Skills
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Technologies and platforms I work with daily in enterprise
          infrastructure, cloud administration and system management.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillCategories.map((category) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all"
              >

                <div className="mb-8 flex items-center gap-4">

                  <div className="rounded-xl bg-violet-600/20 p-3">

                    <Icon
                      size={28}
                      className="text-violet-400"
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-gray-200 transition hover:bg-violet-600 hover:text-white"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
