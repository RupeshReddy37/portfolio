import * as React from 'react';
import { ArrowRight, Code2, Database, Download, Mail, Rocket, Server, ShieldCheck } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { profile } from '../constants/profile';
import  heroImage  from '../assets/hero.png';

const capabilityCards = [
  {
    title: 'Frontend Development',
    text: 'Web UI with HTML, CSS, JavaScript, React basics, and JavaFX fundamentals.',
    icon: Code2,
  },
  {
    title: 'Backend Development',
    text: 'REST APIs, business logic, authentication, authorization, Hibernate/JPA, and databases.',
    icon: Server,
  },
  {
    title: 'DevOps & Cloud Foundations',
    text: 'Git, Docker, CI/CD basics, Linux, AWS basics, and deployment workflows.',
    icon: Rocket,
  },
  {
    title: 'Architecture & Platform Thinking',
    text: 'Design patterns, scalability, security, performance, and maintainable structure.',
    icon: ShieldCheck,
  },
];

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pt-28">
      <div className="absolute inset-x-4 top-24 -z-10 h-72 rounded-full bg-cyan-300/8 blur-3xl sm:inset-x-20" />

      <div className="min-w-0 max-w-[22rem] sm:max-w-none">
        <FadeIn delay={0.05}>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-3 py-1 text-sm font-medium text-emerald-100">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Open to Work
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-balance text-3xl font-black leading-[1.08] tracking-tight text-zinc-50 min-[420px]:text-4xl sm:text-5xl lg:text-6xl">
            Software Engineer focused on Java development and AI-powered applications.
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-7 max-w-2xl text-pretty text-base font-medium leading-8 text-zinc-300 sm:text-lg">
            Hi, I&apos;m {profile.name}. I build Spring Boot services,
            data-backed applications, and AI-powered workflows with a focus on
            reliability, security, and practical engineering decisions.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            size="lg"
            className="w-full gap-2 whitespace-nowrap sm:w-auto"
            onClick={() => handleScroll('projects')}
          >
            View Projects <ArrowRight size={18} />
          </Button>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-base font-medium text-cyan-100 transition-colors hover:bg-cyan-300/15 sm:w-auto sm:px-6"
          >
            <Download size={18} /> Resume
          </a>

          <a
            href={profile.contactUrl}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-950/40 px-6 py-3 text-base font-medium text-zinc-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 sm:w-auto sm:px-8"
          >
            <Mail size={18} /> Contact Me
          </a>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8 flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid h-11 w-11 place-items-center rounded-md border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
          >
            <Github size={20} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-11 w-11 place-items-center rounded-md border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
          >
            <Linkedin size={20} />
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.12} direction="left" className="min-w-0 max-w-[22rem] sm:max-w-none">
        <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

          <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <p className="text-sm font-semibold text-cyan-200">
                Software Engineering Stack
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                Core areas I work across while building software systems.
              </p>
            </div>
            <Database className="text-cyan-200" size={22} />
          </div>

          <div className="grid gap-3">
            {capabilityCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="grid grid-cols-[2.75rem_1fr] gap-4 rounded-md border border-zinc-800 bg-zinc-900/50 p-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/8 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mt-6 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 p-5">
            <img
              src={heroImage}
              alt="Layered software architecture illustration"
              className="mx-auto h-36 w-auto object-contain opacity-90 sm:h-44"
            />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase text-zinc-500">
              <span>API</span>
              <span>Data</span>
              <span>AI</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
