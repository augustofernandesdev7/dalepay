'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Theme = 'dark' | 'light'

interface ThemeCtx {
  theme:  Theme
  toggle: () => void
}

const Ctx = createContext<ThemeCtx>({ theme: 'dark', toggle: () => {} })

export function useTheme() {
  return useContext(Ctx)
}

function setFavicon(theme: Theme) {
  if (typeof document === 'undefined') return
  const href = theme === 'dark' ? '/dale-appicon-dark.png' : '/dale-appicon-white.png'
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = href
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Ler preferência salva ou detectar sistema
    const saved = localStorage.getItem('dale-theme') as Theme | null
    const sys   = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const initial: Theme = saved ?? sys

    apply(initial)
    setTheme(initial)
  }, [])

  const apply = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('dale-theme', t)
    setFavicon(t)
  }

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      apply(next)
      return next
    })
  }, [])

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}
