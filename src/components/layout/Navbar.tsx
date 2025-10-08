import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = ['Nosotros', 'Servicios', 'Portafolio', 'Contacto'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-nav2 text-light-gray z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <Link to="/" className="block">
            <img
              src={'/assets/sarvil3602.png'}
              alt="Logo"
              className="w-40 sm:w-48 md:w-64 lg:w-64" 
            />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-cyan-200 transition-colors text-lg font-medium"
              >
                {item}
              </Link>
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

      {/* Menú móvil (desplegable) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-nav2 border-t border-cyan-900/30">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block py-2 text-base sm:text-lg hover:text-cyan-200 transition-colors font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;