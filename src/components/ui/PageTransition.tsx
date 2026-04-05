'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';

function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        />
      </AnimatePresence>

      {/* Page Content */}
      {children}
    </>
  );
}

export default PageTransition;
