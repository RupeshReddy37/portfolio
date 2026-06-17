import * as React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col items-start justify-center overflow-hidden px-6 pt-24 text-left max-w-5xl mx-auto w-full">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950"></div>

      <FadeIn delay={0.1}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Software Engineering Roles
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-50 sm:text-7xl leading-tight">
          Building <span className="text-zinc-500">software applications</span> with Java and modern <span className="text-zinc-500">web technologies</span>.
        </h1>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-8 max-w-2xl">
        <p className="text-lg text-zinc-400 font-medium leading-relaxed">
          Hi, I'm Lomada Rupesh Reddy, a Computer Science and Engineering graduate passionate about software development, problem-solving, and building applications that create meaningful impact.
        </p>
      </FadeIn>

      <FadeIn
        delay={0.4}
        className="mt-8 grid sm:grid-cols-3 gap-6 max-w-3xl border-l-2 border-zinc-800 pl-6"
      >
        <div>
          <h3 className="text-zinc-100 font-semibold mb-1">Who I Am</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A Software Engineer with a strong foundation in Java, software
            engineering principles, and modern application development.
          </p>
        </div>

        <div>
          <h3 className="text-zinc-100 font-semibold mb-1">What I Build</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Web applications, Java Spring Boot APIs, enterprise systems, and
            AI-powered solutions.
          </p>
        </div>

        <div>
          <h3 className="text-zinc-100 font-semibold mb-1">Why Hire Me</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I enjoy solving problems, learning quickly, and building reliable
            software that delivers real value.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.5} className="mt-12 flex flex-wrap items-center gap-4 w-full">
        <Button
          size="lg"
          className="gap-2 w-full sm:w-auto"
          onClick={() => handleScroll('projects')}
        >
          View Engineering Work <ArrowRight size={18} />
        </Button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 w-full sm:w-auto"
          >
            <Download size={18} /> Resume
          </Button>
        </a>

        <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/RupeshReddy37"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-50 transition-colors p-2 bg-zinc-900 rounded-md border border-zinc-800"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/lomada-rupesh-reddy"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-50 transition-colors p-2 bg-zinc-900 rounded-md border border-zinc-800"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:rupeshreddylomada@gmail.com"
            className="text-zinc-400 hover:text-zinc-50 transition-colors p-2 bg-zinc-900 rounded-md border border-zinc-800"
          >
            <Mail size={20} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}