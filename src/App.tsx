import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  ScrollRevealLogo,
  KeyFindings,
  InsightCard,
  MethodologySection,
  SubscribeSection,
  Footer,
  ScrollToTop,
  AIRevenueInfluenceChart,
  AISatisfactionGapChart,
} from './components';
import { useLanguage } from './context/LanguageContext';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

const contentRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  }
};

function App() {
  // Language context available for future i18n implementation
  useLanguage();
  
  // Check if already unlocked from localStorage
  const [isUnlocked, setIsUnlocked] = useState(() => {
    const saved = localStorage.getItem('cx-lab-unlocked');
    return saved === 'true';
  });

  // Save unlock state to localStorage
  useEffect(() => {
    localStorage.setItem('cx-lab-unlocked', String(isUnlocked));
  }, [isUnlocked]);

  const handleUnlock = () => {
    setIsUnlocked(prev => !prev);
  };
  
  return (
    <motion.div 
      className="app"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <main className="main-content">
        <HeroSection />
        
        <ScrollRevealLogo isUnlocked={isUnlocked} onUnlock={handleUnlock} />
        
        <AnimatePresence>
          {isUnlocked ? (
            <motion.div
              key="unlocked-content"
              variants={contentRevealVariants}
              initial="hidden"
              animate="visible"
            >
              <KeyFindings />
              
              <section id="insights" className="insights-section">
                {/* CX Lab Index Chart 1: AI Revenue Influence vs GMV */}
                <InsightCard
                  title="AI Revenue Influence"
                  subtitle="The Efficiency Multiplier"
                  source="CX Lab Research, $3.4B GMV analyzed across 284M support interactions"
                  aiSummary="AI is quietly becoming a revenue driver. Across $3.4B in analyzed GMV, AI-influenced transactions generated $57.4M in revenue — with influence rates peaking at 2.3% during June-July 2025. But here's the interesting part: November's massive $1.1B GMV spike saw influence dip to 1.8%."
                  fullAnalysis={`The Trend: AI's role in driving revenue is becoming measurable. By tracking interactions where AI engaged customers before purchase, we can see the direct line from support automation to sales conversion. AI-influenced revenue grew from $78K in January to $20.7M in November 2025.

The Nuance: The data reveals a counterintuitive pattern. During Black Friday (November), when GMV peaked at $1.1B, AI influence rate actually decreased to 1.8%. This suggests AI provides more value during normal shopping periods when customers need guidance, not during high-intent moments like major sales events when purchase intent is already strong.

What This Means for Merchants: AI support isn't just about cost reduction—it's a revenue channel. Brands should optimize AI for discovery and decision-support moments rather than trying to maximize intervention during peak sales periods. The sweet spot appears to be helping uncertain customers, not interrupting committed buyers.`}
                >
                  <AIRevenueInfluenceChart />
                </InsightCard>
                
                {/* CX Lab Index Chart 2: The AI Satisfaction Gap */}
                <InsightCard
                  title="The AI Satisfaction Gap"
                  subtitle="Quality vs. Scale Trade-off"
                  source="CX Lab Research, 11-month CSAT comparison across human and AI channels"
                  aiSummary="Despite AI handling 67% more tickets by year-end, a persistent 0.70-point CSAT gap remains between human agents (avg 4.48) and fully automated AI (avg 3.77). The good news: automation is improving—handover rates dropped from 67% to 51%—but the quality gap hasn't closed."
                  fullAnalysis={`The Trend: The AI satisfaction gap is stubbornly persistent. Human agents maintain a steady CSAT around 4.48, while fully automated AI interactions hover around 3.77—a gap that hasn't meaningfully narrowed despite 11 months of AI advancement. Meanwhile, AI's share of tickets grew from 16% to 27%.

The Breakdown: The most telling metric is the handover rate evolution. In January, 67% of AI tickets required human handover. By November, that dropped to 51%. AI is getting better at completing interactions independently (49% fully automated vs. 33% initially), but customers rate those automated completions lower.

What This Means for Merchants: The data suggests a strategic choice: you can prioritize scale (let AI handle more) or quality (maintain CSAT). The merchants seeing best results aren't trying to close the gap—they're accepting it and designing around it. Use AI for volume and efficiency, but preserve human capacity for moments that matter to customer loyalty.`}
                >
                  <AISatisfactionGapChart />
                </InsightCard>
                
                {/* More Insights Link */}
                <motion.div 
                  className="more-insights-link-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/insights" className="more-insights-link">
                    <div className="more-insights-link__content">
                      <span className="more-insights-link__badge">Deep Dive</span>
                      <h3 className="more-insights-link__title">Explore More Industry Insights</h3>
                      <p className="more-insights-link__description">
                        Discover AI adoption trends, automation benchmarks, and operational patterns across the ecommerce industry.
                      </p>
                    </div>
                    <div className="more-insights-link__arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              </section>
              
              <SubscribeSection />
              
              <MethodologySection />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
      
      {/* Floating Chat Button */}
      <motion.a
        href="https://www.gorgias.com/demo-request"
        className="floating-chat"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat with us"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}

export default App;
