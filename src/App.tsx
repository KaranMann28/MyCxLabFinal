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
  AIQualityFlywheelChart,
  AutomationMixChart,
} from './components';
import { summaryStats } from './data/mockData';
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

                {/* Finding 2: The Quality Flywheel */}
                <InsightCard
                  title="The Quality Flywheel"
                  subtitle="AI Quality Improved 8 Points Industry-Wide"
                  source="CX Lab Research, AI Agent quality ratings Aug to Dec 2025"
                  articleLink="https://www.gorgias.com/customers/vessel"
                  articleLabel="See how VESSEL achieved 98% automation accuracy →"
                  deepDiveSlug="quality-flywheel"
                  aiSummary="Industry-wide AI quality rate improved from 77% to 85% as AI capabilities matured. The technology is no longer experimental. Brands investing in AI training today can build on this proven foundation."
                  fullAnalysis={`What the data shows: The industry-wide AI quality rate has climbed from 77% to 85% over five months. This 8-point improvement reflects maturing AI capabilities across the platform. Good ratings have doubled during this period.

What this means: AI technology is no longer experimental—it's proven. The improvement comes from a combination of platform enhancements and the natural learning curve as AI handles more interactions. Brands that invest in knowledge base optimization can amplify these gains further.

Why this matters: The 77% → 85% trajectory shows AI quality is improving industry-wide. This is the foundation early adopters are building on. The flywheel effect—where better AI enables more investment, which enables better AI—rewards brands who start now rather than waiting for "perfect" AI.`}
                >
                  <AIQualityFlywheelChart />
                </InsightCard>

                {/* Finding 3: Industry AI Adoption Index - Visible by default per feedback */}
                <InsightCard
                  title="Ecommerce AI Index"
                  subtitle="Industry Adoption Rate"
                  source={`CX Lab Research, ${summaryStats.totalInteractions} support interactions analyzed`}
                  articleLink="https://www.gorgias.com/customers"
                  articleLabel="See how leading brands use AI-powered CX →"
                  deepDiveSlug="ai-index"
                  aiSummary={`The ecommerce industry is undergoing a structural shift in customer service. AI involvement in support tickets has grown from near-zero to ${summaryStats.currentAiTouchedPct} in under two years, signaling that AI-assisted support is becoming the industry standard, not an exception.`}
                  fullAnalysis={`The Trend: Across the ecommerce sector, AI is rapidly becoming embedded in customer support operations. Our analysis of ${summaryStats.totalInteractions} support interactions shows AI involvement growing from virtually nothing in early 2024 to ${summaryStats.currentAiTouchedPct} by late 2025, a ${summaryStats.growthMultiple} increase.

The Nuance: Full automation remains limited at ${summaryStats.currentNoHumanPct}. The dominant model emerging across the industry is "AI-assisted human support" where AI handles triage, drafts responses, or gathers information, but humans make final decisions. This hybrid approach is becoming the operational standard for competitive ecommerce brands.

What This Means for Merchants: Brands not investing in AI-assisted support risk falling behind on response times and operational efficiency. However, the data suggests the winning strategy isn't full automation. It's augmentation. The most successful implementations treat AI as a force multiplier for human agents, not a replacement.`}
                >
                  <AutomationMixChart />
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
