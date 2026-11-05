"use client";
import { motion } from "framer-motion";
const year = Number(process.env.NEXT_PUBLIC_ESTABLISHED_YEAR || 2010);
export default function About() {
 const years=Math.max(0,new Date().getFullYear()-year);
 return <main className="container-x section-pad"><motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} className="max-w-3xl"><p className="text-xs font-bold tracking-[.3em] text-yellow-400">ABOUT OUR SHOP</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">Driven by quality. <span className="gold-text">Built on trust.</span></h1><p className="mt-6 text-lg leading-8 text-slate-300">Welcome to Sri Gayatri Cycle & Bike Automobiles, your local destination for two-wheeler bike and cycle spare parts. We aim to make finding dependable replacement parts simple, convenient and affordable.</p></motion.div>
 <div className="mt-12 grid gap-4 sm:grid-cols-3">{[[`${year}`,"Established"],[`${years}+`,"Years of experience*"],["100%","Customer-first approach"]].map(([v,l])=><div key={l} className="glass rounded-2xl p-7"><p className="text-4xl font-black text-yellow-300">{v}</p><p className="mt-2 text-sm text-slate-400">{l}</p></div>)}</div>
 <div className="mt-14 grid gap-6 md:grid-cols-2"><div className="card p-8"><h2 className="text-2xl font-black">Our Mission</h2><p className="mt-4 leading-7 text-slate-300">To provide customers with quality-focused bike and cycle spare parts, helpful service and a straightforward shopping experience.</p></div><div className="card p-8"><h2 className="text-2xl font-black">Our Promise</h2><p className="mt-4 leading-7 text-slate-300">We value customer satisfaction, honest communication and product quality. Our goal is to help every customer find the right part for their two-wheeler.</p></div></div>
 <p className="mt-6 text-xs text-slate-500">*Experience figure is calculated from the configured establishment year. Update the year in .env.local to show the correct figure.</p></main>;
}
