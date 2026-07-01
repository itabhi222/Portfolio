"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "DigiMantra Pvt. Ltd.",
    role: "System Administrator",
    duration: "Feb 2025 - Present",
    points: [
      "Managed AWS (EC2, S3, IAM, CloudFront).",
      "Managed Ubuntu Linux production servers.",
      "Configured Apache, WordPress & Node.js deployments.",
      "Administered Microsoft 365 & Active Directory.",
      "Configured Sophos Firewall & VPN.",
    ],
  },
  {
    company: "IDS Infotech Pvt. Ltd.",
    role: "Windows Administrator",
    duration: "Oct 2024 - Feb 2025",
    points: [
      "Managed Windows Server 2019/2022.",
      "Administered AD DS, DNS, DHCP & GPO.",
      "Supported 100+ endpoints.",
      "Managed Check Point Firewall & Bitdefender.",
    ],
  },
  {
    company: "Studio Ardete Pvt. Ltd.",
    role: "System Administrator",
    duration: "May 2023 - Oct 2024",
    points: [
      "Managed Windows & Linux servers.",
      "Configured Sophos Firewall.",
      "Implemented NAS Backup.",
      "Supported enterprise infrastructure.",
    ],
  },
  {
    company: "Incredimate Studio Pvt. Ltd.",
    role: "Network Engineer",
    duration: "Nov 2022 - May 2023",
    points: [
      "Supported 750+ users.",
      "Managed Windows Server & Linux.",
      "Managed Azure Entra ID & AWS.",
      "Supported Microsoft 365.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container">

        <h2 className="text-center text-5xl font-bold mb-20">
          Work <span className="text-violet-500">Experience</span>
        </h2>

        <div className="relative border-l-2 border-violet-600 ml-4">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-14 ml-8"
            >

              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full bg-violet-600 border-4 border-[#050816]" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

                <div className="flex flex-col md:flex-row md:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-violet-400">
                      {item.company}
                    </p>

                  </div>

                  <p className="mt-4 text-gray-400 md:mt-0">
                    {item.duration}
                  </p>

                </div>

                <ul className="mt-6 space-y-3 text-gray-300">

                  {item.points.map((point) => (
                    <li key={point}>
                      • {point}
                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
