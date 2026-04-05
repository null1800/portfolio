'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

function StairTransition() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-50 flex"
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
}

export default StairTransition;
