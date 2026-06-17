import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Activity,
  Monitor,
  Shield,
  Cpu,
  GitCommit
} from 'lucide-react';

import { FadeIn } from '../components/ui/FadeIn';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export function ProjectWorkforceIntelligence() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24">

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <FadeIn>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-50 mb-6">
          Workforce Activity Intelligence Platform
        </h1>

        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          Designed and developed a workforce analytics platform capable of
          monitoring user activity, active applications, idle behavior, and
          productivity signals using native Windows APIs. Built with a
          privacy-first architecture focused on activity intelligence rather
          than invasive surveillance.
        </p>

        <div className="flex flex-wrap gap-2 mb-16">
          <Badge>Java</Badge>
          <Badge>Spring Boot</Badge>
          <Badge>JNA</Badge>
          <Badge>Windows API</Badge>
          <Badge>Activity Analytics</Badge>
          <Badge>State Management</Badge>
          <Badge>Desktop Monitoring</Badge>
        </div>

      </FadeIn>

      <div className="space-y-20">

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Business Challenge
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Traditional employee monitoring solutions often rely on screenshots,
            invasive surveillance techniques, and simplistic activity metrics.
            Organizations require better visibility into work patterns while
            preserving employee privacy and maintaining trust.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            System Architecture
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Activity size={20} />
                <h3 className="font-bold text-zinc-100">
                  Activity Monitoring Engine
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Native Windows idle detection.</li>
                <li>• Active / idle transitions.</li>
                <li>• State management services.</li>
                <li>• Activity scheduler.</li>
                <li>• Event-driven monitoring.</li>
              </ul>
            </Card>

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Monitor size={20} />
                <h3 className="font-bold text-zinc-100">
                  Application Tracking Engine
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Foreground window detection.</li>
                <li>• Active application tracking.</li>
                <li>• Window transition events.</li>
                <li>• Usage timeline generation.</li>
                <li>• Productivity signal collection.</li>
              </ul>
            </Card>

          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Monitoring Flow
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 whitespace-pre">
{`Windows User Activity
        ↓
GetLastInputInfo()
        ↓
Idle Time Calculation
        ↓
Activity State Engine
        ↓
ACTIVE / IDLE
        ↓
Window Detection
        ↓
Application Timeline
        ↓
Analytics Layer`}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Current Features
          </h2>

          <ul className="list-disc ml-5 space-y-4 text-zinc-400">
            <li>Windows idle time monitoring.</li>
            <li>Active / idle state detection.</li>
            <li>Foreground application tracking.</li>
            <li>Window transition monitoring.</li>
            <li>Centralized state management.</li>
            <li>Activity scheduling engine.</li>
            <li>Structured event logging.</li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Engineering Decisions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex gap-2 items-center">
                <Shield size={18}/>
                Privacy First Monitoring
              </h3>

              <p className="text-zinc-400">
                The platform focuses on behavioral signals and activity metrics
                rather than screenshots or invasive monitoring techniques.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex gap-2 items-center">
                <Cpu size={18}/>
                Native Windows Integration
              </h3>

              <p className="text-zinc-400">
                JNA was used to access Windows APIs directly from Java,
                enabling accurate idle detection and active window tracking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex gap-2 items-center">
                <GitCommit size={18}/>
                State Driven Design
              </h3>

              <p className="text-zinc-400">
                Activity transitions are handled through dedicated state
                services to ensure consistency and avoid duplicate events.
              </p>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Future Roadmap
          </h2>

          <ul className="list-disc ml-5 space-y-4 text-zinc-400">
            <li>Focus quality analytics.</li>
            <li>Productivity trend analysis.</li>
            <li>Application categorization engine.</li>
            <li>Explainable fraud timeline.</li>
            <li>Behavior anomaly detection.</li>
            <li>Workforce intelligence dashboard.</li>
          </ul>
        </FadeIn>

      </div>

    </div>
  );
}