const LOGOS = [
  'https://framerusercontent.com/images/F8ZayrRyhkScp6aN9nmQFgCUTA0.png',
  'https://framerusercontent.com/images/UDhOrNjjBDjmCu78C1BhVInUzHk.png',
  'https://framerusercontent.com/images/zzWsDmtHI9cdqK5podq6xSXMNg.png',
  'https://framerusercontent.com/images/NKeTaj54Rrce65JhJq2CXiGkHmQ.png',
  'https://framerusercontent.com/images/11xSKeZPS9rcCbebmgw95XfSg.png',
  'https://framerusercontent.com/images/D3Sw2khu4SsJmlmTTA60eKxXkBY.png',
]

// 4 cópias garante loop infinito perfeito (anima -25%)
const copies = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

const logoStyle: React.CSSProperties = {
  mixBlendMode: 'difference',
  opacity: 0.5,
}

const fadeLeft: React.CSSProperties = {
  background: 'linear-gradient(to right, #040907 0%, transparent 100%)',
}

const fadeRight: React.CSSProperties = {
  background: 'linear-gradient(to left, #040907 0%, transparent 100%)',
}

export default function AudienceStrip() {
  return (
    <div className="border-y border-dale-400/[0.1] py-5 overflow-hidden relative select-none">

      {/* Fade esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={fadeLeft} />
      {/* Fade direita */}
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={fadeRight} />

      {/* Linha 1 — esquerda */}
      <div className="marquee-track gap-16 mb-5">
        {copies.map((url, i) => (
          <figure key={`l1-${i}`} className="flex-shrink-0 m-0 p-0">
            <img
              src={url}
              alt=""
              className="h-8 w-auto object-contain"
              style={logoStyle}
              draggable={false}
            />
          </figure>
        ))}
      </div>

      {/* Linha 2 — direita */}
      <div className="marquee-track-right gap-16">
        {copies.map((url, i) => (
          <figure key={`l2-${i}`} className="flex-shrink-0 m-0 p-0">
            <img
              src={url}
              alt=""
              className="h-8 w-auto object-contain"
              style={logoStyle}
              draggable={false}
            />
          </figure>
        ))}
      </div>

    </div>
  )
}
