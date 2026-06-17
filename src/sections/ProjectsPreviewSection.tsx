import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Database,
  Server,
  Cpu,
  Activity
} from 'lucide-react';

import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function ProjectsPreviewSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading
        title="Featured Work"
        subtitle="Enterprise-grade systems, AI platforms, and productivity analytics solutions."
      />

      <div className="flex flex-col gap-12">

        {/* RAG PLATFORM */}

        <FadeIn>
          <Card className="overflow-hidden flex flex-col md:flex-row group">

            <div className="flex-1 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/80 group-hover:bg-zinc-800/80 transition-colors">

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Database size={20} className="text-zinc-300" />
                </div>

                <h3 className="text-2xl font-bold text-zinc-50">
                  Enterprise Knowledge Retrieval Platform
                </h3>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                A production-ready Retrieval-Augmented Generation platform built
                with Spring Boot, LangChain4j, Qdrant, and local LLMs to deliver
                enterprise knowledge retrieval with privacy-first AI.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>LangChain4j</Badge>
                <Badge>Qdrant</Badge>
                <Badge>PostgreSQL</Badge>
              </div>

              <Link to="/projects/rag-system" className="mt-auto">
                <Button className="w-full sm:w-auto gap-2">
                  Read Case Study <ArrowRight size={16} />
                </Button>
              </Link>

            </div>

            <div className="md:w-2/5 min-h-[250px] relative bg-zinc-950 flex flex-col items-center justify-center p-8 overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-950 to-zinc-950"></div>

              <div className="relative z-10 flex gap-4 items-center w-full max-w-[200px]">

                <div className="w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center animate-pulse">
                  <Server size={18} className="text-zinc-400" />
                </div>

                <div className="h-px bg-zinc-700 flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50 animate-pulse"></div>
                </div>

                <div className="w-12 h-12 rounded-lg border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center">
                  <Database size={18} className="text-zinc-400" />
                </div>

              </div>

            </div>

          </Card>
        </FadeIn>

        {/* DEFICIENCY AI */}

        <FadeIn delay={0.2}>
          <Card className="overflow-hidden flex flex-col md:flex-row group">

            <div className="flex-1 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/80 group-hover:bg-zinc-800/80 transition-colors">

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Cpu size={20} className="text-zinc-300" />
                </div>

                <h3 className="text-2xl font-bold text-zinc-50">
                  Deficiency Detection AI
                </h3>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                An AI-powered diagnostic platform utilizing CNN-based deep
                learning models to detect vitamin deficiencies from nail and
                tongue images through an end-to-end prediction workflow.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge>Python</Badge>
                <Badge>Deep Learning</Badge>
                <Badge>CNN</Badge>
                <Badge>Flask</Badge>
              </div>

              <Link to="/projects/deficiency-ai" className="mt-auto">
                <Button className="w-full sm:w-auto gap-2">
                  Read Case Study <ArrowRight size={16} />
                </Button>
              </Link>

            </div>

            <div className="md:w-2/5 min-h-[250px] relative bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-950 to-zinc-950"></div>

              <div className="relative z-10 grid grid-cols-3 gap-2 w-full max-w-[150px]">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm border border-zinc-800 ${
                      i === 4 ? 'bg-zinc-300' : 'bg-zinc-900'
                    } transition-colors duration-1000`}
                  />
                ))}
              </div>

            </div>

          </Card>
        </FadeIn>

        {/* WORKFORCE INTELLIGENCE PLATFORM */}

        <FadeIn delay={0.4}>
          <Card className="overflow-hidden flex flex-col md:flex-row group">

            <div className="flex-1 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/80 group-hover:bg-zinc-800/80 transition-colors">

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700">
                  <Activity size={20} className="text-zinc-300" />
                </div>

                <h3 className="text-2xl font-bold text-zinc-50">
                  Workforce Activity Intelligence Platform
                </h3>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                An enterprise workforce analytics platform built using Spring
                Boot and native Windows APIs to monitor activity states,
                application usage, productivity signals, and behavior patterns
                through a privacy-first monitoring architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>JNA</Badge>
                <Badge>Windows API</Badge>
                <Badge>Activity Analytics</Badge>
              </div>

              <Link
                to="/projects/workforce-intelligence"
                className="mt-auto"
              >
                <Button className="w-full sm:w-auto gap-2">
                  Read Case Study <ArrowRight size={16} />
                </Button>
              </Link>

            </div>

            <div className="md:w-2/5 min-h-[250px] relative bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-950 to-zinc-950"></div>

              <div className="relative z-10 flex flex-col items-center gap-5">

                <div className="w-20 h-20 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center animate-pulse">
                  <Activity size={32} className="text-zinc-300" />
                </div>

                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-400 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-500 animate-pulse"></div>
                </div>

                <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Activity Intelligence
                </div>

              </div>

            </div>

          </Card>
        </FadeIn>

      </div>
    </section>
  );
}