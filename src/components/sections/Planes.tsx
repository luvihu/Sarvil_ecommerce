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
     <section id='servicios' className="py-10 sm:py-18 md:py-20 lg:py-24 px-8 bg-cyan-100/15">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-almost-black mb-4 font-playfair">
            Nuestros <span className="text-electric-blue">Planes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto sm:text-base md:text-lg lg:text-xl">
            Elige el paquete que mejor se adapte a tus necesidades y presupuesto.
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
              className={`border-l-4 ${planColors[index % planColors.length]} rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50 p-6 flex flex-col h-full`}
            >
              <div className="mb-5">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-blue-950 font-roboto">
                  {plan.name}
                </h3>
                <p className="text-xs md:text-sm text-blue-nav mt-1">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-6 space-y-2 flex-grow">
                {plan.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-electric-blue mr-2">•</span>
                    <span className="text-gray-900 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-200 space-y-3">
                <p className="font-semibold text-sm md:text-base text-almost-black">
                  {plan.priceRange}
                </p>
                <button 
                onClick={() => handleModal(plan.name)}
                className="w-full py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Cotizar
                </button>
              </div>
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