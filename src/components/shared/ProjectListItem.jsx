import React from 'react';
import { motion } from 'framer-motion';

const ProjectListItem = ({ imageUrl, title, description = "" }) => {
  return (
    <motion.div 
      className="relative aspect-[3/2] w-full overflow-hidden rounded"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.615, 0.19, 0.305, 0.91] }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="image-card"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.615, 0.19, 0.305, 0.91] }}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 p-4 text-white">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-sm opacity-80">{description}</p>}
      </div>
    </motion.div>
  );
};

export default ProjectListItem;