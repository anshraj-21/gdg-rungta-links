'use client';

import Image from 'next/image';
import { ArrowUpRight, CalendarDays, Github, Instagram, Linkedin, MessageCircle, Share2, Users, Youtube } from 'lucide-react';

const links = [
  {
    label: 'Google Cloud - Learn with Communities',
    meta: 'Learn Google Cloud, earn badges, goodies and exclusive swags',
    icon: CalendarDays,
    featured: true,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScIxD14Pyc183PbDLHcS9N-nbQRRYSncqY0TP3g7qSsfWgnKQ/viewform',
  },
  {
    label: 'WhatsApp Community - GDG On Campus RISU',
    meta: 'Join our official WhatsApp community to stay updated on latest events, workshops, and tech insights',
    icon: MessageCircle,
    href: 'https://chat.whatsapp.com/FcFeK5kz6qb9rOCyIZM1JA',
  },
  {
    label: 'Google Developer Groups (GDG)',
    meta: 'Official Google Community Page',
    icon: Users,
    href: 'https://gdg.community.dev/',
  },
  {
    label: 'GDG Afterhours',
    meta: 'Community to ask, build & help each other',
    icon: MessageCircle,
    href: 'https://chat.whatsapp.com/C1ALOpbDi1j2DLPBF341jM',
  },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/gdgrungta/', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdgrungta/posts/?feedView=all', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com/', icon: Youtube },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
];

export default function Home() {
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'GDG at Rungta University', url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // User cancelled the native share sheet.
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#202124] selection:bg-[#d2e3fc] selection:text-[#202124]">
      <div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col px-5 pb-8 pt-8 sm:px-8 sm:pt-12">
        <header className="flex items-center justify-end">
          <button
            onClick={share}
            aria-label="Share page"
            className="share-button"
          >
            <Share2 size={18} strokeWidth={2.2} />
          </button>
        </header>

        <section className="flex flex-col items-center pt-5 text-center sm:pt-7">
          <Image
            src="/gdg-rungta-logo.png"
            alt="Google Developer Group Rungta University"
            width={500}
            height={500}
            priority
            className="h-auto w-[205px] sm:w-[225px]"
          />
          <p className="mt-1 max-w-[330px] text-[13px] font-medium tracking-[-0.01em] text-[#5f6368]">
            events, workshops & things worth building
          </p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5f6368]">
            <span className="google-dot bg-[#4285F4]" />
            <span className="google-dot bg-[#EA4335]" />
            <span className="google-dot bg-[#FBBC05]" />
            <span className="google-dot bg-[#34A853]" />
            <span className="ml-0.5">powered by google</span>
          </div>
        </section>

        <section className="mt-9 space-y-3" aria-label="GDG links">
          {links.map(({ label, meta, icon: Icon, href, featured }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`main-link ${featured ? 'main-link-featured' : ''}`}
            >
              <span className={`link-icon ${featured ? 'link-icon-featured' : ''}`}>
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[14px] font-bold tracking-[-0.01em]">{label}</span>
                <span className={`mt-0.5 block truncate text-[11px] font-medium ${featured ? 'text-white/70' : 'text-[#5f6368]'}`}>
                  {meta}
                </span>
              </span>
              <ArrowUpRight size={18} strokeWidth={2.3} className="shrink-0" />
            </a>
          ))}
        </section>

        <section id="community" className="mt-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="section-label">find us here</span>
            <span className="h-px flex-1 bg-[#dadce0]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Icon size={17} strokeWidth={2.1} />
                <span>{label}</span>
                <ArrowUpRight size={14} className="ml-auto text-[#9aa0a6]" />
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-auto pt-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9aa0a6]">
            GDG at Rungta University · 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
