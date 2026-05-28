
import { motion } from 'framer-motion'
import { QrCode, Lightning, Clock, ArrowCircleDown } from '@phosphor-icons/react'
import RevealOnScroll from './ui/RevealOnScroll'

function QRPattern() {
  const N = 18
  const cells: { x: number; y: number }[] = []
  let seed = 77
  const rng = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff }
  const sz = 100 / N
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { if (rng() > 0.5) cells.push({ x, y }) }
  const corner = (ox: number, oy: number, k: string) => (
    <g key={k}>
      <rect x={ox*sz}     y={oy*sz}     width={sz*6} height={sz*6} fill="#0a1208" />
      <rect x={(ox+1)*sz} y={(oy+1)*sz} width={sz*4} height={sz*4} fill="#fff" />
      <rect x={(ox+2)*sz} y={(oy+2)*sz} width={sz*2} height={sz*2} fill="#0a1208" />
    </g>
  )
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#fff" />
      {cells.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x*sz} y={y*sz} width={sz+0.4} height={sz+0.4} fill="#0a1208" />
      ))}
      {corner(0, 0, 'tl')}
      {corner(N-6, 0, 'tr')}
      {corner(0, N-6, 'bl')}
    </svg>
  )
}

const HIGHLIGHTS = [
  {
    icon: Lightning,
    title: 'Confirmação em ~2s',
    body:  'O cliente paga e você recebe a confirmação em segundos, sem espera e sem incerteza.',
  },
  {
    icon: Clock,
    title: 'Liquidação D+0',
    body:  'O dinheiro cai na sua conta na hora, mesmo fora do horário bancário e nos fins de semana.',
  },
  {
    icon: ArrowCircleDown,
    title: 'Taxa de 3,99%',
    body:  'Sem mensalidade, sem taxa de adesão. Você paga apenas quando recebe.',
  },
  {
    icon: QrCode,
    title: 'QR Code dinâmico',
    body:  'Cada cobrança gera um QR exclusivo. Também funciona via copia-e-cola.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardV = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function Methods() {
  return (
    <section id="metodos" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <RevealOnScroll className="mb-16">
          <span className="eyebrow">Como o Pix funciona</span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 text-dale-hi">
            Simples, instantâneo e sem complicação
          </h2>
          <p className="text-[17px] text-dale-dim mt-4 max-w-[520px] leading-[1.72]">
            Seu cliente escaneia o QR Code ou copia o código. Em segundos o pagamento é confirmado e o dinheiro já está na sua conta.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-center">

          {/* QR mock + status */}
          <RevealOnScroll>
            <div className="flex flex-col items-center gap-6">
              {/* Checkout preview */}
              <div className="bezel w-full max-w-[320px]">
                <div className="bezel-inner !p-6 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-dale-faint font-mono uppercase tracking-widest mb-1">Cobrança Pix</p>
                      <p className="font-display font-extrabold text-[2rem] text-dale-hi tracking-tight leading-none">
                        R$&nbsp;497,00
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-dale-400/[0.1] border border-dale-400/20 rounded-full px-3 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-dale-400 animate-pulse" />
                      <span className="text-[11px] text-dale-400 font-mono font-medium">Aguardando</span>
                    </div>
                  </div>

                  <div className="w-full aspect-square bg-white rounded-xl p-4">
                    <QRPattern />
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] text-dale-faint font-mono mb-2">ou use o copia-e-cola</p>
                    <div className="bg-dale-s2 rounded-lg px-3 py-2 font-mono text-[10px] text-dale-dim truncate border border-dale-400/[0.08]">
                      00020126580014br.gov.bcb.pix...
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation toast */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[320px] bg-dale-s1 border border-dale-400/[0.25] rounded-xl px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-dale-grad flex items-center justify-center flex-shrink-0">
                  <Lightning size={18} weight="fill" className="text-[#042012]" />
                </div>
                <div>
                  <p className="font-display font-bold text-[14px] text-dale-hi">Pagamento confirmado</p>
                  <p className="font-mono text-[11px] text-dale-400">R$&nbsp;497,00 · D+0 · agora</p>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Feature cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map(h => (
              <motion.div
                key={h.title}
                variants={cardV}
                className="bezel hover:border-dale-400/[0.22] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="bezel-inner !p-6">
                  <div className="w-11 h-11 rounded-xl bg-dale-400/[0.1] border border-dale-400/[0.15] flex items-center justify-center mb-4 text-dale-400">
                    <h.icon size={20} weight="light" />
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-dale-hi mb-2">{h.title}</h3>
                  <p className="text-[13px] text-dale-dim leading-[1.6]">{h.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
