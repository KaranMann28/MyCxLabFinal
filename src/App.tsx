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
                {/* Finding 1: The Efficiency Multiplier */}
                <InsightCard
                  title="The Efficiency Multiplier"
                  subtitle="Less Volume, More Impact"
                  source="CX Lab Research, GMV and ticket volume analysis Jan–Dec 2025"
                  aiSummary="Leading ecommerce brands reduced support volume by 33% while scaling revenue dramatically. Support-influenced GMV grew from 0.26% to 1.84%—a 7× increase. Growth is no longer about handling more tickets. It's about making every ticket count."
                  fullAnalysis={`What the data shows: When analyzing ticket volume alongside GMV and revenue influence, a clear inverse relationship emerges. As monthly support tickets declined from ~33M to ~22M (a 33% reduction), both GMV and the revenue impact of support interactions rose sharply. Revenue influenced by support grew from 0.26% to 1.84% of GMV—approximately 7× more influence.

What this means: The most successful brands are increasing the value of each interaction, rather than scaling raw ticket-handling capacity. Efficiency, not headcount, has become the modern growth lever.

Why this matters: With customer acquisition costs rising across ecommerce, operational efficiency is now a competitive advantage. The growth playbook is shifting from "handle more tickets" to "make every ticket count." Brands achieving this balance are seeing support transform from a cost center into a revenue driver.`}
                >
                  <AIRevenueInfluenceChart />
                </InsightCard>
                
                {/* Finding 2: The AI Satisfaction Gap */}
                <InsightCard
                  title="The AI Satisfaction Gap"
                  subtitle="Scale ≠ Satisfaction"
                  source="CX Lab Research, CSAT comparison across human and AI channels"
                  aiSummary="AI now handles ~50% of support tickets, up from ~33%. But AI CSAT remains flat at 3.7/5, compared to 4.5/5 for human agents—a persistent 0.8-point gap. Technology scale does not automatically translate into better customer experience."
                  fullAnalysis={`What the data shows: AI involvement in support handling increased from approximately 33% to 50% of tickets—a 50% increase in adoption. Yet AI CSAT has remained flat at 3.7/5, while human agents consistently score 4.5/5. AI success rates have fluctuated between 44% and 35%, highlighting a growing mismatch between automation coverage and effectiveness.

What this means: The industry is optimizing primarily for cost efficiency, not customer experience. Automation coverage is increasing faster than automation effectiveness. While AI handles more volume, customers still prefer—and rate higher—human interactions.

Why this matters: Merchants investing heavily in AI must understand the trade-off. Automation reduces operational costs, but it does not inherently improve customer satisfaction. The data shows clearly that automation alone is not a guarantee of better CX. The winning strategy isn't replacing humans—it's using AI to amplify what humans do best.`}
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
