
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'
import RevealOnScroll from './ui/RevealOnScroll'

const FAQS = [
  {
    q: 'Quanto tempo leva para começar a receber?',
    a: 'O cadastro é 100% digital e a maioria das contas é aprovada em minutos. Assim que aprovado, você já gera links de pagamento e cobranças Pix na hora.',
  },
  {
    q: 'Tem mensalidade ou taxa de adesão?',
    a: 'Não. A dale. cobra apenas uma taxa por transação aprovada: sem mensalidade, sem taxa de setup e sem fidelidade. Você só paga quando vende.',
  },
  {
    q: 'Quando o dinheiro cai na minha conta?',
    a: 'Imediatamente. A liquidação Pix é D+0 e o dinheiro cai na sua conta na hora, inclusive fins de semana e feriados. Não existe prazo de espera.',
  },
  {
    q: 'Como funciona o split de pagamento?',
    a: 'Você define os recebedores e os valores (fixos ou percentuais) na hora de criar a cobrança. A dale. divide automaticamente cada venda entre parceiros, afiliados e coprodutores, sem planilha.',
  },
  {
    q: 'Tem proteção contra fraude?',
    a: 'Sim. Nosso motor antifraude monitora cada cobrança em tempo real, bloqueando tentativas suspeitas antes da confirmação. Está incluso em todas as transações, sem custo extra.',
  },
]

function FaqItem({ q, a, open, onToggle }: {
  q: string; a: string; open: boolean; onToggle: () => void
}) {
  return (
    <div className="border-b border-dale-400/[0.1]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-5 py-6 text-left group"
      >
        <span className={`font-display font-semibold text-[16px] transition-colors duration-200 ${open ? 'text-dale-400' : 'text-dale-hi group-hover:text-dale-400'}`}>
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
          open
            ? 'bg-dale-500 border-dale-500 text-[#042012] rotate-0'
            : 'border-white/[0.1] text-dale-dim group-hover:border-dale-400/50'
        }`}>
          {open
            ? <Minus size={14} weight="bold" />
            : <Plus size={14} weight="light" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] text-dale-dim leading-[1.72]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-dale-s1/60 border-y border-dale-400/[0.1]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <RevealOnScroll className="text-center mb-16">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 text-dale-hi">
            Tudo que você precisa saber
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="max-w-[740px] mx-auto">
          {FAQS.map((f, i) => (
            <FaqItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </RevealOnScroll>

      </div>
    </section>
  )
}
