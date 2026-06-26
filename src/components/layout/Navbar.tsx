import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Mail, Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { profile } from '../../constants/profile';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
];

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (!isHome) return;
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/82 px-4 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-zinc-50">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-100">
            RR
          </span>
          <span className="hidden text-sm font-semibold text-zinc-200 sm:inline">
            Rupesh Reddy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-zinc-400 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              onClick={(event) => handleScroll(event, item.id)}
              className="rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            <span className="hidden h-9 items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-300/15 md:inline-flex">
              <Download size={16} />
              Resume
            </span>
          </a>

          <a href={profile.contactUrl}>
            <span className="hidden h-9 items-center justify-center gap-2 rounded-md bg-zinc-800/90 px-4 text-sm font-medium text-zinc-50 ring-1 ring-zinc-700/80 transition-colors hover:bg-zinc-700 lg:inline-flex">
              <Mail size={16} />
              Contact
            </span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-100 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'mx-auto grid max-w-6xl overflow-hidden transition-[grid-template-rows] duration-200 md:hidden',
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <nav className="min-h-0 border-t border-zinc-800 py-3">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={(event) => handleScroll(event, item.id)}
                className="rounded-md px-2 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.contactUrl}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-zinc-950"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
