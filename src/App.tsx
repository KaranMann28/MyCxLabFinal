import { motion } from 'framer-motion';
import {
  HeroSection,
  KeyFindings,
  InsightCard,
  MethodologySection,
  SubscribeSection,
  Footer,
  ScrollToTop,
  AutomationMixChart,
  MerchantAdoptionChart,
  AutomationCeilingChart,
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

function App() {
  // Language context available for future i18n implementation
  useLanguage();
  
  return (
    <motion.div 
      className="app"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <main className="main-content">
        <HeroSection />
        
        <KeyFindings />
        
        <section id="insights" className="insights-section">
          {/* Chart 1: Industry AI Adoption Index */}
          <InsightCard
            title="Ecommerce AI Index"
            subtitle="Industry Adoption Rate"
            source={`CX Lab Research, ${summaryStats.totalInteractions} support interactions analyzed`}
            aiSummary={`The ecommerce industry is undergoing a structural shift in customer service. AI involvement in support tickets has grown from near-zero to ${summaryStats.currentAiTouchedPct} in under two years—signaling that AI-assisted support is becoming the industry standard, not an exception.`}
            fullAnalysis={`The Trend: Across the ecommerce sector, AI is rapidly becoming embedded in customer support operations. Our analysis of ${summaryStats.totalInteractions} support interactions shows AI involvement growing from virtually nothing in early 2024 to ${summaryStats.currentAiTouchedPct} by late 2025—a ${summaryStats.growthMultiple} increase.

The Nuance: Full automation remains limited at ${summaryStats.currentNoHumanPct}. The dominant model emerging across the industry is "AI-assisted human support"—where AI handles triage, drafts responses, or gathers information, but humans make final decisions. This hybrid approach is becoming the operational standard for competitive ecommerce brands.

What This Means for Merchants: Brands not investing in AI-assisted support risk falling behind on response times and operational efficiency. However, the data suggests the winning strategy isn't full automation—it's augmentation. The most successful implementations treat AI as a force multiplier for human agents, not a replacement.`}
          >
            <AutomationMixChart />
          </InsightCard>
          
          {/* Chart 2: Industry Adoption Momentum */}
          <InsightCard
            title="Adoption Momentum"
            subtitle="Once Brands Start, They Don't Stop"
            source="CX Lab Research, brands with meaningful AI deployment"
            aiSummary="A striking pattern is emerging: ecommerce brands that achieve meaningful AI deployment (50+ monthly tickets with 10%+ AI involvement) show zero churn from AI tools. This suggests AI in customer service has crossed a threshold from experiment to operational necessity."
            fullAnalysis={`The Trend: When we filter for "meaningful adoption"—brands processing at least 50 support tickets monthly with 10% or more AI involvement—we see 100% retention. No brand that has seriously integrated AI into their support operations has walked it back.

The Breakdown: Mid-market ecommerce brands ($3-20M revenue) represent roughly one-third of meaningful adopters. This segment appears to be the "sweet spot" for AI adoption—large enough to benefit from efficiency gains, agile enough to implement new technology quickly.

What This Means for Merchants: The lack of churn among serious adopters is a strong signal. Brands aren't experimenting with AI and deciding it doesn't work—they're experimenting and then expanding deployment. For merchants still on the sidelines, the question is shifting from "should we adopt?" to "how quickly can we implement?"`}
          >
            <MerchantAdoptionChart />
          </InsightCard>
          
          {/* Chart 3: The Automation Ceiling - Industry Benchmark */}
          <InsightCard
            title="The Automation Ceiling"
            subtitle="Where AI Excels vs. Where Humans Win"
            source="CX Lab Research, aggregated industry data"
            aiSummary="The ecommerce industry is discovering clear boundaries for AI automation. Transactional queries (order status, shipping) automate at 88-92%, while emotional or complex issues (complaints, disputes) hit a ceiling around 23-41%. These patterns are consistent across brand size and vertical."
            fullAnalysis={`The Trend: A clear automation hierarchy is emerging across the ecommerce industry. Transactional, information-retrieval queries automate exceptionally well—order status inquiries hit 92% automation rates, shipping updates reach 88%. But as emotional complexity increases, automation effectiveness drops sharply: complaints max out at 41%, refund disputes at 23%.

The Pattern: This isn't a technology limitation that will be solved with better AI—it's a fundamental insight about customer service. When customers are frustrated, confused, or feel wronged, they need empathy and judgment that current AI cannot reliably provide. The brands seeing the best outcomes have accepted this ceiling rather than fighting it.

What This Means for Merchants: The strategic implication is clear: design your support operation around these natural boundaries. Route transactional queries to AI confidently. Use AI for triage and information gathering on complex issues. But preserve human capacity for conversations where empathy matters. The goal isn't maximum automation—it's optimal customer experience at sustainable cost.`}
          >
            <AutomationCeilingChart />
          </InsightCard>
        </section>
        
        <SubscribeSection />
        
        <MethodologySection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
