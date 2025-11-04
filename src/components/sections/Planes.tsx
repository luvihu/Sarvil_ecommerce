import { motion, type Variants } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { allPlans } from '../../redux/actions/plans/allPlans';
import type { AppDispatch, RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import ContactModal from '../modals/ContactModal';

export interface PlanInter {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  priceRange: string;
};

const Planes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    dispatch(allPlans());
  }, [dispatch]);

  const plans = useSelector((state: RootState) => state.plan.plans);
   if (!plans || plans.length === 0) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Cargando planes...</p>
        </div>
      </section>
    )
  }

  const planColors = [
    "border-electric-blue",
    "border-cyan-cyan", 
    "border-blue-ul"
  ]

  const planIcons = ["🚀", "💎", "⚡"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };
 
  const handleModal = (planName: string) => {
    setSelectedPlanName(planName);
    setIsModalOpen(true);
  };
  
  return (
     <section id='servicios' className="py-10 sm:py-18 md:py-20 lg:py-26 px-8 bg-gradient-to-br from-cyan-100/15 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-almost-black mb-6 sm:mb-8 font-playfair">
            Nuestros <span className="text-electric-blue">Planes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto sm:text-base md:text-lg lg:text-xl">
            Elige el paquete que mejor se adapte a tus necesidades o contáctanos para un plan personalizado.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={item}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Efecto de fondo gradiente en hover - CON PUNTERO DE EVENTOS DESHABILITADO */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
              
               <motion.div
                animate={{ 
                  y: hoveredCard === index ? -5 : 0,
                  scale: hoveredCard === index ? 1.1 : 1
                }}
                className="absolute top-6 right-6 text-3xl pointer-events-none"
              >
                {planIcons[index % planIcons.length]}
              </motion.div>

              <div className="p-6 relative flex flex-col h-full z-10">
                {/* Badge del plan */}
                <div className="mb-4">
                  <span className={`inline-block bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm font-medium border ${planColors[index % planColors.length]}`}>
                    Plan {index + 1}
                  </span>
                </div>

                <div className="mb-5 flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-blue-950 font-roboto group-hover:text-electric-blue transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-xs md:text-sm text-blue-nav mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-6 space-y-3 flex-grow">
                  {plan.deliverables.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                      <span className="text-electric-blue mr-3 mt-1">•</span>
                      <span className="text-gray-900 text-sm md:text-base leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-200 space-y-4">
                  {/* <p className="font-semibold text-sm md:text-base text-almost-black group-hover:text-electric-blue transition-colors">
                    {plan.priceRange}
                  </p> */}
                  <motion.button 
                    onClick={() => handleModal(plan.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-electric-blue to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 relative z-20"
                  >
                    <span>Consulta personalizada</span>
                    <motion.span
                      animate={{ x: hoveredCard === index ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>

              {/* Borde animado en hover - CON PUNTERO DE EVENTOS DESHABILITADO */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 ${planColors[index % planColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
      {selectedPlanName && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPlan={selectedPlanName}
        />
      )}
    </section>
  );
};

export default Planes;