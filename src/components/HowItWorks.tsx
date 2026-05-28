
import { motion } from 'framer-motion'
import {
  UserCirclePlus,
  PlugsConnected,
  HandCoins,
  Wallet,
} from '@phosphor-icons/react'

const STEPS = [
  {
    n: '1',
    icon: UserCirclePlus,
    title: 'Crie sua conta',
    body: 'Cadastro 100% digital com aprovação em minutos. Sem papelada, sem burocracia.',
  },
  {
    n: '2',
    icon: PlugsConnected,
    title: 'Integre via link ou API',
    body: 'Link de pagamento Pix pronto ou API REST. Copie, cole e comece a receber.',
  },
  {
    n: '3',
    icon: HandCoins,
    title: 'Receba pagamentos',
    body: 'Pix com QR Code ou copia-e-cola. O dinheiro entra com confirmação instantânea.',
  },
  {
    n: '4',
    icon: Wallet,
    title: 'Saque quando quiser',
    body: 'Saldo disponível na hora. Transfira para qualquer conta sem prazo travado.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const stepVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HowItWorks() {
  return (
    <section id="como" className="py-32 bg-dale-s1/60 border-y border-dale-400/[0.1]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="eyebrow">Como funciona</span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 text-dale-hi">
            Do zero ao primeiro recebimento em 4 passos
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-dale-700/50 to-transparent" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              variants={stepVariant}
              className={`relative px-7 py-10 ${i < STEPS.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-dale-400/[0.1]' : ''}`}
            >
              {/* Number bubble */}
              <div className="relative w-[54px] h-[54px] mb-6">
                <div className="w-full h-full rounded-full bg-dale-s2 border border-dale-400/[0.25] flex items-center justify-center font-mono font-semibold text-[17px] text-dale-400 relative z-10">
                  {s.n}
                </div>
                <div className="absolute inset-[-4px] rounded-full border border-dale-400/[0.1] animate-step-ping" />
              </div>

              <div className="w-10 h-10 rounded-lg bg-dale-400/[0.08] border border-dale-400/[0.12] flex items-center justify-center text-dale-400 mb-4">
                <s.icon size={20} weight="light" />
              </div>

              <h3 className="font-display font-bold text-[16px] text-dale-hi mb-2.5">{s.title}</h3>
              <p className="text-[14px] text-dale-dim leading-[1.6]">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
