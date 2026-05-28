import { ArrowRight } from '@phosphor-icons/react'
import Shimmer from './ui/Shimmer'
import RevealOnScroll from './ui/RevealOnScroll'

export default function FinalCta() {
  return (
    <section id="cta" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10">
        <RevealOnScroll>
          {/* Double-Bezel com shimmer na borda */}
          <div className="bezel-cta-shimmer">
            <div
              className="bezel-inner relative text-center overflow-hidden flex flex-col items-center gap-0"
              style={{
                background: 'linear-gradient(160deg, #0B1310, #040907 60%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06)',
              }}
            >
              {/* Ambient glow */}
              <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,194,90,.1)_0%,transparent_62%)] pointer-events-none" />

              <div className="relative z-10 py-16 md:py-24 px-4 flex flex-col items-center">
                {/* Lockup white */}
                <div className="mb-8">
                  <img src="/dale-lockup-white.png" alt="dale." className="h-12 w-auto object-contain" />
                </div>

                <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] text-dale-hi mb-4">
                  Comece a <Shimmer>receber agora</Shimmer>.
                </h2>

                <p className="text-[18px] text-dale-dim max-w-[460px] leading-[1.72] mb-10">
                  Crie sua conta grátis, integre em minutos e veja o primeiro Pix cair na hora. Sem mensalidade, sem burocracia.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                  <a
                    href="https://app.dalepay.com.br/auth/register"
                    className="group flex items-center gap-2.5 bg-dale-grad text-[#042012] font-display font-bold text-[16px] rounded-full px-9 py-4 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(0,194,90,.35)] active:scale-[.97] transition-all duration-500"
                  >
                    Criar conta grátis
                    <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                      <ArrowRight size={13} weight="bold" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
