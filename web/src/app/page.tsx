import { User } from 'lucide-react';

import nlwLoogo from '../assets/nlw-spacetime-logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen ">
      {/* Left */}
      <div className="relative flex flex-col justify-between items-start px-28 py-16 bg-[url(../assets/bg-stars.svg)] bg-cover overflow-hidden">
        {/* Blur */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[526px] h-[288px] rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute top-0 right-1 bottom-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50"
        >
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-400">
            <User className="w-5 h-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span>Crie sua conta</span> e salve suas memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5 ">
          <Image src={nlwLoogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>

            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block px-5 py-3 rounded-full font-alt uppercase leading-none text-sm text-black bg-green-500 hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="leading-relaxed text-sm text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            href="http>//rocketseat.com.br"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 justify-center items-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-gray-50"
            >
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
