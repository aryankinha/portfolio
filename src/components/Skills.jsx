export default function Skills() {
  const skills = {
    "Frontend Development": ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    "Backend Development": ["Node.js", "Express.js", "REST APIs", "Python","Prisma"],
    "Database & Storage": ["MySQL"],
    "Tools & Others": ["Git", "Figma"],
  };

const currentFocus = ["AI/ML Basics", "Vector Embedding", "RAGS", "Web Scraping"];

  return (
    <section className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-400 mb-16">
          A comprehensive overview of my technical expertise and the technologies I work with.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-left hover:border-zinc-700 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4">Currently Working On</h3>
          <p className="text-gray-400 mb-6">
            I’m continuously learning and exploring cutting-edge technologies to expand my skillset.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {currentFocus.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10 hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
