'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileCode2,
  Gauge,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  Upload,
  X,
  Zap,
} from 'lucide-react'

const services = [
  { icon: Gauge, title: 'EGR / DPF', text: 'Soluzioni software per ottimizzare il sistema emissioni e risolvere anomalie.' },
  { icon: Zap, title: 'IMMO OFF', text: 'Gestione immobilizer e sincronizzazione ECU con procedure testate.' },
  { icon: FileCode2, title: 'DTC OFF', text: 'Rimozione codici errore e calibrazioni mirate per ogni centralina.' },
]

const tools = ['Flex', 'KESS3', 'KTAG', 'MPPS', 'Autotuner', 'PCMFlash']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [credits, setCredits] = useState(100)
  const [quantity, setQuantity] = useState(1)
  const [uploaded, setUploaded] = useState(false)

  const addCredits = () => setCredits((current) => current + quantity * 10)

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d0f] text-[#f3f0eb] selection:bg-[#d52828] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="File Service home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d52828] text-sm font-black tracking-tighter text-[#ef3d3d]">FS</span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">File Service</span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 md:flex">
            <a className="transition hover:text-white" href="#servizi">Servizi</a>
            <a className="transition hover:text-white" href="#strumenti">Strumenti</a>
            <a className="transition hover:text-white" href="#area-clienti">Area clienti</a>
            <a className="transition hover:text-white" href="#contatti">Contatti</a>
          </nav>
          <a href="#area-clienti" className="hidden items-center gap-2 rounded-full bg-[#d52828] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition hover:bg-[#ef3d3d] md:flex">Accedi <ArrowRight size={14} /></a>
          <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Apri menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#0b0d0f] px-5 py-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 md:hidden"><a href="#servizi" onClick={() => setMenuOpen(false)}>Servizi</a><a href="#strumenti" onClick={() => setMenuOpen(false)}>Strumenti</a><a href="#area-clienti" onClick={() => setMenuOpen(false)}>Area clienti</a><a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a></nav>}
      </header>

      <section id="top" className="relative isolate flex min-h-[720px] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 -z-20 bg-[#0b0d0f]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0d0f_0%,rgba(11,13,15,.84)_32%,rgba(11,13,15,.18)_76%,rgba(11,13,15,.65)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#0b0d0f_0%,transparent_34%,rgba(11,13,15,.1)_100%)]" />
        <img src="/ferrari-hero.png" alt="Ferrari rossa in un'officina automotive premium" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-80" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 lg:px-10 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#ef3d3d]"><span className="h-px w-10 bg-[#d52828]" /> ECU FILES · MADE FOR PERFORMANCE</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[.97] tracking-[-0.055em] text-white sm:text-7xl lg:text-[92px]">Il file giusto.<br /><span className="text-[#ef3d3d]">Ogni volta.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/65">Soluzioni professionali per ECU, DPF, EGR, IMMO e DTC. Carica il tuo file, acquista crediti e ricevi il risultato con la precisione che cerchi.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#area-clienti" className="flex items-center gap-3 rounded-full bg-[#d52828] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-[#ef3d3d]">Inizia ora <ArrowRight size={16} /></a><a href="#servizi" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition hover:border-white/50 hover:text-white">Scopri i servizi <ChevronDown size={15} /></a></div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 hidden text-right text-[10px] uppercase tracking-[0.22em] text-white/35 lg:block">ecumappe.eu<br /><span className="text-white/60">Professional file solutions</span></div>
      </section>

      <section className="border-y border-white/10 bg-[#111417]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 lg:px-10"><span>Soluzioni per professionisti</span><span className="h-px w-16 bg-white/15" /><span>File verificati</span><span className="h-px w-16 bg-white/15" /><span>Supporto diretto</span><span className="h-px w-16 bg-white/15" /><span>Consegna rapida</span></div></section>

      <section id="servizi" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ef3d3d]">01 / Cosa facciamo</p><h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Calibrazioni che<br /><span className="text-white/45">parlano chiaro.</span></h2></div><p className="max-w-sm text-sm leading-6 text-white/45">Un servizio pensato per chi lavora ogni giorno con centraline, diagnosi e performance automotive.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group bg-[#111417] p-7 transition hover:bg-[#181c20] lg:p-9"><div className="mb-14 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d52828]/50 text-[#ef3d3d]"><Icon size={20} /></span><span className="text-xs text-white/25">0{index + 1}</span></div><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p><a href="#area-clienti" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef3d3d] opacity-0 transition group-hover:opacity-100">Richiedi file <ArrowRight size={13} /></a></article>)}</div></section>

      <section id="strumenti" className="border-y border-white/10 bg-[#d52828] py-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-10"><p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/70">Compatibile con i tuoi strumenti</p><div className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-semibold tracking-tight text-white">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></section>

      <section id="area-clienti" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="mb-12"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ef3d3d]">02 / Area clienti</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Il tuo lavoro,<br /><span className="text-white/45">in un unico posto.</span></h2></div><div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]"><div className="rounded-2xl border border-white/10 bg-[#111417] p-7 lg:p-9"><div className="mb-8 flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Nuova richiesta</p><h3 className="mt-2 text-2xl font-semibold">Carica il tuo file</h3></div><span className="rounded-full bg-[#d52828]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ef3d3d]">Online</span></div><button onClick={() => setUploaded(!uploaded)} className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#0b0d0f] px-5 py-12 transition hover:border-[#d52828] hover:bg-[#15181b]">{uploaded ? <Check className="text-emerald-400" size={28} /> : <Upload className="text-[#ef3d3d]" size={28} />}<span className="mt-4 text-sm font-semibold">{uploaded ? 'File pronto per l’invio' : 'Trascina o seleziona un file'}</span><span className="mt-2 text-xs text-white/35">{uploaded ? 'demo_original_read.bin · 2.4 MB' : 'BIN, MOD, ORI · max 50 MB'}</span></button><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-lg border border-white/10 px-4 py-3"><label className="text-[10px] uppercase tracking-wider text-white/35">Servizio</label><select className="mt-2 w-full bg-transparent text-sm text-white outline-none"><option className="bg-[#111417]">DPF OFF</option><option className="bg-[#111417]">EGR OFF</option><option className="bg-[#111417]">IMMO OFF</option><option className="bg-[#111417]">DTC OFF</option></select></div><div className="rounded-lg border border-white/10 px-4 py-3"><label className="text-[10px] uppercase tracking-wider text-white/35">Note</label><input className="mt-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25" placeholder="Aggiungi dettagli..." /></div></div><button onClick={() => setUploaded(true)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#d52828] py-4 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#ef3d3d]">Invia richiesta <ArrowRight size={15} /></button></div><div className="flex flex-col gap-5"><div className="rounded-2xl border border-white/10 bg-[#111417] p-7 lg:p-9"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Il tuo saldo</p><p className="mt-3 text-5xl font-semibold tracking-[-0.06em]">{credits}<span className="ml-2 text-sm font-medium tracking-normal text-white/40">crediti</span></p></div><CreditCard className="text-[#ef3d3d]" /></div><div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#d52828]" /></div><p className="mt-3 text-xs text-white/35">I crediti non scadono mai.</p><div className="mt-7 flex items-center justify-between rounded-xl border border-white/10 bg-[#0b0d0f] p-3"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"><Minus size={14} /></button><span className="text-sm font-semibold">{quantity * 10} crediti <span className="font-normal text-white/40">· €{quantity * 10}</span></span><button onClick={() => setQuantity(quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"><Plus size={14} /></button></div><button onClick={addCredits} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#d52828] py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ef3d3d] transition hover:bg-[#d52828] hover:text-white">Ricarica crediti <ArrowRight size={14} /></button></div><div className="grid grid-cols-2 gap-5"><div className="rounded-2xl border border-white/10 bg-[#111417] p-6"><ShieldCheck className="mb-6 text-emerald-400" size={21} /><p className="text-sm font-semibold">Pagamenti sicuri</p><p className="mt-2 text-xs leading-5 text-white/35">PayPal e transazioni protette.</p></div><div className="rounded-2xl border border-white/10 bg-[#111417] p-6"><CircleHelp className="mb-6 text-[#ef3d3d]" size={21} /><p className="text-sm font-semibold">Serve aiuto?</p><a href="mailto:lucacaloia9@gmail.com" className="mt-2 block text-xs leading-5 text-white/35 hover:text-white">Scrivici direttamente.</a></div></div></div></div></section>

      <footer id="contatti" className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d52828] text-[10px] font-black text-[#ef3d3d]">FS</span><span className="text-sm font-semibold uppercase tracking-[0.2em]">File Service</span></div><p className="mt-3 text-xs text-white/35">Soluzioni software automotive professionali.</p></div><div className="text-left text-xs text-white/45 lg:text-right"><a className="transition hover:text-white" href="mailto:lucacaloia9@gmail.com">lucacaloia9@gmail.com</a><a className="mt-2 block transition hover:text-white" href="https://wa.me/393500028452" target="_blank" rel="noreferrer">WhatsApp · +39 350 002 8452</a><p className="mt-2">ecumappe.eu · © 2026 File Service</p></div></div></footer>
    </main>
  )
}
