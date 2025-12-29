import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AISummaryModal } from './AISummaryModal';
import './InsightCard.css';

interface InsightCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  aiSummary: string;
  fullAnalysis: string;
  source?: string;
  articleLink?: string;
  articleLabel?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2
    }
  }
};

const expandVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
  },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { 
      duration: 0.3, 
      ease: 'easeInOut'
    }
  }
};

export function InsightCard({ 
  title,
  subtitle,
  children, 
  aiSummary,
  fullAnalysis,
  source = 'CX Lab Research, aggregated industry data',
  articleLink,
  articleLabel = 'Read the full insight',
}: InsightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Format full analysis with paragraph breaks
  const analysisParagraphs = fullAnalysis.split('\n\n').filter(p => p.trim());
  
  // Create data context for AI summary
  const dataContext = `${aiSummary}\n\nDetailed Analysis:\n${fullAnalysis}`;
  
  return (
    <motion.article 
      className="insight-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={cardVariants}
    >
      <div className="container">
        <motion.div 
          className="insight-card__chart-wrapper"
          variants={chartVariants}
        >
          {/* Header */}
          <header className="insight-card__header">
            <motion.h2 
              className="insight-card__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {title}: <span className="insight-card__title-accent">{subtitle}</span>
            </motion.h2>
          </header>
          
          {/* Chart */}
          <motion.div 
            className="insight-card__chart"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
          
          {/* AI Analysis - NESTED INSIDE the chart wrapper */}
          <div className="insight-card__nested-analysis">
            <div className="insight-card__ai-summary">
              <div className="insight-card__ai-header">
                <motion.div 
                  className="insight-card__ai-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <motion.span 
                    className="insight-card__ai-icon"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ✦
                  </motion.span>
                  Quick Take
                </motion.div>
                <motion.button 
                  className="insight-card__expand-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isExpanded ? '− Less' : '+ Read more'}
                </motion.button>
              </div>
              <p className="insight-card__ai-text">{aiSummary}</p>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="insight-card__full-analysis"
                  variants={expandVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="insight-card__analysis-content">
                    {analysisParagraphs.map((paragraph, index) => (
                      <p key={index} className="insight-card__analysis-text">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {articleLink && (
                    <motion.a
                      href={articleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="insight-card__article-link"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="insight-card__article-link-icon">→</span>
                      {articleLabel}
                    </motion.a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Source Footer */}
          <motion.footer 
            className="insight-card__source"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span>Source: {source}</span>
            <span className="insight-card__source-divider">•</span>
            <motion.button 
              className="insight-card__link insight-card__link--ai"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="insight-card__link-icon">✦</span>
              Generate AI Summary
            </motion.button>
            <span className="insight-card__source-divider">•</span>
            <motion.button 
              className="insight-card__link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get the data
            </motion.button>
            <span className="insight-card__source-divider">•</span>
            <motion.button 
              className="insight-card__link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Embed
            </motion.button>
          </motion.footer>
        </motion.div>
      </div>
      
      {/* AI Summary Modal */}
      <AISummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        chartTitle={title}
        chartSubtitle={subtitle}
        dataContext={dataContext}
      />
    </motion.article>
  );
}
