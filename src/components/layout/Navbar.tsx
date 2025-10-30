import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Cambia el estado cuando el scroll sea mayor a 50px
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Portafolio', id: 'portafolio' },
    { name: 'Contacto', id: 'contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-auto bg-blue-nav2 px-4 text-light-gray z-50 shadow-md left-0 right-0 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-3'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo con transición suave */}
        <div>
          <a href="/" className="block transition-all duration-300">
            <img
              src={'/assets/sarvil3602.png'}
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'w-32 sm:w-40 md:w-48 lg:w-52' : 'w-40 sm:w-48 md:w-60 lg:w-60'
              }`}
            />
          </a>
        </div>

        {/* Menú de escritorio */}
        <ul className={`hidden md:flex space-x-8 transition-all duration-300 ${
          isScrolled ? 'text-base' : 'text-xl'
        }`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="hover:text-cyan-200 transition-colors font-medium py-2 block"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-cyan-200 flex-wrap focus:outline-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>☰</span>
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-nav2 border-t border-cyan-900/30">
          <ul className={`container mx-auto px-4 flex flex-col space-y-3 transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className="block py-1 text-sm sm:text-base hover:text-cyan-200 transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;