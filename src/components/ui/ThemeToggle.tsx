'use client'

import { Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="
        w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
        border border-dale-neu/[0.12]
        text-dale-dim hover:text-dale-hi hover:border-dale-400/40
        hover:bg-dale-400/[0.08]
        transition-all duration-300
        active:scale-[.92]
      "
    >
      {theme === 'dark'
        ? <Sun  size={16} weight="light" />
        : <Moon size={16} weight="light" />
      }
    </button>
  )
}
