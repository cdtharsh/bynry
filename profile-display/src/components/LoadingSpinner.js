// src/components/LoadingSpinner.js
import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
};

const LoadingSpinner = () => (
  <motion.div
    variants={spinnerVariants}
    animate="animate"
    style={{
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderTop: '4px solid #007bff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      margin: '20px auto',
    }}
  />
);

export default LoadingSpinner;
