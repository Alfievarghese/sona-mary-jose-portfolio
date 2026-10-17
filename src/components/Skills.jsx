import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Palette, Users } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: "Core Hardware & Circuits",
      icon: <Cpu className="w-5 h-5 text-blush-rose" />,
      desc: "Microcontroller firmware, circuit routing, sensor interfacing, and physical validation.",
      skills: ["ESP32", "Arduino", "PCB Design", "Verilog", "Circuit Sim", "Sensor Interfacing"]
    },
    {
      title: "Code & Data Science",
      icon: <Code2 className="w-5 h-5 text-blush-rose" />,
      desc: "Extensive data analytics, speech/vision edge AI models, and embedded C programming.",
      skills: ["Python", "C Language", "MATLAB", "Pandas", "NumPy", "Faster-Whisper", "LLaVA"]
    },
    {
      title: "Design & UI/UX Systems",
      icon: <Palette className="w-5 h-5 text-blush-rose" />,
      desc: "User research, design system tokenization, wireframing, and interactive prototyping.",
      skills: ["Figma", "Wireframing", "User Flows", "Usability Tests", "Glassmorphism", "Design Systems"]
    },
    {
      title: "Leadership & Impact",
      icon: <Users className="w-5 h-5 text-blush-rose" />,
      desc: "Community service, rapid hackathon delivery, and state-level innovation participation.",
      skills: ["NSS Volunteer", "Red Cross", "YIP Innovator", "Hackathons", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-28 md:scroll-mt-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-script text-2xl text-blush-rose">Competence Matrix</span>
        <h2 className="font-serif text-3xl sm:text-5xl text-garden-charcoal font-semibold tracking-tight mt-1">
          The Botanical Garden of Skills
        </h2>
        <p className="text-sm sm:text-base text-garden-charcoal/70 mt-2 font-light">
          A calibrated blend of low-level hardware fluency, modern data processing, and humanistic visual design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="double-bezel"
          >
            <div className="double-bezel-inner p-6 space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAECE4] border border-soft-petal flex items-center justify-center mb-3 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-garden-charcoal mb-2">{cat.title}</h3>
                <p className="text-xs text-garden-charcoal/70 font-light mb-4">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {cat.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-rose-mist text-garden-charcoal">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
