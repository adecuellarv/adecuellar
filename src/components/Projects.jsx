// src/components/Projects.jsx
import { useState } from 'react';
import { content } from '../content';
import { projects } from '../data/projects';

//const categories = ['All', 'Mobile App', 'Website', 'Desktop', 'Other'];

export default function Projects({ lang }) {
  const [selected, setSelected] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selected === 'All' || selected === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selected);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="p-8 bg-[#0d102b] text-white">
      <h2 className="text-3xl text-center mb-6 font-semibold tracking-wide">{content[lang].portfolio}</h2>
      <div className="flex justify-center gap-4 mb-10">
        {content[lang].categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 font-medium transition duration-300 border-b-2 ${selected === cat ? 'text-cyan-400 border-cyan-400' : 'text-white border-transparent hover:text-cyan-400 hover:border-cyan-400'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-16 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => {
          console.log('#', project?.es?.description)

          return (
            <div
              key={project.id}
              className={`flex flex-col-reverse md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } items-center gap-6`}
            >
              <div className="flex-1 w-full">
                <h3 className="text-cyan-400 font-bold text-sm uppercase mb-2">{project?.category}</h3>
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  {project[lang]?.description
                  }
                </p>
                {project?.link &&
                  <a href={project.link} target="_black" className="text-sm text-cyan-400 flex items-center gap-1 hover:underline">
                    → {content[lang].showmore}
                  </a>
                }
              </div>
              <div className="relative w-[60%]">
                <div className="absolute top-4 left-4 w-full h-full bg-cyan-400 rounded-2xl z-0" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 rounded-2xl shadow-lg cursor-pointer hover:opacity-80 transition"
                  onClick={() => openModal(project)}
                />

              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-16">

      </div>
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-[#0d102b] p-6 rounded-xl shadow-2xl max-w-[90%] w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-cyan-400"
            >
              ×
            </button>

            <h2 className="text-cyan-400 text-xl font-semibold mb-4">{selectedProject.title}</h2>

            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover rounded-lg"
              />
            </div>

            <p className="mt-4 text-gray-300 text-sm">{selectedProject.description}</p>
          </div>
        </div>
      )}

    </section>
  );
}
