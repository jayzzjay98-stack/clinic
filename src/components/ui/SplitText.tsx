"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
  splitType?: 'chars' | 'words' | 'lines';
  from?: { opacity?: number; y?: number; rotateX?: number };
  to?: { opacity?: number; y?: number; rotateX?: number };
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Split text based on splitType
  const splitItems = splitType === 'chars'
    ? text.split('')
    : splitType === 'words'
      ? text.split(' ')
      : [text];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: from.opacity ?? 0,
      y: from.y ?? 40,
      rotateX: from.rotateX ?? 0
    },
    visible: {
      opacity: to.opacity ?? 1,
      y: to.y ?? 0,
      rotateX: to.rotateX ?? 0,
      transition: {
        duration,
        ease
      }
    }
  };

  const style: React.CSSProperties = {
    textAlign,
    display: 'inline-block',
    perspective: '1000px'
  };

  return (
    <div ref={ref} style={style} className={className}>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        onAnimationComplete={() => {
          if (isInView && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }}
        style={{ display: 'inline-block' }}
      >
        {splitItems.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            style={{
              display: 'inline-block',
              transformStyle: 'preserve-3d',
              whiteSpace: item === ' ' ? 'pre' : 'normal'
            }}
          >
            {item === ' ' ? '\u00A0' : item}
            {splitType === 'words' && index < splitItems.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default SplitText;
