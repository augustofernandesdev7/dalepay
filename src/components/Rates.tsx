
import { motion } from 'framer-motion'
import { Check, ArrowRight } from '@phosphor-icons/react'
import Shimmer from './ui/Shimmer'

const ITEMS = [
  'Liquidação D+0, cai na hora',
  'QR Code dinâmico ilimitado',
  'Copia-e-cola automático',
  'Antifraude nativo incluso',
  'Sem mensalidade, sem taxa de adesão',
  'Webhook de confirmação instantâneo',
  'Saque disponível na mesma hora',
  'Dashboard com relatórios em tempo real',
]

export default function Rates() {
  return (
    <section id="taxas" className="py-32 bg-dale-s1/60 border-y border-dale-400/[0.1]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Taxa</span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 text-dale-hi">
            Simples assim. <Shimmer>3,99%</Shimmer> por Pix.
          </h2>
          <p className="text-[17px] text-dale-dim mt-4 max-w-[480px] mx-auto leading-[1.72]">
            Sem surpresa na fatura. Você paga apenas quando recebe. Só isso.
          </p>
        </motion.div>

        {/* Card central expandido */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mx-auto bezel border-dale-500/[0.3] bg-dale-400/[0.04] shadow-[0_0_80px_rgba(0,194,90,.1)]"
        >
          <div className="bezel-inner border-dale-500/[0.2] !p-10 md:!p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Left: price */}
              <div>
                <p className="font-display font-bold text-[12px] tracking-[.14em] uppercase text-dale-dim mb-3">
                  Pix
                </p>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-display font-extrabold text-[5rem] leading-none tracking-[-0.05em]">
                    <Shimmer>3,99</Shimmer>
                  </span>
                  <span className="font-display font-bold text-[2rem] text-dale-dim">%</span>
                </div>
                <p className="text-[14px] text-dale-faint mb-8">por transação aprovada</p>

                <a
                  href="https://app.dalepay.com.br/auth/register"
                  className="group inline-flex items-center gap-2.5 bg-dale-grad text-[#042012] font-display font-bold text-[15px] rounded-full px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,194,90,.32)] active:scale-[.97] transition-all duration-500"
                >
                  Criar conta grátis
                  <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} weight="bold" />
                  </span>
                </a>
              </div>

              {/* Right: items */}
              <ul className="flex flex-col gap-3.5">
                {ITEMS.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-dale-dim leading-[1.5]">
                    <Check size={15} weight="bold" className="text-dale-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </motion.div>

        <p className="text-center mt-8 text-[14px] text-dale-faint">
          Volume acima de R$&nbsp;100 mil/mês?{' '}
          <a href="#" className="text-dale-400 hover:underline">
            Fale com vendas
          </a>{' '}
          para condições especiais.
        </p>

      </div>
    </section>
  )
}
