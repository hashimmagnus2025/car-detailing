'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Services','/services'],['Protection','/protection'],['Gallery','/gallery'],['Packages','/packages'],['About','/about'],['Contact','/contact']];

export default function StudioShell({ children }) {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  return <MotionConfig reducedMotion="user"><>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <div className="announcement"><span>APEX AUTO STUDIO</span><span>Thoughtful care for every kind of drive <b>↗</b></span></div>
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)}><span className="mark">A<span>.</span></span><span>APEX <small>AUTO STUDIO</small></span></Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="mobile-book" href="/booking">Book appointment <ArrowUpRight size={16}/></Link></nav>
      <Link className="header-book" href="/booking">Book appointment <ArrowUpRight size={15}/></Link>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="footer-top"><div><Link className="wordmark" href="/"><span className="mark">A<span>.</span></span><span>APEX <small>AUTO STUDIO</small></span></Link><p>Precision care.<br/>Unmistakable finish.</p></div><div className="footer-links"><div><span className="eyebrow">EXPLORE</span>{links.slice(0,4).map(([x,y])=><Link href={y} key={x}>{x}</Link>)}</div><div><span className="eyebrow">STUDIO</span><Link href="/about">Our approach</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div><div><span className="eyebrow">A GOOD PLACE TO START</span><p>Tell us about your car.<br/>We'll help shape the right care.</p><Link className="text-link" href="/booking">Start a booking <ArrowUpRight size={15}/></Link></div></div></div>
      <div className="footer-bottom"><span>© 2025 APEX AUTO STUDIO · EDITABLE DEMO BRAND</span><span>Care, with intention.</span><Link href="/admin">Studio demo</Link></div>
    </footer>
  </></MotionConfig>;
}
