import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-[#111] text-neutral-200 border-t border-neutral-800 py-6">
          <p className="text-neutral-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Aryan Kinha ©
          </p>
    </footer>
  );
}