'use client'
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
      <div className="flex space-x-4">
        <motion.a
          href="https://www.instagram.com/_al8e_rodie_"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-pink-500 hover:text-pink-600 transition-all duration-200"
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram size={30} />
        </motion.a>

        <motion.a
          href="https://www.youtube.com/@alexandrastoica5744"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 text-5xl"
          whileHover={{
            scale: 1.2,
            rotate: 20,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaYoutube size={30} />
        </motion.a>

        <motion.a
          href="https://www.facebook.com/share/14s2imFLaB/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-all duration-200"
          whileHover={{
            scale: 1.3,
            y: -10,
            rotate: -30,
            transition: { duration: 0.4 },
          }}
          whileTap={{
            scale: 0.9,
            y: 0,
            transition: { duration: 0.2 },
          }}
        >
          <FaFacebook size={30} />
        </motion.a>
      </div>
  );
};

export default SocialMediaIcons;
