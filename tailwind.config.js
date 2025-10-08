module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#2563EB',
        'cyan-cyan': '#06B6D4',
        'light-gray': '#D1D5DB',
        'almost-black': '#0F172A',
        'blue-nav':'#1E3A8A',
        'blue-ul':'#3B82F6',
        'blue-nav2':'#0A192F'
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}