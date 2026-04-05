'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function NebulaPulse() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => setShow(false), 1200); // adjust timing
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={pathname}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 50, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700 via-pink-600 to-blue-500" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NebulaPulse;
