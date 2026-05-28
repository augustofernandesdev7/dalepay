
import { motion } from 'framer-motion'
import {
  Lightning, ShieldCheck, ArrowsSplit,
  CurrencyDollar, CheckCircle, ChartLine,
} from '@phosphor-icons/react'
import Shimmer from './ui/Shimmer'

const FEATURES = [
  {
    icon: Lightning,
    title: 'Pix instantâneo',
    body: 'QR Code dinâmico com confirmação em segundos. A venda cai na sua conta na hora, inclusive fins de semana.',
  },
  {
    icon: CheckCircle,
    title: 'Liquidação D+0',
    body: 'Nada de prazo de espera. O dinheiro do Pix é seu no mesmo instante em que o cliente paga.',
  },
  {
    icon: ArrowsSplit,
    title: 'Split automático',
    body: 'Divida cada venda entre sócios, afiliados e coprodutores automaticamente. Sem planilha, sem erro manual.',
  },
  {
    icon: ShieldCheck,
    title: 'Antifraude nativo',
    body: 'Motor de risco com machine learning monitora cada cobrança em tempo real. Incluso, sem custo extra.',
  },
  {
    icon: CurrencyDollar,
    title: 'Taxa de 3,99%',
    body: 'Sem mensalidade, sem taxa de adesão, sem surpresa. Você paga apenas quando recebe.',
    shimmer: '3,99%',
  },
  {
    icon: ChartLine,
    title: 'Dashboard em tempo real',
    body: 'Acompanhe vendas, saldo e saques num painel feito para decisão rápida, de qualquer dispositivo.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function Features() {
  return (
    <section id="recursos" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="eyebrow">Recursos</span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 max-w-[560px] text-dale-hi">
            Tudo que seu negócio precisa pra receber
          </h2>
          <p className="text-[17px] text-dale-dim mt-4 max-w-[520px] leading-[1.72]">
            Um gateway Pix completo: da integração ao saque, sem complicação e sem letras miúdas.
          </p>
        </motion.div>

        {/* Grid uniforme 3 colunas */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURES.map(f => (
            <motion.div
              key={f.title}
              variants={card}
              className="bezel hover:border-dale-400/[0.22] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="bezel-inner flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-dale-400/[0.1] border border-dale-400/[0.15] flex items-center justify-center mb-5 text-dale-400 flex-shrink-0">
                  <f.icon size={22} weight="light" />
                </div>
                <h3 className="text-[18px] text-dale-hi font-display font-bold mb-2.5 leading-tight">
                  {f.shimmer
                    ? <><span>{f.title.replace(f.shimmer, '')}</span><Shimmer>{f.shimmer}</Shimmer></>
                    : f.title
                  }
                </h3>
                <p className="text-[14px] text-dale-dim leading-[1.65]">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
