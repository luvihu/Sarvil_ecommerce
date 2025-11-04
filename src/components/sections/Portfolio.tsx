import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { allProjects } from '../../redux/actions/projects/allProjects';
import { type AppDispatch, type RootState } from '../../redux/store';
import { type IProject } from '../interfaces/Interfaces';
import dataPortafolio from '../fondos/DataPortafolio';
import { BiRightArrow } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.project?.projects) as IProject[] | undefined;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    dispatch(allProjects());
  }, [dispatch]);

  // Efecto para el carrusel automático de imágenes
  useEffect(() => {
    if (!projects) return;

    const timers: number[] = [];

    projects.forEach((project) => {
      if (project.images && project.images.length > 1) {
        const timer = window.setInterval(() => {
          setCurrentImageIndexes(prev => ({
            ...prev,
            [project.id]: prev[project.id] === project.images!.length - 1 
              ? 0 
              : (prev[project.id] || 0) + 1
          }));
        }, 3000); // Cambia cada 3 segundos

        timers.push(timer);
      }
    });

    // Cleanup: limpiar todos los timers
    return () => {
      timers.forEach(timer => window.clearInterval(timer));
    };
  }, [projects]);

  const handleClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const cardVariants: Variants = {
    expanded: {
      width: "600px",
      opacity: 1
    },
    collapsed: {
      width: "520px",
      opacity: 0.8,
      marginRight: "20px",
      marginBottom: "20px"
    }
  };

  // Definir fadeIn con tipo Variants
  const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number): Variants => ({
    hidden: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.2,
        delay,
      },
    },
  });

  // Función para encontrar los skills por título del proyecto
  const getSkillsByTitle = (title: string) => {
    const projectData = dataPortafolio.find(item => item.title === title);
    return projectData?.skills || [];
  };

  // Función para obtener la imagen actual de un proyecto
  const getCurrentImage = (project: IProject) => {
    if (!project.images || project.images.length === 0) {
      return null;
    }
    
    const currentIndex = currentImageIndexes[project.id] || 0;
    return project.images[currentIndex];
  };

  // Función para cambiar manualmente la imagen
  const goToImage = (projectId: string, index: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: index
    }));
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
    <section id='portafolio' className="min-h-screen py-10 sm:py-18 md:py-20 lg:py-26 bg-amber-50/10">
      <div className="max-w-9xl mx-auto">
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-4 sm:mb-10 md:mb-14"
        >
          <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-almost-black mb-4 font-playfair">
            Nuestro <span className="text-electric-blue">Trabajo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-6 sm:px-0 sm:text-base md:text-lg lg:text-xl">
            Proyectos reales que demuestran nuestro enfoque en diseño, funcionalidad y resultados.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center pl-3 h-full gap-1 sm:gap-10 md:gap-10 lg:gap-8 flex-row flex-wrap sm:pb-14 bg-cyan-100/15"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <AnimatePresence>
            {projects.map((project, index) => {
              const skills = getSkillsByTitle(project.title);
              const currentImage = getCurrentImage(project);
              const currentIndex = currentImageIndexes[project.id] || 0;

              return (
                <motion.div 
                  key={project.id}
                  className={`card cursor-pointer h-[412px] bg-contain bg-no-repeat bg-center rounded-[20px] relative  ${
                    index === expandedIndex && 'expanded'
                  }`}
                  initial={{ opacity: 1 }}
                  variants={cardVariants}
                  animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleClick(index)}
                  style={{
                    backgroundImage: currentImage?.url 
                      ? `url(${currentImage.url})`
                      : project.images && project.images.length > 0
                      ? `url(${project.images[0].url})`
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  {/* Indicadores de imágenes (solo si hay más de 1 imagen) */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute top-4 right-3 flex gap-2">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToImage(project.id, imgIndex);
                          }}
                          className={`w-1 h-1 rounded-full transition-all ${
                            currentIndex === imgIndex 
                              ? 'bg-cyan-100 scale-110' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col justify-end h-full">
                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                      <h2 className="flex items-center md:text-lg font-bold text-center text-white">
                        {project.title} 
                        <BiRightArrow className="ml-2" />
                      </h2>
                      {index === expandedIndex && (
                        <>
                          <p className="text-white text-sm mt-1 text-justify">
                            {project.description}
                          </p>
                          <div className="flex gap-5 sm:gap-4 mt-4 flex-wrap justify-center">
                            {skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="text-white hover:text-electric-blue transition-colors">
                                {skill.icon}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Links de demo y github */}
                  <div className="flex gap-5 mt-6 ml-4">
                    {project.videos && project.videos.length > 0 ? (
                      <a 
                        href={project.videos[0]?.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-secondary hover:text-electric-blue transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaCreditCard size="20" className="mr-1"/>
                        <span>Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center text-gray-700 cursor-not-allowed">
                        {/* <FaCreditCard size="20" className="mr-1"/>
                        <span>Demo</span> */}
                      </span>
                    )}
                    
                    {/* Placeholder para GitHub */}
                    {/* <span 
                      className="flex items-center justify-center text-secondary hover:text-electric-blue transition-colors cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SiGithub size="20" className="mr-1" />
                      <span>GitHub</span>
                    </span> */}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;