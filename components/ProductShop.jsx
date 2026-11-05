"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductShop() {
  const [category,setCategory] = useState("bike");
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState({});
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  useEffect(()=>{ fetch("/api/products").then(r=>r.json()).then(d=>setProducts(d.products||[])).catch(()=>setError("Products could not be loaded. Please refresh.")).finally(()=>setLoading(false)); },[]);
  const visible = products.filter(p=>p.category===category);
  const cartItems = useMemo(()=>products.filter(p=>cart[p._id]>0).map(p=>({...p,qty:cart[p._id]})),[products,cart]);
  const total = cartItems.reduce((s,p)=>s+p.price*p.qty,0);
  const change = (id,delta)=>setCart(prev=>({...prev,[id]:Math.max(0,(prev[id]||0)+delta)}));
  const confirm = ()=>{
    if(!cartItems.length) return;
    const number=(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||"").replace(/\D/g,"");
    if(!number){ alert("Please configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local"); return; }
    const lines=cartItems.map(p=>`${p.name} x ${p.qty} = ₹${(p.price*p.qty).toFixed(2)}`).join("\n");
    const msg=`Hello Sri Gayatri! I would like to confirm this order:\n\n${lines}\n\nTotal: ₹${total.toFixed(2)}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");
  };
  return <section id="products" className="section-pad">
    <div className="container-x">
      <div className="mx-auto mb-9 max-w-2xl text-center"><p className="text-xs font-bold tracking-[.3em] text-yellow-400">OUR SPARE PARTS</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Find the right <span className="gold-text">spare parts</span></h2><p className="mt-3 text-sm text-slate-400">Choose a category, add products to your cart and send your order directly through WhatsApp.</p></div>
      <div className="mx-auto mb-8 flex w-fit rounded-full border border-white/10 bg-white/5 p-1.5">
        {["bike","cycle"].map(c=><button key={c} onClick={()=>setCategory(c)} className={`rounded-full px-7 py-3 text-sm font-extrabold capitalize transition ${category===c?"bg-yellow-400 text-slate-950 shadow-glow":"text-slate-300 hover:text-white"}`}>{c} Spares</button>)}
      </div>
      {loading?<p className="py-12 text-center text-slate-400">Loading products...</p>:error?<p className="py-12 text-center text-red-300">{error}</p>:visible.length===0?<div className="glass rounded-2xl py-14 text-center"><p className="text-xl font-bold">No {category} spare parts added yet.</p><p className="mt-2 text-sm text-slate-400">Please check back soon.</p></div>:<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visible.map((p,i)=><motion.article key={p._id} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="card group"><div className="relative aspect-[4/3] overflow-hidden bg-white"><Image src={p.image} alt={p.name} fill unoptimized className="object-contain p-3 transition duration-500 group-hover:scale-105"/></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-yellow-400">{category} spare</p><h3 className="mt-2 min-h-12 font-bold">{p.name}</h3><p className="mt-2 text-xl font-black text-yellow-300">₹{Number(p.price).toLocaleString("en-IN")}</p><div className="mt-4 flex items-center justify-between gap-2"><div className="flex items-center gap-3 rounded-full border border-white/15 px-2 py-1"><button onClick={()=>change(p._id,-1)} className="h-7 w-7 rounded-full bg-white/10">−</button><span className="min-w-4 text-center text-sm">{cart[p._id]||0}</span><button onClick={()=>change(p._id,1)} className="h-7 w-7 rounded-full bg-white/10">+</button></div><button onClick={()=>change(p._id,1)} className="btn-primary !px-4 !py-2 text-xs">Add to cart</button></div></div></motion.article>)}</div>}
      <AnimatePresence>{cartItems.length>0&&<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:30}} className="glass sticky bottom-4 z-30 mt-10 flex flex-col justify-between gap-4 rounded-2xl p-5 shadow-2xl sm:flex-row sm:items-center"><div><p className="text-sm text-slate-300">{cartItems.reduce((s,p)=>s+p.qty,0)} item(s) in cart</p><p className="text-2xl font-black text-yellow-300">Total: ₹{total.toLocaleString("en-IN",{maximumFractionDigits:2})}</p></div><button onClick={confirm} className="btn-primary">Confirm Order on WhatsApp ↗</button></motion.div>}</AnimatePresence>
    </div>
  </section>;
}
