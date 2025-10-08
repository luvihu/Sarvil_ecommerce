import { useState, useEffect} from 'react';

const HeroImage = () => {

  const images = [
    '/assets/pcEcommerce.png',
    '/assets/browserRemov.png',
    '/assets/robotLapt.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] max-w-lg mx-auto items-center">
      <img
        src={images[currentIndex]}
        alt="Servicios de diseño y desarrollo"
        className="h-60 w-60 sm:h-72 sm:w-64 md:h-80 md:w-80 lg:h-80 lg:w-96 ml-4 object-contain transition-opacity duration-700 ease-in-out"
        loading="lazy"
      />
    </div>
  )
}
export default HeroImage;
