
const COLS = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos',      href: '#recursos' },
      { label: 'Taxas',         href: '#taxas' },
      { label: 'Como funciona', href: '#como' },
      { label: 'Pix Instantâneo', href: '#metodos' },
      { label: 'Split automático', href: '#recursos' },
    ],
  },
  {
    title: 'Infoprodutores',
    links: [
      { label: 'Cursos Online',  href: '#' },
      { label: 'Lançamentos',    href: '#' },
      { label: 'Mentorias',      href: '#' },
      { label: 'Assinaturas',    href: '#' },
      { label: 'Afiliados',      href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre',          href: '#' },
      { label: 'Blog',           href: '#' },
      { label: 'Carreiras',      href: '#' },
      { label: 'Contato',        href: '#' },
      { label: 'Suporte',        href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-dale-400/[0.1] pt-20 pb-11">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/dale-lockup-white.png" alt="dale." className="h-8 w-auto object-contain" />
            </div>
            <p className="text-[14px] text-dale-faint leading-[1.7] max-w-[250px]">
              O gateway de pagamento Pix para infoprodutores que querem receber na hora, sempre.
            </p>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <h5 className="font-display font-bold text-[11px] tracking-[.12em] uppercase text-dale-faint mb-5">
                {col.title}
              </h5>
              <nav className="flex flex-col gap-3">
                {col.links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[14px] text-dale-dim hover:text-dale-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-dale-400/[0.1] pt-7 flex flex-wrap justify-between gap-3">
          <span className="text-[13px] text-dale-faint">
            © 2026 dale. Pagamentos · Todos os direitos reservados.
          </span>
          <span className="text-[13px] text-dale-faint">
            CNPJ 00.000.000/0001-00 · Instituição de pagamento
          </span>
        </div>

      </div>
    </footer>
  )
}
