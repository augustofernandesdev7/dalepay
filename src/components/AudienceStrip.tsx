const ITEMS = [
  'Infoprodutos',
  'Cursos Online',
  'E-commerce',
  'Assinaturas',
  'Lançamentos',
  'Afiliados',
  'Marketplaces',
  'Mentorias',
  'Comunidades',
  'SaaS',
]

const SEP = () => (
  <span className="w-1 h-1 rounded-full bg-dale-700 flex-shrink-0 mx-1" />
)

export default function AudienceStrip() {
  // 4 cópias: a animação move -25% (1 cópia), reinicia em 0 — loop perfeito
  const copies = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="border-y border-dale-400/[0.1] py-[18px] overflow-hidden bg-dale-s1/40">
      <div className="marquee-track">
        {copies.map((item, i) => (
          <div key={i} className="flex items-center gap-0 whitespace-nowrap">
            {/* "Feito para" aparece no início de cada cópia */}
            {i % ITEMS.length === 0 && (
              <span className="text-dale-faint text-[13px] font-display font-medium px-6">
                Feito para
              </span>
            )}
            <SEP />
            <span className="text-dale-dim text-[13.5px] font-display font-semibold px-5">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
