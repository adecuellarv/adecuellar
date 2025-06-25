// src/components/Projects.jsx
import { useState } from 'react';
import { content } from '../content';
import { projects } from '../data/projects';

const categories = ['All', 'Mobile App', 'Website', 'Desktop', 'Other'];

export default function Projects({ lang }) {
  const [selected, setSelected] = useState('All');

  const filteredProjects =
    selected === 'All'
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section className="p-8 bg-[#0d102b] text-white">
      <h2 className="text-3xl text-center mb-6 font-semibold tracking-wide">PORTFOLIO</h2>

      <div className="flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 font-medium transition duration-300 border-b-2 ${
              selected === cat ? 'text-cyan-400 border-cyan-400' : 'text-white border-transparent hover:text-cyan-400 hover:border-cyan-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-16 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-6`}
          >
            <div className="flex-1">
              <h3 className="text-cyan-400 font-bold text-sm uppercase mb-2">PROJECT {index + 1}</h3>
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description ||
                  'Lorem ipsum is simply dummy text of the printing and typesetting industry.'}
              </p>
              <button className="text-sm text-cyan-400 flex items-center gap-1 hover:underline">
                → Read more
              </button>
            </div>
            <div className="relative w-full md:w-1/2 max-w-sm">
              <div className="absolute top-4 left-4 w-full h-full bg-cyan-400 rounded-2xl z-0" />
              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-6 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600">
          View all
        </button>
      </div>
    </section>
  );
}
