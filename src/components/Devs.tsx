
import { Code, ChatsCircle, ShieldCheck } from '@phosphor-icons/react'
import RevealOnScroll from './ui/RevealOnScroll'

const DEV_ITEMS = [
  {
    icon: Code,
    title: 'SDKs oficiais',
    body: 'Node, Python, PHP, Go e Ruby com tipos e exemplos prontos para produção.',
  },
  {
    icon: ChatsCircle,
    title: 'Webhooks em tempo real',
    body: 'Eventos de pagamento, estorno e chargeback com retry automático e assinatura HMAC.',
  },
  {
    icon: ShieldCheck,
    title: 'Sandbox completo',
    body: 'Simule aprovações, recusas e webhooks antes de ir para produção. Zero risco.',
  },
]

const CODE_LINES = [
  { type: 'comment', text: '// Cobrança Pix em 6 linhas' },
  { type: 'blank' },
  { type: 'code', kw: 'import', rest: ' { Dale } ', kw2: 'from', str: ' "@dale/node"' },
  { type: 'code', kw: 'const', rest: ' dale = ', kw2: 'new', fn: ' Dale', rest2: '(process.env.DALE_KEY)' },
  { type: 'blank' },
  { type: 'code', kw: 'const', rest: ' charge = ', kw2: 'await', fn2: ' dale.charges', rest3: '.create({' },
  { type: 'field', name: '  amount', val: '125000', comment: '// R$ 1.250,00' },
  { type: 'field', name: '  method', valStr: '"pix"' },
  { type: 'field', name: '  customer', valStr: '"cus_8f2a91"' },
  { type: 'split', text: '  split: [{ recipient: ', str: '"rec_afiliado"', rest: ', amount: ', num: '18750', end: ' }]' },
  { type: 'plain', text: '});' },
  { type: 'blank' },
  { type: 'comment', text: '// → { id: "ch_29x", status: "pending",' },
  { type: 'comment', text: '//     qr_code: "00020126..." }' },
]

function CodeLine({ line }: { line: (typeof CODE_LINES)[number] }) {
  const pk  = 'text-[#ff7ba8]'
  const pst = 'text-dale-400'
  const pnm = 'text-dale-amber'
  const pcm = 'text-dale-faint'
  const pfn = 'text-[#7fd7ff]'

  if (line.type === 'blank') return <div className="h-[1.78em]" />
  if (line.type === 'comment') return <div><span className={pcm}>{line.text}</span></div>
  if (line.type === 'plain')   return <div>{line.text}</div>

  if (line.type === 'field') {
    return (
      <div>
        <span className="text-dale-text">{line.name}:</span>{' '}
        {line.val   && <span className={pnm}>{line.val}</span>}
        {line.valStr && <span className={pst}>{line.valStr}</span>}
        {line.comment && <span className={`ml-2 ${pcm}`}>{line.comment}</span>}
        ,
      </div>
    )
  }

  if (line.type === 'split') {
    return (
      <div>
        <span>{line.text}</span>
        <span className={pst}>{line.str}</span>
        <span>{line.rest}</span>
        <span className={pnm}>{line.num}</span>
        <span>{line.end}</span>
      </div>
    )
  }

  if (line.type === 'code') {
    return (
      <div>
        <span className={pk}>{line.kw}</span>
        <span className="text-dale-text">{line.rest}</span>
        {line.kw2  && <span className={pk}>{line.kw2}</span>}
        {line.str  && <span className={pst}>{line.str}</span>}
        {line.fn   && <span className={pfn}>{line.fn}</span>}
        {line.rest2 && <span className="text-dale-text">{line.rest2}</span>}
        {line.fn2   && <span className={pfn}>{line.fn2}</span>}
        {line.rest3 && <span className="text-dale-text">{line.rest3}</span>}
      </div>
    )
  }

  return null
}

export default function Devs() {
  return (
    <section id="devs" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <RevealOnScroll>
            <span className="eyebrow">Para desenvolvedores</span>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] mt-3.5 text-dale-hi">
              Uma API que você integra hoje
            </h2>
            <p className="text-[16px] text-dale-dim mt-4 leading-[1.72]">
              REST limpa, webhooks confiáveis e SDKs nas linguagens que seu time já usa. Sandbox para testar sem risco.
            </p>

            <div className="flex flex-col gap-6 mt-10">
              {DEV_ITEMS.map(d => (
                <div key={d.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-dale-400/[0.08] border border-dale-400/[0.15] flex items-center justify-center text-dale-400 flex-shrink-0">
                    <d.icon size={20} weight="light" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[15px] text-dale-hi mb-1.5">{d.title}</h4>
                    <p className="text-[14px] text-dale-dim leading-[1.55]">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Right — code block (Double-Bezel) */}
          <RevealOnScroll delay={0.14}>
            <div className="bezel">
              <div className="rounded-[calc(1.5rem-3px)] border border-dale-400/[0.1] overflow-hidden bg-[#060d09]"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)' }}>
                <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-dale-400/[0.1]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-auto font-mono text-[12px] text-dale-faint">criar-cobranca.js</span>
                </div>
                <pre className="px-6 py-5 text-[13px] font-mono leading-[1.78] text-dale-text overflow-x-auto">
                  {CODE_LINES.map((line, i) => (
                    <CodeLine key={i} line={line} />
                  ))}
                </pre>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
