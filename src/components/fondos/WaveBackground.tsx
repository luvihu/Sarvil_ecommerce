import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden ">
      {/* Capa base vintage */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(254,252,232,0.3),rgba(255,255,255,0.8))]" />
      
      {/* Textura de papel vintage sutil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230F172A' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ondas animadas - Capa 1 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        animate={{
          x: ['0%', '-100%', '-200%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <svg
          className="w-[300%] h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="shape-fill"
            fill="rgba(37, 99, 235, 0.08)"
          />
        </svg>
      </motion.div>

      {/* Ondas animadas - Capa 2 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        animate={{
          x: ['100%', '0%', '-200%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <svg
          className="w-[300%] h-40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="shape-fill"
            fill="rgba(6, 182, 212, 0.06)"
          />
        </svg>
      </motion.div>

      {/* Ondas animadas - Capa 3 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        animate={{
          x: ['200%', '100%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <svg
          className="w-[300%] h-36"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V8.73C31.33,26.64,67.33,39.33,105.35,43.69,170.67,51,234,33.33,297.33,26.67c63.33-6.67,126.67,0,190,8.67,63.33,8.67,126.67,21.33,190,26.67,63.33,5.33,126.67,2.67,190-5.33,63.33-8,126.67-21.33,190-26.67C946.67,26,1010,32,1073.33,43.69c63.33,11.67,126.67,29.33,190,34.67V0Z"
            className="shape-fill"
            fill="rgba(59, 130, 246, 0.04)"
          />
        </svg>
      </motion.div>

      {/* Partículas vintage flotantes */}
      {/* {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${3 + i * 1}px`,
            height: `${3 + i * 1}px`,
            left: `${5 + i * 9}%`,
            top: `${10 + i * 6}%`,
            backgroundColor: i % 3 === 0 
              ? 'rgba(37, 99, 235, 0.15)' 
              : i % 3 === 1
              ? 'rgba(6, 182, 212, 0.12)'
              : 'rgba(59, 130, 246, 0.1)',
          }}
          animate={{
            y: [0, 40, 0],
            opacity: [0.7, 0.7, 0.7],
          }}
          transition={{
            duration: 50 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))} */}

      {/* Efecto de desvanecimiento superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-50/80 to-transparent" />
    </div>
  );
};
export default WaveBackground;
