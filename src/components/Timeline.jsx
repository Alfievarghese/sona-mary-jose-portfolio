import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Timeline() {
  const items = [
    {
      period: "Feb 2026 – Apr 2026",
      role: "Embedded AI & AIoT Intern",
      org: "IICT GmbH Training Academy, Germany (Hybrid)",
      desc: "Intensive readiness program executing hybrid hardware-software AI modules and lab sessions.",
      tag: "AIoT Deployment",
      icon: <Briefcase className="w-4 h-4 text-meadow-green" />
    },
    {
      period: "Jun 2025 – Aug 2025",
      role: "UI/UX Design Intern (Design Associate L1)",
      org: "Infotact Solutions (Remote)",
      desc: "Architected Figma wireframes, mockups, and conducted user research testing for production platforms.",
      tag: "Figma & Research",
      icon: <Briefcase className="w-4 h-4 text-blush-rose" />
    },
    {
      period: "Jun 2025 – Aug 2025",
      role: "Data Science with Python Trainee",
      org: "Main Flow Services & Technologies Pvt. Ltd.",
      desc: "Completed comprehensive training focused on data preprocessing and analytics utilizing Pandas and NumPy.",
      tag: "Data Science",
      icon: <Briefcase className="w-4 h-4 text-garden-charcoal" />
    },
    {
      period: "2023 – Expected 2027",
      role: "B.Tech in Electronics & Communication Engineering",
      org: "St. Joseph's College of Engineering and Technology, Palai (Autonomous)",
      desc: "Focusing on embedded microcontrollers, IoT circuit fabrication, and signal processing.",
      tag: "Autonomous ECE",
      icon: <GraduationCap className="w-4 h-4 text-blush-rose" />
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-28 md:scroll-mt-32">
      <div className="text-center mb-16">
        <span className="font-script text-2xl text-blush-rose">Milestones</span>
        <h2 className="font-serif text-3xl sm:text-5xl text-garden-charcoal font-semibold tracking-tight mt-1">
          Academic & Industry Journey
        </h2>
      </div>

      <div className="space-y-6">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="double-bezel"
          >
            <div className="double-bezel-inner p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {it.icon}
                  <span className="font-mono text-xs text-blush-rose uppercase tracking-wider font-semibold">
                    {it.period}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-garden-charcoal">
                  {it.role}
                </h3>
                <p className="text-xs sm:text-sm text-garden-charcoal/70 font-light">
                  {it.org} — {it.desc}
                </p>
              </div>
              <span className="self-start sm:self-center px-4 py-1.5 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs font-medium whitespace-nowrap">
                {it.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
