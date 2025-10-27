import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chat App",
      description:
        "OneSided Chat is a minimalist chat application where users can send and view their own messages — a space to talk, think, and express without expecting a reply.",
      image: "src/images/chatapp_landingpage.png",
      tech: ["React", "CSS", "Express", "Mysql"],
      github: "https://github.com/aryankinha/chatApp",
    },
    {
      id: 2,
      title: "JWT-auth",
      description:
        "Auth-backend-jwt is a secure, role-based authentication backend built with Node.js, Express, and MySQL. It uses bcrypt for password hashing and JWT for authentication and session management, supporting user and admin roles with complete CRUD operations.",
      image: "src/images/JWT.png",
      tech: ["Express", "JWT", "MySQL"],
      github: "https://github.com/aryankinha/auth-backend-jwt",
    },
    {
      id: 3,
      title: "Weather",
      description:
        "A simple weather app that allows users to search for a city and get real-time weather updates, including temperature, humidity, wind speed, and weather conditions. The app fetches data from the API.",
      image: "src/images/weather.png",
      tech: ["HTML", "CSS", "Js", "DOM"],
      live: "https://aryankinha.github.io/Weather/",
      github: "https://github.com/aryankinha/Weather?tab=readme-ov-file",
    },
    {
      id: 4,
      title: "Youtube Clone",
      description:
        "YouTube Clone 🎥 📜 Overview A YouTube clone built with HTML and CSS, focusing on layout design",
      image: "src/images/yt_clone.png",
      tech: ["React", "Express", "MongoDB"],
      live: "https://aryankinha.github.io/Youtube_Clone/",
      github: "https://github.com/aryankinha/Youtube_Clone",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-400 mb-16">
          A selection of my favorite projects that showcase my skills in
          full-stack and modern web development.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 blur-[1px] brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>

              <div className="absolute bottom-0 p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
