import * as React from 'react';
import { Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { profile } from '../../constants/profile';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-zinc-50">{profile.name}</span>
          <span className="text-sm text-zinc-400">{profile.title}</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-50 transition-colors" aria-label="Download resume">
            <Download size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors" aria-label="GitHub profile">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors" aria-label="LinkedIn profile">
            <Linkedin size={20} />
          </a>
          <a href={profile.hackerRank} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors" aria-label="HackerRank profile">
            <SiHackerrank size={20} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors" aria-label="LeetCode profile">
            <SiLeetcode size={20} />
          </a>
          <a href={profile.contactUrl} className="hover:text-zinc-50 transition-colors" aria-label="Email Rupesh">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
