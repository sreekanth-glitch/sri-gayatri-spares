"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductShop from "@/components/ProductShop";

export default function Home() {
  return <main>
    <section className="relative overflow-hidden border-b border-white/10 bg-[#081a35]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,190,30,.16),transparent_55%)]"/>
      <div className="container-x relative py-8 sm:py-12">
        <motion.div initial={{opacity:0,scale:.97,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.7}} className="overflow-hidden rounded-2xl border border-yellow-400/20 shadow-2xl shadow-black/40">
          <Image src="/images/banner.png" alt="Sri Gayatri Cycle and Automobiles - Two Wheeler Only - Bike Spare Parts Sale" width={1536} height={1024} priority className="h-auto w-full object-contain"/>
        </motion.div>
        <div className="mx-auto mt-8 max-w-3xl text-center"><p className="text-xs font-bold tracking-[.35em] text-yellow-400">TWO WHEELER ONLY</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Quality parts. <span className="gold-text">Reliable rides.</span></h1><p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">Your destination for bike and cycle spare parts. Explore our products and send your enquiry directly to our shop.</p><Link href="#products" className="btn-primary mt-6">Explore Spare Parts ↓</Link></div>
      </div>
    </section>
    <ProductShop/>
    <section className="pb-20"><div className="container-x glass flex flex-col items-center justify-between gap-5 rounded-3xl p-8 text-center sm:flex-row sm:text-left"><div><p className="text-xs font-bold tracking-[.25em] text-yellow-400">NEED HELP?</p><h2 className="mt-2 text-2xl font-black">Looking for a specific spare?</h2><p className="mt-2 text-sm text-slate-400">Contact us for product availability and pricing.</p></div><Link href="/contact" className="btn-primary">Contact the shop</Link></div></section>
  </main>;
}
