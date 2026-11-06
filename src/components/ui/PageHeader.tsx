import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  contentWidth?: 'wide' | 'narrow';
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, contentWidth = 'wide', children }: PageHeaderProps) {
  return (
    <div className="pt-18 xl:pt-20 mb-4 sm:mb-6">
      <div className="bg-sea-100">
        <div className={`pt-8 pb-4 sm:pb-6 px-4 sm:px-6 mx-auto ${contentWidth === 'narrow' ? 'max-w-4xl' : 'max-w-7xl'}`}>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-midnight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="mt-3 text-lg text-midnight/65 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="mt-3"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
