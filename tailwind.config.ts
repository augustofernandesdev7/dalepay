import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dale: {
          bg:    '#040907',
          s1:    '#0B1310',
          s2:    '#101A15',
          s3:    '#16241D',
          400:   '#00E676',
          500:   '#00C25A',
          700:   '#009C48',
          hi:    '#F2F7F4',
          text:  '#BDC9C2',
          dim:   '#7E8C84',
          faint: '#515C56',
          amber: '#F5B544',
          rose:  '#FF6B6B',
          teal:  '#19D3C5',
        },
      },
      fontFamily: {
        wordmark: ['"Baloo 2"', 'cursive'],
        display:  ['Sora', 'sans-serif'],
        body:     ['"Hanken Grotesk"', 'sans-serif'],
        mono:     ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'dale-grad':   'linear-gradient(135deg, #00E676, #009C48)',
        'dale-grad-v': 'linear-gradient(to bottom, #00E676, #009C48)',
      },
      animation: {
        shimmer:      'shimmer 7s linear infinite',
        float:        'float 5.5s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        'step-ping':  'step-ping 2.8s ease-in-out infinite alternate',
        'toast-in':   'toast-in 0.65s 1.4s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '280% center' },
          '100%': { backgroundPosition: '-280% center' },
        },
        float: {
          '0%':   { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-18px)' },
        },
        'glow-pulse': {
          '0%':   { boxShadow: '0 0 0 1px rgba(0,230,118,.08), 0 40px 100px rgba(0,0,0,.6)' },
          '100%': { boxShadow: '0 0 0 1px rgba(0,230,118,.28), 0 40px 100px rgba(0,0,0,.6), 0 0 80px rgba(0,230,118,.14)' },
        },
        'step-ping': {
          '0%':   { opacity: '0.2', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translate(20px,10px) scale(.94)' },
          to:   { opacity: '1', transform: 'translate(0,0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
