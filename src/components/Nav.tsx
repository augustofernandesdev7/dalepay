import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, ArrowRight } from '@phosphor-icons/react'

const NAV_LINKS = [
  { label: 'Recursos',      href: '#recursos' },
  { label: 'Como funciona', href: '#como' },
  { label: 'Taxas',         href: '#taxas' },
  { label: 'Depoimentos',   href: '#depoimentos' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const pillCls = scrolled
    ? 'bg-dale-bg/90 border-dale-400/[0.18] shadow-[0_8px_40px_rgba(0,0,0,.5)]'
    : 'bg-dale-bg/60 border-dale-400/[0.1] shadow-[0_4px_32px_rgba(0,0,0,.4)]'

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-center px-5 pt-5 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,   scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center gap-2 w-full max-w-[980px] px-3 py-2.5 rounded-full border backdrop-blur-2xl transition-all duration-500 ${pillCls}`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center flex-shrink-0">
          <img src="/dale-lockup-white.png" alt="dale." className="h-[28px] w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 mx-auto">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-dale-dim text-[13.5px] font-medium hover:text-dale-hi hover:bg-dale-400/[0.07] transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto md:ml-0">
          <a
            href="https://app.dalepay.com.br/dashboard"
            className="hidden md:block text-dale-dim text-[13.5px] font-semibold hover:text-dale-hi transition-colors px-2 py-2"
          >
            Entrar
          </a>

          <a
            href="https://app.dalepay.com.br/auth/register"
            className="group flex items-center gap-2 bg-dale-grad text-[#042012] font-display font-bold text-[13.5px] rounded-full px-5 py-2.5 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,194,90,.32)] active:scale-[.97] transition-all duration-500"
          >
            Criar conta
            <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-dale-hi p-1.5 rounded-lg hover:bg-dale-400/[0.08] transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute top-[76px] inset-x-5 bg-dale-s1/95 backdrop-blur-2xl border border-dale-400/[0.08] rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 py-3 rounded-xl text-dale-dim text-[15px] font-medium hover:text-dale-hi hover:bg-dale-400/[0.07] transition-all"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="pt-2 border-t border-dale-400/[0.07] mt-1 flex flex-col gap-2">
              <a href="https://app.dalepay.com.br/dashboard" className="px-4 py-3 rounded-xl text-dale-dim text-[15px] font-semibold hover:text-dale-hi transition-colors">
                Entrar
              </a>
              <a
                href="https://app.dalepay.com.br/auth/register"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-dale-grad text-[#042012] font-display font-bold text-[15px] rounded-full py-3"
              >
                Criar conta grátis
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
