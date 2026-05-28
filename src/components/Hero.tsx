import { motion } from 'framer-motion'
import { ArrowRight, Check } from '@phosphor-icons/react'
import ParticlesCanvas from './ui/ParticlesCanvas'
import Shimmer from './ui/Shimmer'

const TXS = [
  { id: 'txn_8f2a91', name: 'Curso Marketing Pro',  val: 'R$ 497,00',    time: 'agora' },
  { id: 'txn_7b1c04', name: 'Mentoria 1:1',         val: 'R$ 1.200,00',  time: '2min'  },
  { id: 'txn_5e9d77', name: 'Assinatura Anual',     val: 'R$ 897,00',    time: '5min'  },
  { id: 'txn_2a4f10', name: 'Pack Afiliados',       val: 'R$ 2.400,00',  time: '11min' },
]

function GatewayMockup() {
  return (
    <div className="animate-float animate-glow-pulse p-[6px] bg-white/[0.04] border border-white/[0.07] rounded-3xl">
      <div
        className="relative bg-dale-s1 border border-dale-400/[0.18] rounded-[calc(1.5rem-4px)] w-[320px] overflow-hidden"
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06)' }}
      >
        {/* top accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[2px] bg-dale-grad rounded-b" />

        {/* Header */}
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-dale-400/[0.1]">
          <img src="/dale-symbol.png" alt="dale." className="w-5 h-5 object-contain flex-shrink-0" />
          <span className="flex-1 font-display font-bold text-[13px] text-dale-hi">Gateway dale.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-dale-400 animate-pulse" />
            <span className="text-[11px] text-dale-400 font-mono">ao vivo</span>
          </span>
        </div>

        {/* Saldo */}
        <div className="px-5 pt-4 pb-3 border-b border-dale-400/[0.06]">
          <p className="text-[11px] text-dale-faint font-mono mb-1">Saldo disponível</p>
          <p className="font-display font-extrabold text-[24px] text-dale-hi tracking-tight">R$&nbsp;84.920<span className="text-[14px] text-dale-dim font-semibold">,30</span></p>
          <p className="text-[11px] text-dale-400 font-mono mt-0.5">↑ R$ 4.994,00 hoje</p>
        </div>

        {/* Transações */}
        <div className="px-5 py-3">
          <p className="text-[10px] text-dale-faint font-mono uppercase tracking-widest mb-3">Últimos Pix recebidos</p>
          <div className="flex flex-col gap-2.5">
            {TXS.map((tx, i) => (
              <div key={tx.id} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full bg-dale-grad flex items-center justify-center flex-shrink-0"
                  style={{ opacity: 1 - i * 0.18 }}
                >
                  <Check size={12} weight="bold" className="text-[#042012]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-dale-hi font-display font-semibold truncate">{tx.name}</p>
                  <p className="text-[10px] text-dale-faint font-mono">{tx.id}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[12px] text-dale-400 font-mono font-medium">{tx.val}</p>
                  <p className="text-[10px] text-dale-faint font-mono">{tx.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-dale-400/[0.06] bg-dale-s2/50">
          <p className="text-center text-[11px] text-dale-faint font-mono">Liquidação D+0 · Pix instantâneo</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex flex-col justify-center pt-36 pb-24 overflow-hidden">

      {/* Background: mockup.jpeg */}
      <div className="absolute inset-0 z-0">
        <img src="/mockup.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-dale-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dale-bg via-dale-bg/88 via-[45%] to-dale-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-dale-bg/80 via-transparent to-dale-bg/90" />
      </div>

      <ParticlesCanvas />

      <div className="absolute top-1/3 left-[5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse,rgba(0,194,90,.1)_0%,transparent_62%)] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 right-[10%] w-[35%] h-[40%] bg-[radial-gradient(ellipse,rgba(0,156,72,.08)_0%,transparent_65%)] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-dale-400/[0.08] border border-dale-400/[0.2] rounded-full px-4 py-[6px] mb-7">
              <span className="bg-dale-grad text-[#042012] rounded-full px-2.5 py-0.5 text-[11px] font-display font-bold">Novo</span>
              <span className="text-dale-400 text-[13px] font-display font-semibold">Pix com liquidação <strong>D+0</strong></span>
            </div>

            <h1 className="text-[clamp(2.7rem,5.5vw,4.1rem)] leading-[1.06] text-dale-hi mb-6 max-w-[560px]">
              Receba por Pix. <Shimmer>Na hora.</Shimmer>
            </h1>

            <p className="text-[17px] text-dale-dim leading-[1.72] max-w-[500px] mb-10">
              O gateway de pagamento Pix para infoprodutores. Integre em minutos, receba na hora e acompanhe tudo em tempo real.
            </p>

            <div className="flex gap-3.5 flex-wrap mb-9">
              <a href="https://app.dalepay.com.br/auth/register" className="group flex items-center gap-2.5 bg-dale-grad text-[#042012] font-display font-bold text-[16px] rounded-full px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,194,90,.32)] active:scale-[.97] transition-all duration-500">
                Criar conta grátis
                <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a href="#como" className="flex items-center gap-2 text-dale-hi font-display font-bold text-[16px] rounded-full px-7 py-4 border border-white/[0.12] hover:border-dale-400 hover:text-dale-400 hover:shadow-[0_0_24px_rgba(0,230,118,.08)] hover:-translate-y-0.5 transition-all duration-500">
                Como funciona
              </a>
            </div>

            <div className="flex gap-6 flex-wrap">
              {['Sem mensalidade', 'Antifraude incluso', 'Aprovação em minutos'].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-[13px] text-dale-faint">
                  <Check size={14} weight="bold" className="text-dale-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — gateway mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <GatewayMockup />

              {/* Toast */}
              <div className="animate-toast-in absolute -bottom-7 -right-8 flex items-center gap-3 bg-dale-s1 border border-dale-400/[0.22] rounded-xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,.5)] whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-dale-grad flex items-center justify-center flex-shrink-0">
                  <Check size={14} weight="bold" className="text-[#042012]" />
                </div>
                <div>
                  <p className="font-display font-bold text-[13px] text-dale-hi">Pix recebido</p>
                  <p className="font-mono text-[11px] text-dale-400">R$&nbsp;497,00 · D+0 · agora</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dale-bg to-transparent pointer-events-none z-[2]" />
    </section>
  )
}
