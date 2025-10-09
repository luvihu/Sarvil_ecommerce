import { motion, type Variants } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { selectPlan } from '../../redux/actions';
import type { AppDispatch } from '../../redux/store';

export interface Plan {
  name: string;
  description: string;
  deliverables: string[];
  price: string;
  accentColor: string;
};

const Planes = () => {
  const dispatch = useDispatch<AppDispatch>();

  const plans: Plan[] = [
    {
      name: "Landing Express",
      description: "Paquete de entrada ideal para emprendedores",
      deliverables: [
        "1 página responsiva",
        "Formulario + enlace a WhatsApp",
        "1 sección catálogo",
        "Hosting básico",
        "1 revisión"
      ],
      price: "Desde S/120 – S/350",
      accentColor: "border-electric-blue"
    },
    {
      name: "Catálogo / Tienda Básica",
      description: "Para negocios que venden productos",
      deliverables: [
        "Catálogo de productos",
        "Carrito ligero con MercadoPago/Yape",
        "Panel CMS",
        "2 revisiones"
      ],
      price: "S/400 – S/1,200",
      accentColor: "border-cyan-cyan"
    },
    {
      name: "Automatización & Chatbot",
      description: "Flujos inteligentes para tu negocio",
      deliverables: [
        "Integración redes → CRM",
        "Respuestas automáticas en WhatsApp/IG",
        "Triggers para pedidos y notificaciones",
        "1 automatización compleja (ej. form → WhatsApp + Sheets)"
      ],
      price: "Configuración S/150–S/500",
      accentColor: "border-blue-ul"
    }
  ];

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

  const handleQuote = (planName: string) => {
    dispatch(selectPlan(planName));
    // Opcional: redirigir a formulario de contacto
    window.location.href = '/contacto#cotizacion';
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-almost-black mb-4">
            Nuestros <span className="text-electric-blue">Planes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a tus necesidades y presupuesto.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-10"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`border-l-4 ${plan.accentColor} rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50 p-6 flex flex-col h-full`}
            >
              <div className="mb-5">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-almost-black">{plan.name}</h3>
                <p className="text-xs md:text-sm text-blue-nav mt-1">{plan.description}</p>
              </div>

              <ul className="mb-6 space-y-2 flex-grow">
                {plan.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-electric-blue mr-2">•</span>
                    <span className="text-gray-900 text-sm sm:text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-200 space-y-3">
                <p className="font-semibold text-sm md:text-base lg:text-lg text-almost-black">{plan.price}</p>
                <button
                  onClick={() => handleQuote(plan.name)}
                  className="w-full py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-colors md:font-medium"
                >
                  Cotizar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Planes;