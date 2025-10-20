// src/components/layout/Navbar.tsx
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al hacer clic en un enlace (móvil)
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
    <nav className="w-auto bg-blue-nav2 px-4 text-light-gray z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <a href="/" className="block">
            <img
              src={'/assets/sarvil3602.png'}
              alt="Logo"
              className="w-40 sm:w-48 md:w-60 lg:w-60"
            />
          </a>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="hover:text-cyan-200 transition-colors md:text-base font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-cyan-cyan focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-nav2 border-t border-cyan-900/30">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className="block py-2 text-sm sm:text-base hover:text-cyan-200 transition-colors font-medium"
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