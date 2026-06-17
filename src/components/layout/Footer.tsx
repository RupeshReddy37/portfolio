import * as React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-zinc-50">Lomada Rupesh Reddy</span>
          <span className="text-sm text-zinc-400">Software Engineer</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href="https://github.com/RupeshReddy37" target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/lomada-rupesh-reddy" target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rupeshreddylomada@gmail.com" className="hover:text-zinc-50 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
