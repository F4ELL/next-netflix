'use client'

import Image from 'next/image'
import { Search, Bell } from 'lucide-react'

import logoImg from '../assets/logo.png'
import perfilImg from '../assets/perfil.png'
import { useEffect, useState } from 'react'

export function Header() {
  const [transparentHeader, setTransparentHeader] = useState(true)

  function transitionHeader() {
    if (window.scrollY > 100) {
      setTransparentHeader(false)
    } else {
      setTransparentHeader(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionHeader)
    return () => window.removeEventListener('scroll', transitionHeader)
  })

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        transparentHeader
          ? 'bg-gradient-to-b from-[rgba(0,0,0,0.7)] from-10% to-transparent to-100%'
          : 'bg-[#141414]'
      }`}
    >
      <div className="w-full h-16 m-auto px-16 bg-transparent flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logoImg}
            alt="Logo da Netflix"
            width={100}
            height={50}
            className="mr-12"
          />

          <nav>
            <ul className="flex items-center space-x-4 ">
              <li>
                <a href="" className="text-white font-sm font-semibold">
                  Início
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#E5E5E5] text-sm hover:text-[#b3b3b3] transition-colors duration-500"
                >
                  Séries
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#E5E5E5] text-sm hover:text-[#b3b3b3] transition-colors"
                >
                  Filmes
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#E5E5E5] text-sm hover:text-[#b3b3b3] transition-colors"
                >
                  Bombando
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#E5E5E5] text-sm hover:text-[#b3b3b3] transition-colors"
                >
                  Minha lista
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#E5E5E5] text-sm hover:text-[#b3b3b3] transition-colors"
                >
                  Navegar por idiomas
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <Search className="text-white text-2xl" />
          <Bell className="text-white text-2xl" />

          <Image src={perfilImg} alt="Perfil" width={32} height={32} />
        </div>
      </div>
    </header>
  )
}
