// src/components/About.jsx
import { Code2, Users, Lightbulb, Target, TargetIcon, Cpu, LightbulbIcon, Code } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#111] text-neutral-200 px-32 py-24 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-neutral-400 text-center max-w-3xl mb-16">
        I have solved 450+ problems on LeetCode with a rating of 1660 and a 288+ day streak. I build advanced web applications, specializing in backend development with Node.js, Express, and databases like MySQL, while creating interactive UIs with React and Tailwind CSS.
      </p>

      {/* Journey / Description */}
      <div className="flex justify-between w-full max-w-6xl mb-16">
        <div className="w-3/5">
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <p className="text-neutral-400 leading-relaxed">
            I started as a curious learner, exploring Python and web development. Over time, I’ve grown into a fullstack developer, building advanced projects, mastering backend technologies like Node.js and Prisma, and honing my problem-solving skills through DSA and competitive programming.
  
            <br />
            <br />
            I’m currently diving into AI/ML, exploring RAG (Retrieval-Augmented Generation) systems, vector embeddings, vector databases, and building intelligent applications using OpenAI APIs and other AI tools.
          </p>
        </div>

        {/* Stats */}
        <div className="w-1/3 flex flex-col justify-center bg-[#1a1a1a] rounded-2xl p-8 text-center border border-neutral-800">
          <p className="text-3xl font-bold text-blue-400">10+</p>
          <p className="text-neutral-400 mb-6">Projects Built</p>
          <p className="text-3xl font-bold text-blue-400">5+</p>
          <p className="text-neutral-400">Technologies Mastered</p>
        </div>
      </div>

      {/* Core Traits */}
      <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
  <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors">
    <Code className="mx-auto mb-3 text-blue-400" size={24} />
    <h4 className="font-semibold mb-2">Clean Code</h4>
    <p className="text-neutral-400 text-sm">
      Writing maintainable and scalable backend and frontend code.
    </p>
  </div>

  <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors">
    <LightbulbIcon className="mx-auto mb-3 text-blue-400" size={24} />
    <h4 className="font-semibold mb-2">Problem Solver</h4>
    <p className="text-neutral-400 text-sm">
      Strong analytical skills for tackling complex algorithms and DSA challenges.
    </p>
  </div>

  <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors">
    <Cpu className="mx-auto mb-3 text-blue-400" size={24} />
    <h4 className="font-semibold mb-2">AI/ML Enthusiast</h4>
    <p className="text-neutral-400 text-sm">
      Exploring AI, vector embeddings, and building intelligent, data-driven applications.
    </p>
  </div>

  <div className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors">
    <TargetIcon className="mx-auto mb-3 text-blue-400" size={24} />
    <h4 className="font-semibold mb-2">Results Driven</h4>
    <p className="text-neutral-400 text-sm">
      Focused on building functional projects and solving real-world problems.
    </p>
  </div>
</div>

    </section>
  );
}
