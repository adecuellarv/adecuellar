import React from 'react';
import { content } from '../content';

export default function Header({ lang, setLang }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 ">
      <h1 className="text-2xl font-bold">Ade Cuellar {'</>'}</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="px-4 py-1 bg-white text-black rounded-lg">
          {lang === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    </header>
  );
}