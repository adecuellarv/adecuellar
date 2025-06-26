// src/components/Banner.jsx
import { Download } from "lucide-react"
import { content } from '../content';

export default function Banner({ lang }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden transition-colors neon-glow bg-gradient-to-r from-gray-900 to-[#090032]">
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-white/80 mb-4 tracking-wider">{content[lang].hero.role}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{content[lang].hero.name}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">{content[lang].hero.description}</p>
          <button className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold hover:bg-gray-100 transition-colors neon-glow bg-gradient-to-r from-purple-900 to-pink-700">
            <Download size={20} className="mr-2" />
            {content[lang].hero.downloadCV}
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://adeev.com.mx/adecuellar/static/media/ade.6c798fa690bd6a6e2da7.png"
              alt="Ade Cuellar"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 neon-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-[.2]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}