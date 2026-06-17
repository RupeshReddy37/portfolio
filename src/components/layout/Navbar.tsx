import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = (id: string) => {
    if (!isHome) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold tracking-tight text-zinc-50">
          LR.
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
        <Link to="/" onClick={() => handleScroll('about')} className="hover:text-zinc-50 transition-colors">About</Link>
        <Link to="/" onClick={() => handleScroll('skills')} className="hover:text-zinc-50 transition-colors">Skills</Link>
        <Link to="/" onClick={() => handleScroll('experience')} className="hover:text-zinc-50 transition-colors">Experience</Link>
        <Link to="/" onClick={() => handleScroll('projects')} className="hover:text-zinc-50 transition-colors">Projects</Link>
      </nav>

      <div className="flex items-center gap-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" className="hidden md:flex gap-2">
            <Download size={16} />
            Resume
          </Button>
        </a>
      </div>
    </header>
  );
}
