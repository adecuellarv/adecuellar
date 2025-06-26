// src/components/Banner.jsx
import React, { useState } from "react";
import { Download, Send, Copy, PhoneCall } from "lucide-react"
import { Toaster, toast } from "sonner";
import { content } from '../content';
import imgGit from './img/github.webp'
import yoSite from './img/yosite.png'

export default function Banner({ lang }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.info(content[lang].copied)
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden transition-colors neon-glow bg-gradient-to-r from-gray-900 to-[#090032]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-white/80 mb-4 tracking-wider">{content[lang].hero.role}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{content[lang].hero.name}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">{content[lang].hero.description}</p>
            <a
              href={lang === 'es' ? "https://adeev.com.mx/adecuellar/CVAde-Esp.pdf" :  "https://adeev.com.mx/adecuellar/CVAdela-en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold hover:bg-gray-100 transition-colors neon-glow bg-gradient-to-r from-purple-900 to-pink-700"
            >
              <Download size={20} className="mr-2" />
              {content[lang].hero.downloadCV}
            </a>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={yoSite}
                  alt="Ade Cuellar"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 neon-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-[.2]"></div>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-10 flex-wrap">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-900 to-pink-700 rounded-full px-6 py-4 neon-glow text-white">
                <span className="font-semibold">ade.cuellar91@gmail.com</span>
                <a
                  href="mailto:ade.cuellar91@gmail.com"
                  className="ml-2"
                  title="Llamar"
                >
                  <Send size={20} />
                </a>
                <button
                  onClick={() => copyToClipboard("ade.cuellar91@gmail.com", setCopiedEmail)}
                  className="ml-2"
                  title="Copiar correo"
                >
                  <Copy size={18} />
                </button>
                {false && <span className="text-xs ml-2 text-gray-100">{content[lang].copied}</span>}
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-900 to-pink-700 rounded-full px-6 py-4 neon-glow text-white">
                <span className="font-semibold">4481025008</span>
                <a
                  href="tel:4481025008"
                  className="ml-2"
                  title="Llamar"
                >
                  <PhoneCall size={20} />
                </a>
                <button
                  onClick={() => copyToClipboard("4481025008", setCopiedPhone)}
                  className="ml-2"
                  title="Copiar teléfono"
                >
                  <Copy size={18} />
                </button>
                {false && <span className="text-xs ml-2 text-gray-100">{content[lang].copied}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="absolute top-[0px] right-[20px] flex gap-1 cursor-pointer"
        onClick={() => {
          window.open('https://github.com/adecuellarv', '_blank');
        }}
      >
        <label>Github</label>
        <img className="w-[30px]" src={imgGit} alt="git" />
      </div>
      <Toaster position="top-left" richColors />
    </section>
  );
}