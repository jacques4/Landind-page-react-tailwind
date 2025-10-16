'use client'

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function Mode() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center gap-2 rounded-full p-2 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === 'dark' ? (
        <>
          <SunIcon className="h-6 w-6" />
          <span className="text-sm font-medium"></span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6" />
          <span className="text-sm font-medium"></span>
        </>
      )}
    </button>
  )
}

export default Mode
