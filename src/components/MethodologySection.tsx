import { motion } from 'framer-motion';
import { summaryStats } from '../data/mockData';
import './MethodologySection.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export function MethodologySection() {
  return (
    <motion.section 
      id="methodology" 
      className="methodology"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="container container--narrow">
        <motion.header 
          className="methodology__header"
          variants={itemVariants}
        >
          <h2 className="methodology__title">Methodology</h2>
          <p className="methodology__intro">
            CX Lab measures trends in ecommerce customer experience using aggregated, 
            anonymized data from across the online retail sector. Our work builds on 
            behavioral transaction data rather than surveys, providing a more timely 
            and accurate measurement of industry trends.
          </p>
        </motion.header>
        
        <div className="methodology__content">
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Data Source</h3>
            <p className="methodology__section-text">
              Our dataset is built from aggregated, anonymized customer support interactions 
              across ecommerce brands. Data points represent actual customer-brand communications, 
              not survey responses or self-reported metrics. This approach eliminates recall bias 
              and provides real-time visibility into industry behavior patterns.
            </p>
          </motion.div>
          
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Scale & Coverage</h3>
            <p className="methodology__section-text">
              The analysis encompasses <strong>{summaryStats.totalInteractions} support interactions</strong> from 
              online merchants spanning a 24-month period ({summaryStats.timeframe}). This provides 
              sufficient statistical power to identify meaningful trends across merchant sizes, 
              verticals, and geographic regions while maintaining individual brand anonymity.
            </p>
          </motion.div>
          
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Key Metrics</h3>
            <div className="methodology__definitions">
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>AI-Assisted Rate</strong>
                <span>Percentage of tickets where AI played any role in the resolution process—from initial triage to response drafting. Calculated as a 3-month rolling average to smooth volatility.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Full Automation Rate</strong>
                <span>Percentage of tickets resolved entirely without human agent involvement. Represents the current "automation ceiling" for different inquiry types.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Meaningful Adoption</strong>
                <span>Merchants processing 50+ tickets monthly with 10%+ AI involvement. This threshold filters out trial usage and captures brands with operational AI integration.</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Data Processing</h3>
            <ul className="methodology__list">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Monthly aggregation with 3-month rolling averages for smoothing seasonal variation
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Minimum ticket thresholds to ensure statistical significance per data point
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Merchant-level deduplication before industry aggregation
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Exclusion of partial months and outlier detection for trend calculations
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="methodology__section methodology__section--limitations" 
            variants={itemVariants}
          >
            <h3 className="methodology__section-title">Limitations & Considerations</h3>
            <ul className="methodology__limitations">
              <li>
                <strong>Selection bias:</strong> Brands using digital support platforms may skew 
                toward more tech-forward operations, potentially overstating industry-wide AI adoption 
                rates for the broader ecommerce market.
              </li>
              <li>
                <strong>Channel coverage:</strong> This analysis focuses on digital support channels 
                (chat, email, social). Phone and in-person support interactions are not represented, 
                which may understate total support volume for some verticals.
              </li>
              <li>
                <strong>Definition sensitivity:</strong> "AI-assisted" includes any AI involvement, 
                from simple auto-responses to sophisticated intent classification. Capability depth 
                varies significantly across implementations.
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.footer 
          className="methodology__footer"
          variants={itemVariants}
        >
          <p>
            This research is updated quarterly. Last update: <strong>{summaryStats.lastUpdated}</strong>
          </p>
          <p className="methodology__footer-note">
            Questions about our methodology? <a href="mailto:cxlab@gorgias.com">Contact the research team</a>
          </p>
        </motion.footer>
      </div>
    </motion.section>
  );
}
