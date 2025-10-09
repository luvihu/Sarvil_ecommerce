import HeroImage from "../ui/HeroImage"

const Hero = () => {
  return (
     <section className="px-4 h-[calc(100vh-89.36px)] md:h-[calc(100vh-115px)] bg-gradient-to-br from-slate-50 to-gray-100 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0 sm:gap-2 md:gap-2 lg:gap-0 items-center">
        <div className="flex justify-center md:justify-start lg:justify-start h-56 sm:h-96 md:h-96 mt-8 mb-6 sm:mt-6 sm:mb-4 md:mt-10 lg:mt-12">
          <HeroImage />
        </div>

        {/* Texto */}
        <div className="lg:text-left space-y-2 mb-4 md:mb-8 lg:mb-8 h-56 sm:h-96 md:h-96 lg:h-96 flex flex-col justify-center items-center">
          <div className="text-center mb-2 mt-6 sm:mb-4 md:mb-4 lg:mb-8 sm:mt-12 md:mt-16 lg:mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-almost-black">
            <span className="leading-snug">
              Diseño creativo, web adaptable, <span className="text-electric-blue leading-snug">ventas reales</span>
            </span>
          </div>
          <p className="text-base md:text-xl lg:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 pl-3 pr-3 pb-3 md:p-0 lg:p-0 text-justify">
            Servicios profesionales de diseño UI/UX, desarrollo web y móvil, y aseguramiento de calidad de software (QA).
          </p>
          <div className="flex justify-center ">
            <button className="px-5 py-3 mt-2 sm:mt-6 md:mt-8 lg:mt-8 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors shadow-md font-medium">
                Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};
export default Hero