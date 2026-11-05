import Link from "next/link";
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#040c19] py-9"><div className="container-x flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="font-black tracking-wide">SRI GAYATRI CYCLE & BIKE AUTOMOBILES</p><p className="mt-1 text-xs text-slate-400">Two Wheeler Only · Bike & Cycle Spare Parts</p></div><div className="flex gap-5 text-sm text-slate-400"><Link href="/about">About</Link><Link href="/brands">Brands</Link><Link href="/contact">Contact</Link></div><p className="text-xs text-slate-500">© {new Date().getFullYear()} Sri Gayatri. All rights reserved.</p></div></footer>;
}
