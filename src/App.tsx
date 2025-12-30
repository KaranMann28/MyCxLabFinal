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
                  subtitle="How Top Brands 7x Their Revenue Influence"
                  source="CX Lab Research, GMV and ticket volume analysis Jan to Dec 2025"
                  articleLink="https://www.gorgias.com/customers/orthofeet"
                  articleLabel="See how Orthofeet automated 56% of tickets →"
                  deepDiveSlug="efficiency-multiplier"
                  aiSummary="Leading ecommerce brands reduced support volume by 33% while scaling revenue dramatically. Support-influenced GMV grew from 0.26% to 1.84%, a 7x increase. Growth is no longer about handling more tickets. It's about making every ticket count."
                  fullAnalysis={`What the data shows: When we look at ticket volume alongside GMV and revenue influence, a clear pattern emerges. As monthly support tickets declined from around 33M to 22M (a 33% reduction), both GMV and the revenue impact of support interactions rose sharply. Revenue influenced by support grew from 0.26% to 1.84% of GMV, roughly 7x more influence.

What this means: The most successful brands are increasing the value of each interaction, rather than just scaling how many tickets they handle. Efficiency, not headcount, has become the modern growth lever.

Why this matters: With customer acquisition costs rising across ecommerce, operational efficiency is now a competitive advantage. The growth playbook is shifting from "handle more tickets" to "make every ticket count." Brands achieving this balance are seeing support transform from a cost center into a revenue driver.`}
                >
                  <AIRevenueInfluenceChart />
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
