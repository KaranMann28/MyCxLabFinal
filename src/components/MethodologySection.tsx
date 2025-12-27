import { motion } from 'framer-motion';
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
            anonymized data from across the online retail sector. We believe AI will never 
            replace human connection—but smarter automation frees your team to focus on 
            conversations that matter most.
          </p>
        </motion.header>
        
        <div className="methodology__content">
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Data Source</h3>
            <p className="methodology__section-text">
              Our dataset is built from aggregated, anonymized customer support interactions 
              and GMV data across ecommerce brands. Data points represent actual customer-brand 
              communications and purchasing behavior—not survey responses or self-reported metrics. 
              This approach eliminates recall bias and provides real-time visibility into the 
              relationship between support quality and revenue outcomes.
            </p>
          </motion.div>
          
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">Scale & Coverage</h3>
            <p className="methodology__section-text">
              The analysis encompasses <strong>$3.4B in GMV</strong> and <strong>284M support interactions</strong> from 
              online merchants spanning January–December 2025. This provides sufficient statistical 
              power to identify meaningful correlations between AI-assisted support and revenue 
              influence, while maintaining individual brand anonymity.
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
                <strong>AI-Influenced Revenue</strong>
                <span>Revenue from transactions where AI engaged the customer within the support journey before purchase. Totaling $57.4M across the dataset, this measures AI's role as a revenue driver—not just a cost center.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>AI Influence Rate</strong>
                <span>Percentage of GMV touched by AI-assisted support interactions. Peaked at 2.3% during June–July 2025, with interesting dips during high-intent shopping moments like Black Friday.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>The CSAT Gap</strong>
                <span>The persistent 0.70-point difference between human agent satisfaction (~4.48/5) and fully automated AI resolution (~3.77/5). This gap hasn't meaningfully closed despite automation improvements.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>AI Share of Tickets</strong>
                <span>Percentage of total support volume handled by AI. Grew from 16% to 27% over 11 months—a 67% increase in AI ticket handling without corresponding improvement in satisfaction scores.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Handover Rate</strong>
                <span>Percentage of AI-initiated tickets requiring human escalation. Dropped from 67% to 51%, indicating AI is getting better at completing interactions independently—even if customer ratings remain lower.</span>
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
                <strong>Correlation, not causation:</strong> We describe directional trends and 
                correlations between AI involvement and revenue outcomes. Direct attribution requires 
                controlled experiments we don't perform at scale.
              </li>
              <li>
                <strong>The human factor:</strong> AI will never replace human connection in customer 
                service. The satisfaction gap isn't a technology problem to "solve"—it's a signal 
                about where human empathy remains irreplaceable.
              </li>
              <li>
                <strong>Selection bias:</strong> Brands using digital support platforms may skew 
                toward more tech-forward operations, potentially overstating industry-wide adoption 
                rates for the broader ecommerce market.
              </li>
              <li>
                <strong>December partial data:</strong> CSAT data for December 2025 is incomplete. 
                Handover rates are available, but satisfaction scores are excluded from that month's 
                analysis.
              </li>
            </ul>
          </motion.div>
          
          <motion.div className="methodology__section" variants={itemVariants}>
            <h3 className="methodology__section-title">What This Means for Merchants</h3>
            <p className="methodology__section-text">
              The data suggests a clear strategic direction: use AI for efficiency and scale, 
              but preserve human capacity for conversations where empathy matters. The goal 
              isn't maximum automation—it's optimal customer experience at sustainable cost. 
              The brands seeing the best outcomes aren't trying to close the satisfaction gap; 
              they're designing around it.
            </p>
          </motion.div>
        </div>
        
        <motion.footer 
          className="methodology__footer"
          variants={itemVariants}
        >
          <p>
            This research is updated quarterly. Last update: <strong>December 2025</strong>
          </p>
          <p className="methodology__footer-note">
            Questions about our methodology? <a href="mailto:cxlab@gorgias.com">Contact the research team</a>
          </p>
        </motion.footer>
      </div>
    </motion.section>
  );
}
