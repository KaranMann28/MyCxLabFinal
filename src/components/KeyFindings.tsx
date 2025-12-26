import { motion } from 'framer-motion';
import { summaryStats } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import './KeyFindings.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

export function KeyFindings() {
  const { t } = useLanguage();
  
  const findings = [
    {
      value: summaryStats.currentAiTouchedPct,
      label: t('keyFindings.industryAiRate'),
      subtext: t('keyFindings.shareOfSupport'),
    },
    {
      value: summaryStats.growthMultiple,
      label: t('keyFindings.growth24Months'),
      subtext: t('keyFindings.industryAcceleration'),
    },
    {
      value: summaryStats.totalInteractions,
      label: t('keyFindings.sampleSize'),
      subtext: summaryStats.timeframe,
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
          <h2 className="key-findings__title">{t('keyFindings.title')}</h2>
          <p className="key-findings__subtitle">
            {t('keyFindings.subtitle')}
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
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="finding-card__value"
                variants={numberVariants}
              >
                {finding.value}
              </motion.div>
              <div className="finding-card__label">{finding.label}</div>
              <div className="finding-card__subtext">{finding.subtext}</div>
              
              {/* Decorative accent */}
              <motion.div 
                className="finding-card__accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
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
          {t('keyFindings.contextNote')} 
          <a href="#methodology"> {t('keyFindings.viewMethodology')}</a>
        </motion.p>
      </div>
    </motion.section>
  );
}
