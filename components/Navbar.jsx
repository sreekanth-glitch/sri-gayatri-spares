
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [["Home","/"],["About","/about"],["Brands","/brands"],["Contact","/contact"]];

  const isActive = (url) => pathname === url;

  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071326]/90 backdrop-blur-xl">
    <div className="container-x flex h-[78px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="Sri Gayatri logo" width={58} height={58} className="h-12 w-12 rounded-full object-contain bg-white"/>
        <span className="max-w-[210px] text-sm font-black leading-tight sm:text-base">SRI GAYATRI <span className="block text-[10px] tracking-[.15em] text-yellow-400 sm:text-xs">CYCLE & BIKE AUTOMOBILES</span></span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map(([name,url])=><Link
          key={url}
          href={url}
          className={`relative text-sm font-semibold transition duration-300 ${
            isActive(url)
              ? "text-yellow-400"
              : "text-slate-300 hover:text-yellow-400"
          }`}
        >
          {name}
          {isActive(url) && (
            <motion.span
              layoutId="activeNav"
              className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-yellow-400"
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>)}
        <Link href="/#products" className="btn-primary !px-5 !py-2.5 text-sm">Shop Spares</Link>
      </nav>

      <button onClick={()=>setOpen(!open)} className="rounded-lg border border-white/20 px-3 py-2 md:hidden" aria-label="Toggle menu">☰</button>
    </div>

    <AnimatePresence>
      {open && <motion.nav
        initial={{height:0,opacity:0}}
        animate={{height:"auto",opacity:1}}
        exit={{height:0,opacity:0}}
        className="overflow-hidden border-t border-white/10 md:hidden"
      >
        <div className="container-x flex flex-col gap-4 py-5">
          {links.map(([name,url])=><Link
            onClick={()=>setOpen(false)}
            key={url}
            href={url}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
              isActive(url)
                ? "border border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
                : "text-slate-300 hover:bg-white/5 hover:text-yellow-400"
            }`}
          >
            {name}
            {isActive(url) && <span className="ml-2">●</span>}
          </Link>)}
        </div>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
