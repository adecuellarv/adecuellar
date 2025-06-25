import { content } from '../content';
export default function About({ lang }) {
  return (
    <section className="p-8 text-center">
      <h2 className="text-7xl mb-4">{content[lang].aboutTitle}</h2>
      <p className="max-w-xl mx-auto text-gray-300 text-3xl">{content[lang].aboutText}</p>
      
    </section>
  );
}