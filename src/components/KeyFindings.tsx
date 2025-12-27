import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './KeyFindings.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.3, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 150,
      damping: 12,
      delay: 0.3
    }
  }
};

const labelVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      delay: 0.4
    }
  }
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      delay: 0.5
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

export function KeyFindings() {
  useLanguage();
  
  const findings = [
    {
      value: '−33%',
      label: 'Ticket Volume',
      subtext: 'Fewer tickets, more impact',
      icon: '📉',
      color: '#22C55E',
    },
    {
      value: '7x',
      label: 'Revenue Influence',
      subtext: '0.26% to 1.84% of GMV',
      icon: '📈',
      color: '#E8826E',
    },
    {
      value: '~50%',
      label: 'AI Ticket Share',
      subtext: 'Rapid automation adoption',
      icon: '🤖',
      color: '#4B5EFC',
    },
    {
      value: '0.8 pts',
      label: 'The CSAT Gap',
      subtext: 'Human 4.5 vs AI 3.7',
      icon: '⚖️',
      color: '#F59E0B',
    },
  ];

  return (
    <motion.section 
      className="key-findings"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container">
        <motion.header 
          className="key-findings__header"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5 }
            }
          }}
        >
          <h2 className="key-findings__title">Two Trends Defining 2025</h2>
          <p className="key-findings__subtitle">
            The Efficiency Multiplier meets The AI Satisfaction Gap
          </p>
        </motion.header>
        
        <motion.div 
          className="key-findings__grid"
          variants={containerVariants}
        >
          {findings.map((finding, index) => (
            <motion.div 
              key={index} 
              className="finding-card"
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ perspective: 1000 }}
            >
              <motion.div 
                className="finding-card__icon"
                variants={iconVariants}
              >
                {finding.icon}
              </motion.div>
              
              <motion.div 
                className="finding-card__value"
                variants={numberVariants}
                style={{ color: finding.color }}
              >
                {finding.value}
              </motion.div>
              
              <motion.div 
                className="finding-card__label"
                variants={labelVariants}
              >
                {finding.label}
              </motion.div>
              
              <motion.div 
                className="finding-card__subtext"
                variants={subtextVariants}
              >
                {finding.subtext}
              </motion.div>
              
              {/* Decorative accent */}
              <motion.div 
                className="finding-card__accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: `linear-gradient(90deg, ${finding.color} 0%, transparent 100%)` }}
              />
              
              {/* Floating particle effect */}
              <motion.div 
                className="finding-card__particle"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                style={{ background: finding.color }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Industry context note */}
        <motion.p 
          className="key-findings__context"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          The growth playbook is shifting from "handle more tickets" to "make every ticket count." 
          But more automation doesn't automatically mean better customer experience.
          <a href="#methodology"> View our methodology</a>
        </motion.p>
      </div>
    </motion.section>
  );
}
