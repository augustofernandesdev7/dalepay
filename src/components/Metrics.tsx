
import { useEffect, useRef, useState } from 'react'
import Shimmer from './ui/Shimmer'

interface CounterProps {
  target:  number
  decimals: number
  prefix:  string
  suffix:  string
  label:   string
  delay:   number
  shimmer: boolean
}

function CounterItem({ target, decimals, prefix, suffix, label, delay, shimmer }: CounterProps) {
  const [value,    setValue]    = useState(0)
  const ref                     = useRef<HTMLDivElement>(null)
  const animated                = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const dur = 1700
        const t0  = performance.now()
        const tick = (t: number) => {
          const p    = Math.min(1, (t - t0) / dur)
          const ease = 1 - Math.pow(1 - p, 3)
          setValue(parseFloat((target * ease).toFixed(decimals)))
          if (p < 1) requestAnimationFrame(tick)
        }
        setTimeout(() => requestAnimationFrame(tick), delay * 1000)
        observer.disconnect()
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals, delay])

  const display = `${prefix}${value.toFixed(decimals).replace('.', ',')}${suffix}`

  return (
    <div ref={ref} className="bg-dale-bg px-10 py-14">
      <div className="font-display font-extrabold text-[clamp(2rem,3.2vw,2.7rem)] tracking-[-0.04em] leading-none mb-2.5">
        {shimmer ? <Shimmer>{display}</Shimmer> : <span className="text-dale-hi">{display}</span>}
      </div>
      <p className="text-[14px] text-dale-dim">{label}</p>
    </div>
  )
}

const METRICS = [
  { target: 4.2,   decimals: 1, prefix: 'R$ ', suffix: ' bi', label: 'processados em 2025',         shimmer: true  },
  { target: 12,    decimals: 0, prefix: '',    suffix: ' mil', label: 'negócios usando dale.',        shimmer: false },
  { target: 99.98, decimals: 2, prefix: '',    suffix: '%',    label: 'de uptime na infraestrutura', shimmer: false },
  { target: 2,     decimals: 0, prefix: '~',   suffix: 's',    label: 'para confirmar um Pix',        shimmer: false },
]

export default function Metrics() {
  return (
    <section className="border-y border-dale-400/[0.1] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_400px_at_50%_50%,rgba(0,194,90,.07),transparent_62%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-dale-400/[0.1] border border-dale-400/[0.1] rounded-2xl overflow-hidden">
          {METRICS.map((m, i) => (
            <CounterItem
              key={i}
              target={m.target}
              decimals={m.decimals}
              prefix={m.prefix}
              suffix={m.suffix}
              label={m.label}
              shimmer={m.shimmer}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
