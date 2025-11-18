import { motion, type Variants } from 'framer-motion';
import HeroImage from "../ui/HeroImage";
import WaveBackground from "../fondos/WaveBackground";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative px-3 py-4 sm:py-6 sm:mb-4 ml-[-18px] md:ml-0 overflow-hidden">
      <WaveBackground />
            
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0 sm:gap-2 md:gap-0 lg:gap-4 items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center md:justify-start lg:justify-start h-72 sm:h-80 md:h-[430px] lg:h-[450px] mb-0 mt-4 sm:mt-0 md:mt-16 lg:mt-24 sm:mb-4">
          <motion.div variants={imageVariants}>
            <HeroImage />
          </motion.div>
        </div>

        <div className=" sm:text-left sm:mt-8 space-y-2 pr-4 mb-8 md:mb-8 lg:mb-8 sm:h-96 md:h-[430px] lg:h-[450px] flex flex-col justify-center items-center">
          <motion.div 
            className="text-center sm:text-left mb-4 pl-6 sm:pl-4 lg:pl-8 pr-2 sm:mb-6 md:mb-4 lg:mb-8 sm:mt-16 md:mt-16 lg:mt-18 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-blue-950"
            variants={itemVariants}
          >
            <span className="leading-snug">
              Diseño creativo, desarrollo web adaptable y {" "}
              <motion.span 
                className="text-electric-blue leading-snug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                resultados reales
              </motion.span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-base md:text-xl lg:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 pl-9 sm:pl-6 lg:pl-7 pr-3 pb-3 md:p-0 lg:p-0 text-justify"
            variants={itemVariants}
          >
            {/* Transformo ideas en experiencias digitales que conectan y venden. */}
            Transformamos tu idea de negocio en una máquina de ventas digital. 
          </motion.p>
          
           <motion.div 
            className="flex flex-col justify-center items-center pt-2 sm:pt-6"
            variants={itemVariants}
          >
            <span className="text-[#0437a5] text-xs md:text-sm lg:text-base mb-1">Cotiza tu Web Ahora ↓</span>
             <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-electric-blue text-white cursor-auto font-bold px-4 py-2 sm:px-7 sm:text-base md:text-lg rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className='flex items-center justify-center'>
                <FaPhoneAlt className=" mr-3" />
                  <span> 998 826 388</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;