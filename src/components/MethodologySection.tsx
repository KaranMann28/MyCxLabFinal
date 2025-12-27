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
            replace human connection, but smarter automation frees your team to focus on 
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
              The analysis encompasses support interactions and GMV data from online merchants 
              spanning 2024–2025. Monthly ticket volume ranged from 22M to 33M tickets, with 
              aggregate GMV scaling significantly over the analysis period. This provides 
              sufficient statistical power to identify directional trends in efficiency and 
              satisfaction, while maintaining individual brand anonymity.
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
                <strong>Monthly Ticket Evolution</strong>
                <span>Support volume declined from around 33M tickets per month in 2024 to 22M in 2025, a 33% reduction. This measures operational efficiency gains, not declining customer engagement.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Revenue Influence Rate</strong>
                <span>Percentage of GMV influenced by support interactions. Grew from 0.26% to 1.84%, roughly 7x more influence. Measures how support drives purchasing decisions, not just resolves issues.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>AI Ticket Share</strong>
                <span>Percentage of support volume handled by AI. Increased from around 33% to 50%, a 50% increase in automation adoption across the industry.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>The CSAT Gap</strong>
                <span>The persistent 0.8-point difference between human agent satisfaction (4.5 out of 5) and AI-handled interactions (3.7 out of 5). This gap has remained flat despite rapid automation expansion.</span>
              </motion.div>
              <motion.div 
                className="methodology__definition"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>AI Success Rate</strong>
                <span>Percentage of AI-handled tickets resolved without escalation. Fluctuated between 35% and 44%, highlighting the mismatch between automation coverage and automation effectiveness.</span>
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
            <h3 className="methodology__section-title">Limitations and Considerations</h3>
            <ul className="methodology__limitations">
              <li>
                <strong>Correlation, not causation:</strong> We describe directional trends and 
                correlations between AI involvement and revenue outcomes. Direct attribution requires 
                controlled experiments we don't perform at scale.
              </li>
              <li>
                <strong>The human factor:</strong> AI will never replace human connection in customer 
                service. The satisfaction gap isn't a technology problem to "solve." It's a signal 
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
              Two strategic imperatives emerge from this data. First, optimize for efficiency: 
              the growth playbook is shifting from "handle more tickets" to "make every ticket count." 
              Support is becoming a revenue driver, not just a cost center. Second, understand the 
              trade-off: automation reduces operational costs but doesn't inherently improve 
              customer satisfaction. The winning strategy isn't replacing humans—it's using AI 
              to amplify what humans do best.
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
