import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const qaServices = [
  {
    title: "Pruebas Funcionales",
    subtitle: "UI y APIs",
    description: "Pruebas de software que se centran en verificar que cada función o característica de una aplicación opera según lo especificado en los requisitos del negocio y del usuario.",
    image: "/assets/funtion.jpeg",
    icon: "🧪",
    features: ["Testing de UI", "APIs REST", "Flujos completos"],
    color: "from-electric-blue/70 to-cyan-300"
  },
  {
    title: "Pruebas de Rendimiento",
    subtitle: "Carga y Estrés",
    description: "Pruebas de software no funcionales cuyo objetivo es evaluar la velocidad, estabilidad y escalabilidad de una aplicación o sistema bajo una carga de trabajo específica o variable.",
    image: "/assets/estres.jpeg",
    icon: "⚡",
    features: ["Pruebas de carga", "Análisis de estrés", "Optimización"],
    color: "from-electric-blue/70 to-cyan-300"
  },
  {
    title: "Automatización",
    subtitle: "API, UI, Mobile",
    description: "Proceso de utilizar software especializado y scripts de código para ejecutar casos de prueba en una aplicación, validar los resultados y generar informes, todo ello sin la intervención humana directa.",
    image: "/assets/auto.jpeg",
    icon: "🤖",
    features: ["Scripts automatizados", "Multi-plataforma", "CI/CD Integration"],
    color: "from-electric-blue/70 to-cyan-300"
  },
];

const QaServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % qaServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 via-cyan-50/20 to-blue-50/30" id="qa-services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-r from-cyan-200 to-electric-blue/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <span className="text-3xl">🔍</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-almost-black mb-4 font-playfair">
            Servicios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-electric-blue">QA</span>
          </h2>
          
        </motion.div>

        {/* Carrusel Principal */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
           {/* Mini Preview de Slides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-12 max-w-5xl mx-auto pl-6 pb-6"
        >
          {qaServices.map((service, index) => (
            <motion.button
              key={service.title}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-cyan-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.subtitle}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
          {/* Contenedor del Carrusel */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            {qaServices.map((service, index) => (
              <motion.div
                key={service.title}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                  index === activeIndex ? 'z-20' : 'z-10 opacity-0'
                }`}
                initial={false}
                animate={{
                  scale: index === activeIndex ? 1 : 0.9,
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : (index > activeIndex ? 100 : -100)
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Tarjeta Principal */}
                <div className="bg-light-gray/30 rounded-3xl shadow-2xl h-full overflow-hidden border border-gray-100">
                  {/* Header con Gradiente */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 text-4xl opacity-20">
                      {service.icon}
                    </div>
                    <div className="relative z-10 pl-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-2"
                      >
                        <span className="text-2xl">{service.icon}</span>
                        <h3 className="text-xl md:text-2xl font-bold font-playfair">
                          {service.title}
                        </h3>
                        <span className="text-lg opacity-90 font-light">{service.subtitle}</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-700 text-lg leading-relaxed text-center"
                      >
                        {service.description}
                      </motion.p>
                  </div>
                  </div>

                  {/* Imagen Centrada */}
                  <div className="relative h-[420px] mx-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

       {/* Llamada a la acción adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-5 shadow-lg border border-cyan-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para diseñar una estrategia de QA adaptada específicamente a tu proyecto.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-electric-blue text-white cursor-auto font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              Consultoría Gratuita
              <div className='flex pt-1'>
                <FaPhoneAlt className=" mr-3" />
                  <span>(+51) 998 826 388</span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QaServicesSection;

