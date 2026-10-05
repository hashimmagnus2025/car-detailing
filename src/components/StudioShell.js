'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MotionConfig, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Services','/services'],['Protection','/protection'],['Gallery','/gallery'],['Packages','/packages'],['About','/about'],['Contact','/contact']];
const DOT_R = 3.5, RING_R = 18;

// Positioned via transform (x/y), never left/top — avoids forcing layout on every pointer move.
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const ringRawX = useSpring(mx, { stiffness: 340, damping: 32, mass: .5 });
  const ringRawY = useSpring(my, { stiffness: 340, damping: 32, mass: .5 });
  const dotX = useTransform(mx, v => v - DOT_R);
  const dotY = useTransform(my, v => v - DOT_R);
  const ringX = useTransform(ringRawX, v => v - RING_R);
  const ringY = useTransform(ringRawY, v => v - RING_R);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(fine);
    if (!fine) return;
    const move = e => { mx.set(e.clientX); my.set(e.clientY); };
    const over = e => setHovering(!!e.target.closest('a,button,.cursor-hover'));
    const leave = () => { mx.set(-100); my.set(-100); };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); document.documentElement.removeEventListener('mouseleave', leave); };
  }, [mx, my]);

  if (!enabled) return null;
  return <>
    <motion.span className="cursor-dot" style={{ x: dotX, y: dotY }} animate={{ scale: hovering ? 0 : 1 }} transition={{ duration: .2 }} aria-hidden="true" />
    <motion.span className="cursor-ring" style={{ x: ringX, y: ringY }} animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? .55 : 1 }} transition={{ duration: .25, ease: [.22,1,.36,1] }} aria-hidden="true" />
  </>;
}

export default function StudioShell({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  return <MotionConfig reducedMotion="user"><>
    <CustomCursor />
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <div className="announcement"><span>APEX AUTO STUDIO</span><span>Thoughtful care for every kind of drive <b>↗</b></span></div>
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)}><span className="mark">A<span>.</span></span><span>APEX <small>AUTO STUDIO</small></span></Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="mobile-book" href="/booking">Book appointment <ArrowUpRight size={16}/></Link></nav>
      <Link className="header-book" href="/booking">Book appointment <ArrowUpRight size={15}/></Link>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    <main><motion.div key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, ease: [.22,1,.36,1] }}>{children}</motion.div></main>
    <footer className="footer">
      <div className="footer-top"><div><Link className="wordmark" href="/"><span className="mark">A<span>.</span></span><span>APEX <small>AUTO STUDIO</small></span></Link><p>Precision care.<br/>Unmistakable finish.</p></div><div className="footer-links"><div><span className="eyebrow">EXPLORE</span>{links.slice(0,4).map(([x,y])=><Link href={y} key={x}>{x}</Link>)}</div><div><span className="eyebrow">STUDIO</span><Link href="/about">Our approach</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div><div><span className="eyebrow">A GOOD PLACE TO START</span><p>Tell us about your car.<br/>We'll help shape the right care.</p><Link className="text-link" href="/booking">Start a booking <ArrowUpRight size={15}/></Link></div></div></div>
      <div className="footer-bottom"><span>© 2025 APEX AUTO STUDIO · EDITABLE DEMO BRAND</span><span>Care, with intention.</span><Link href="/admin">Studio demo</Link></div>
    </footer>
  </></MotionConfig>;
}
