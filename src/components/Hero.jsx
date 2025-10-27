import { FileDown, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { InteractiveGridPattern } from "./ui/shadcn-io/interactive-grid-pattern";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0f0f0f] text-neutral-200 px-32"
    >

      <InteractiveGridPattern className="absolute opacity-60 inset-0 z-0" squares={[50, 50]} />

      {/* Name & Title */}
      <div >
        <h1 className="text-7xl font-bold mb-2">Aryan Kinha</h1>
        <h2 className="text-3xl text-neutral-400 font-medium mb-8">
          Software Developer
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-neutral-400 leading-relaxed mb-10">
          Building high-performance web applications and AI-powered solutions with clean, scalable code. Turning ideas into impactful, user-focused experiences.
        </p>

        {/* Buttons */}
        <div className="relative z-10 flex justify-center space-x-4 mb-16">
          <Link
            to="projects"
            smooth={true}
            duration={50}
            offset={-70}
            className="bg-white text-black px-6 py-2 rounded-md font-medium cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            View My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={50}
            offset={-70}
            className="border border-neutral-600 px-6 py-2 rounded-md font-medium cursor-pointer hover:border-blue-400 hover:text-blue-400 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Icons */}
        <div className="relative z-10 flex justify-center items-center space-x-6 text-neutral-400">
          <a
            href="https://github.com/aryankinha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/aryankinha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://leetcode.com/aryankinha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.504c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
          </a>
          <a
            href="src/images/Resume-Aryan.pdf"
            download
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <FileDown size={22} />
            <span className="text-sm font-medium">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
