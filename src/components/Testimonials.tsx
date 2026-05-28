
import { useEffect, useRef } from 'react'
import { Star } from '@phosphor-icons/react'

interface Testimonial {
  quote: string
  name:  string
  role:  string
  init:  string
  color: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Migramos para a dale. e o nosso fluxo de caixa mudou completamente. O Pix cai na hora e o split com os afiliados é automático. Economizamos horas de conciliação toda semana.',
    name:  'Rafael Tavares',
    role:  'Fundador · Escola de Trade',
    init:  'RT',
    color: '#00E676',
  },
  {
    quote: 'O Pix cai na conta na hora, de verdade. Para quem vende infoproduto em lançamento, isso muda o fluxo de caixa completamente. Nunca mais dependemos de prazo bancário.',
    name:  'Camila Moraes',
    role:  'Co-produtora · Mentoria Digital',
    init:  'CM',
    color: '#19D3C5',
  },
  {
    quote: 'Nunca tive um suporte tão rápido. Qualquer dúvida, respondem na hora. E a taxa de aprovação é real. Meus lançamentos converteram muito mais desde que mudei.',
    name:  'Lucas Ferraz',
    role:  'Produtor Digital · Curso de Design',
    init:  'LF',
    color: '#F5B544',
  },
  {
    quote: 'O split automático salvou minha operação. Tenho 8 afiliados e antes eu precisava de uma planilha enorme. Agora cada um recebe sozinho, sem erro e sem atraso.',
    name:  'Mariana Santos',
    role:  'Infoprodutora · Curso de Finanças',
    init:  'MS',
    color: '#00C25A',
  },
  {
    quote: 'Testei três gateways antes da dale. A diferença está na velocidade e na simplicidade. Em 20 minutos já estava recebendo Pix na minha plataforma. Inacreditável.',
    name:  'Pedro Albuquerque',
    role:  'Criador de Cursos · Marketing Digital',
    init:  'PA',
    color: '#19D3C5',
  },
  {
    quote: 'Faço lançamentos mensais e o D+0 no Pix é essencial pro meu fluxo de caixa. Na semana de abertura de carrinho, sei exatamente o que entrou, na hora.',
    name:  'Juliana Lima',
    role:  'Coach de Carreira · Mentora',
    init:  'JL',
    color: '#F5B544',
  },
  {
    quote: 'A dale. me deu confiança para escalar. Sei que o dinheiro vai estar na conta sem precisar ligar pra ninguém. Isso tem um valor enorme no dia a dia.',
    name:  'Thiago Costa',
    role:  'Infoprodutor · Comunidade Online',
    init:  'TC',
    color: '#00E676',
  },
  {
    quote: 'Trabalho como afiliada de vários produtores e a divisão automática do Pix nunca atrasou um centavo. A transparência das informações no dashboard é excelente.',
    name:  'Ana Paula Ribeiro',
    role:  'Afiliada · Nicho de Saúde',
    init:  'AP',
    color: '#FF6B6B',
  },
  {
    quote: 'Sou co-produtor em quatro cursos diferentes. O split configurado por evento de venda mudou minha vida. Sem burocracia, sem negociação manual, sem erro.',
    name:  'Rodrigo Mendes',
    role:  'Co-produtor · Educação Executiva',
    init:  'RM',
    color: '#00C25A',
  },
  {
    quote: 'Tive medo de mudar de gateway no meio de uma campanha, mas a migração foi em menos de 30 minutos. Minha equipe não percebeu nem a transição.',
    name:  'Fernanda Oliveira',
    role:  'Mentora de Negócios · Consultora',
    init:  'FO',
    color: '#F5B544',
  },
  {
    quote: 'A taxa do Pix na dale. fez diferença real no meu P&L do mês. Multiplicado por centenas de vendas, a economia é considerável. Simples assim.',
    name:  'Carlos Eduardo',
    role:  'Lançador · Funil de Vendas',
    init:  'CE',
    color: '#19D3C5',
  },
  {
    quote: 'O dashboard em tempo real é viciante. Fico acompanhando cada Pix que entra durante o lançamento. A visibilidade que a dale. dá é diferente de tudo que eu já usei.',
    name:  'Beatriz Cardoso',
    role:  'Criadora de Curso · Copywriting',
    init:  'BC',
    color: '#00E676',
  },
]

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="bezel h-full">
      <div
        className="bezel-inner flex flex-col justify-between gap-5"
        style={{ minHeight: 210, padding: '1.6rem' }}
      >
        <div>
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} size={13} weight="fill" className="text-dale-amber" />
            ))}
          </div>
          <p className="text-[13.5px] text-dale-text leading-[1.72] italic">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[12px] flex-shrink-0"
            style={{ background: t.color, color: '#042012' }}
          >
            {t.init}
          </div>
          <div>
            <p className="font-display font-bold text-[13px] text-dale-hi">{t.name}</p>
            <p className="text-[11px] text-dale-faint mt-0.5">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const outer = track.parentElement!

    const tick = () => {
      const outerRect = outer.getBoundingClientRect()
      const cx = outerRect.left + outerRect.width / 2
      const hw = outerRect.width * 0.4          // metade da "zona nítida"

      const cards = track.querySelectorAll<HTMLElement>('.tc-card')

      // leitura em batch
      const centers: number[] = []
      cards.forEach(c => {
        const r = c.getBoundingClientRect()
        centers.push(r.left + r.width / 2)
      })

      // escrita em batch
      cards.forEach((c, i) => {
        const dist  = Math.abs(cx - centers[i])
        const ratio = Math.min(dist / hw, 1)

        const blur = ratio < 0.05 ? 0 : ratio * 8      // 0 no centro, até 8px nas bordas
        const op   = 1 - ratio * 0.6                    // 1 no centro, 0.4 nas bordas
        const sc   = 1 - ratio * 0.05                   // scale sutil

        c.style.filter    = blur > 0 ? `blur(${blur.toFixed(1)}px)` : 'none'
        c.style.opacity   = op.toFixed(2)
        c.style.transform = sc < 1 ? `scale(${sc.toFixed(3)})` : 'none'
        c.style.transition = 'filter 0.15s ease, opacity 0.15s ease, transform 0.15s ease'
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const pause  = () => { track.style.animationPlayState = 'paused' }
    const resume = () => { track.style.animationPlayState = 'running' }
    outer.addEventListener('mouseenter', pause)
    outer.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(rafRef.current)
      outer.removeEventListener('mouseenter', pause)
      outer.removeEventListener('mouseleave', resume)
    }
  }, [])

  // triplicado para loop perfeito — a animação move -33.333%
  const tripled = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="depoimentos" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 mb-16">
        <span className="eyebrow">Quem usa, recomenda</span>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] mt-3.5 text-dale-hi">
          A escolha de quem vende todo dia
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="carousel-track gap-5 py-3"
          style={{ alignItems: 'stretch' }}
        >
          {tripled.map((t, i) => (
            <div
              key={i}
              className="tc-card flex-shrink-0"
              style={{ width: 370 }}
            >
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
