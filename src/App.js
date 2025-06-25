import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { content } from './content';
import './index.css';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Banner lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
      </main>
    </div>
  );
}

export default App;