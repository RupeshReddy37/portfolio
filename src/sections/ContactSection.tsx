import * as React from 'react';
import { Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { FadeIn } from '../components/ui/FadeIn';
import { Card } from '../components/ui/Card';
import { profile } from '../constants/profile';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <FadeIn>
        <Card className="overflow-hidden border-cyan-300/20 bg-zinc-950">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                Let&apos;s talk about backend, Java, or AI application work.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                I&apos;m available for software engineering roles and technical
                conversations around production-minded application development.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-200"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href={profile.contactUrl}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </Card>
      </FadeIn>
    </section>
  );
}
