import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// Fade In animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Stagger items
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Chart animation
export const chartReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1
    }
  }
};

// Number counter animation
export const numberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  }
};

// Card hover effect
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Button hover
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.15 }
};

export const buttonTap = {
  scale: 0.97
};

// Animated Section wrapper with scroll trigger
interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            delay
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

// Animated div wrapper
interface AnimatedDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export function AnimatedDiv({ children, className, variants = fadeInUp, ...props }: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container wrapper
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}

export function StaggerContainer({ children, className, slow = false, ...props }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={slow ? staggerContainerSlow : staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item wrapper
interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Animated Chart Container
interface AnimatedChartProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function AnimatedChart({ children, className, ...props }: AnimatedChartProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={chartReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Animated Number with counting effect
interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
    >
      {value}
    </motion.span>
  );
}

// Expand/Collapse animation
export const expandCollapse: Variants = {
  hidden: { 
    height: 0, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  visible: { 
    height: 'auto', 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

// Floating animation for hero elements
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// Pulse animation
export const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};


