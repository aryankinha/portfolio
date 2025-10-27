import React from "react";
import {
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Get Interview Confidence (GIC)",
      location: "Remote",
      period: "May 2025 – June 2025",
      description:
        "Worked on developing and improving user-facing features for Get Interview Confidence, a platform that helps users prepare for technical interviews. Collaborated with designers and backend engineers to build responsive and intuitive interfaces.",
      achievements: [
        "Implemented and refined frontend components using Next.js and Tailwind CSS",
        "Integrated APIs to display dynamic user and course data effectively",
        "Collaborated in code reviews and team discussions to improve UI consistency and performance",
      ],
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Figma",
        "Frontend Development",
        "Collaboration",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-400" />
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and continuous growth in software
            development and team leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group relative rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 p-6 bg-zinc-900/50 hover:bg-zinc-900/70"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Timeline Indicator for Desktop */}
                <div className="hidden lg:flex flex-col items-center w-20">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-colors">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 w-0.5 bg-zinc-700 group-hover:bg-zinc-600 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-300 mb-2">
                        <span className="font-medium">
                          {experience.company}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:bg-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
