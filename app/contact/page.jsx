
"use client";
export default function Contact() {
 const phone=process.env.NEXT_PUBLIC_SHOP_PHONE;
 const address = process.env.NEXT_PUBLIC_SHOP_ADDRESS;
 const mail=process.env.NEXT_PUBLIC_MAIL_ID;   
 const wa=(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||"").replace(/\D/g,"");
 
 return <main className="container-x section-pad"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.3em] text-yellow-400">GET IN TOUCH</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">Let's find your <span className="gold-text">right part.</span></h1><p className="mt-5 leading-7 text-slate-300">Have a question about a bike or cycle spare? Contact our shop for availability, pricing and product enquiries.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2"><div className="card p-7"><p className="text-sm text-yellow-400">PHONE</p><h2 className="mt-2 text-xl font-bold">{phone}</h2>

<p className="mt-7 text-sm text-yellow-400">MAIL</p>
<a href={`mailto:${mail}`} className="mt-2 inline-block text-xl font-bold text-slate-300 transition hover:text-yellow-400">{mail}</a>

<p className="mt-7 text-sm text-yellow-400">SHOP ADDRESS</p><p className="mt-2 leading-7 text-slate-300">{address}</p><p className="mt-7 text-sm text-yellow-400">SHOPPING CATEGORY</p><p className="mt-2 text-slate-300">Bike spares · Cycle spares · Two-wheelers only</p>{wa&&<a className="btn-primary mt-8" href={`https://wa.me/${wa}?text=${encodeURIComponent("Hello Sri Gayatri, I have a spare parts enquiry.")}`} target="_blank" rel="noreferrer">WhatsApp Enquiry ↗</a>}</div><form className="card p-7" onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const msg=`Hello Sri Gayatri!%0AName: ${encodeURIComponent(f.get("name"))}%0APhone: ${encodeURIComponent(f.get("phone"))}%0AEnquiry: ${encodeURIComponent(f.get("message"))}`;if(wa)window.open(`https://wa.me/${wa}?text=${msg}`,"_blank","noopener,noreferrer");else alert("Configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local");}}><h2 className="text-xl font-black">Send an enquiry</h2><label className="mt-5 block text-sm text-slate-300">Your name<input required name="name" className="field mt-2" placeholder="Enter your name"/></label><label className="mt-4 block text-sm text-slate-300">Phone number<input required name="phone" className="field mt-2" placeholder="Enter your phone number"/></label><label className="mt-4 block text-sm text-slate-300">Message<textarea required name="message" className="field mt-2 min-h-28" placeholder="Which spare part do you need?"/></label><button className="btn-primary mt-5 w-full" type="submit">Send via WhatsApp ↗</button></form></div></main>;
}
