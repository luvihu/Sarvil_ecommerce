import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
  } from 'react-icons/fa';

const SiderSocial = () => { 
  const socials = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: <FaFacebook size={22} />,
    color: 'text-[#1877F2]'
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram size={22} />,
    color: 'text-[#E1306C]'
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <FaTwitter size={22} />,
    color: 'text-[#1DA1F2]'
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedin size={22} />,
    color: 'text-[#0A66C2]'
  },
  ];
 
  return (
     <div className="fixed left-4 top-60 z-40 hidden md:flex">
      <div className="flex flex-col space-y-10 p-1 bg-cyan-100/20 backdrop-blur-md border rounded-2xl shadow-lg shadow-black/20">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} hover:scale-110 transition-transform duration-200 ease-in-out`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
export default SiderSocial;

