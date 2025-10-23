// src/components/sections/Portfolio.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from '../../redux/actions/projects/allProjects';
import { type AppDispatch, type RootState } from '../../redux/store';
import { type IProject } from '../interfaces/Interfaces';

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.project?.projects) as IProject[] | undefined;

  useEffect(() => {
    dispatch(allProjects());
  }, [dispatch]);

  // Agrupar por categoría
  const groupedProjects = projects?.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, IProject[]>);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Colores por categoría
  const getCategoryColor = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('landing') || lower.includes('web')) return 'bg-electric-blue/10 text-electric-blue';
    if (lower.includes('tienda') || lower.includes('ecommerce') || lower.includes('catálogo')) return 'bg-cyan-cyan/10 text-cyan-cyan';
    if (lower.includes('automatización') || lower.includes('chatbot')) return 'bg-blue-ul/10 text-blue-ul';
    return 'bg-gray-100 text-gray-700';
  };

  const renderMedia = (project: IProject) => {
    
    const activeImage = project.images?.find(img => img.isActive);
    if (activeImage?.url) {
      return (
        <img
          src={activeImage.url.trim()}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')}
        />
      );
    }
    
    const activeVideo = project.videos?.find(v => v.isActive);
    if (activeVideo?.url) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black/5">
          <div className="text-center">
            <span className="block text-2xl mb-1">🎥</span>
            <span className="text-electric-blue font-medium text-sm">Video del proyecto</span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-sm">Sin medios</span>
      </div>
    );
  };

  if (!projects) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Cargando portafolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section id='portafolio' className="py-8 px-8 bg-amber-50/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-almost-black mb-4 font-playfair">
            Nuestro <span className="text-electric-blue">Trabajo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto sm:text-base md:text-lg lg:text-xl">
            Proyectos reales que demuestran nuestro enfoque en diseño, funcionalidad y resultados.
          </p>
        </motion.div>

        <AnimatePresence>
          {groupedProjects &&
            Object.entries(groupedProjects).map(([category, projects]) => (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-bold text-almost-black mb-6 flex items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                    {category}
                  </span>
                </h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={item}
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Media: video o imagen */}
                      <div className="h-48">
                        {renderMedia(project)}
                      </div>

                      {/* Contenido */}
                      <div className="p-5">
                        <h4 className="font-bold text-lg text-almost-black mb-2">{project.title}</h4>
                        <p className="text-gray-700 text-sm">{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;