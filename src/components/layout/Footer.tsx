import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      href: 'https://www.facebook.com/profile.php?id=61576887365515',
      label: 'Facebook',
      icon: <FaFacebook size={18} />,
      color: 'text-[#1877F2]'
    },
    {
      href: 'https://www.instagram.com/sv360_solutions/',
      label: 'Instagram',
      icon: <FaInstagram size={18} />,
      color: 'text-[#E1306C]'
    },
    {
      href: '/',
      label: 'Twitter',
      icon: <FaTwitter size={18} />,
      color: 'text-[#1DA1F2]'
    },
    {
      href: 'https://www.linkedin.com/in/lucyvillogas/',
      label: 'LinkedIn',
      icon: <FaLinkedin size={18} />,
      color: 'text-[#0A66C2]'
    },
  ];
  const footerItems = [
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Portafolio', id: 'portafolio' }
    
  ];

  return (
    <footer id='contacto' className="bg-blue-nav2 text-light-gray py-10 md:py-12 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
           <div className="lg:col-span-1">
            <a href="/" className="block mb-4">
              <img
                src="/assets/sarvil3602.png"
                alt="Sarvil 360°"
                className="w-32 sm:w-40 md:w-48"
              />
            </a>
            <p className="text-sm text-gray-300 leading-relaxed">
              Diseño web y soluciones digitales con enfoque en resultados reales para tu negocio.
            </p>
          </div>

          <div className="md:ml-5 lg:ml-10">
            <h3 className=" md:text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm hover:text-cyan-cyan transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="md:text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                'Diseño Web',
                'Tiendas Virtuales',
                'Landing Pages',
                'Automatización',
                'Mantenimiento'
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:flex md:flex lg:flex-col sm:gap-20 md:gap-36 lg:gap-0">
              <div className="md:flex-col">
                <h3 className="md:text-lg font-semibold text-white mb-4">Síguenos</h3>
                <div className="flex space-x-4 mb-6">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-110 transition-transform duration-200 ease-in-out block`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:flex-col">
                <h3 className="md:text-lg font-semibold text-white mb-2">Contacto</h3>
                <address className="not-italic text-sm text-gray-300 space-y-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <FaPhoneAlt className="text-gray-300" />
                    <span className="truncate min-w-0">+51 998 826 388</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <FaEnvelope className="text-gray-300" />
                    <span className="truncate min-w-0">sarvil360solutions@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <FaMapMarkerAlt className="text-gray-300" />
                    <span className="">Ate Vitarte, Lima, Perú</span>
                  </div>
                </address>
              </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © {currentYear} - Sarvil 360° solutions. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Hecho con ❤️ y código limpio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;