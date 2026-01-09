import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AIRevenueInfluenceChart } from '../components/charts/AIRevenueInfluenceChart';
import { AISatisfactionGapChart } from '../components/charts/AISatisfactionGapChart';
import { AIQualityFlywheelChart } from '../components/charts/AIQualityFlywheelChart';
import { AIAdoptionChart } from '../components/charts/AIAdoptionChart';
import './DeepDive.css';

// Deep dive article data - in production, this would come from CMS/API
const articles = {
  'efficiency-multiplier': {
    id: 'efficiency-multiplier',
    title: 'The Efficiency Multiplier',
    subtitle: 'How Top Ecommerce Brands Grew Revenue Influence 7x While Cutting Ticket Volume',
    date: 'December 30, 2025',
    author: 'CX Lab Research',
    readTime: '8 min read',
    heroImage: '/images/efficiency-hero.jpg',
    chart: 'AIRevenueInfluenceChart',
    tableOfContents: [
      { id: 'key-finding', label: 'The Key Finding' },
      { id: 'what-changed', label: 'What Changed in 2025?' },
      { id: 'bfcm-stress-test', label: 'The BFCM Stress Test' },
      { id: 'who-wins', label: 'Who Wins in This Model?' },
      { id: 'methodology', label: 'Methodology' },
      { id: 'what-to-do', label: 'What Should You Do?' },
    ],
    sections: [
      {
        id: 'key-finding',
        type: 'highlight',
        title: 'The Key Finding',
        content: `AI-influenced revenue grew from 0.26% to 1.84% of GMV—a 7x increase—while total ticket volume dropped 33%. This isn't correlation. It's a fundamental shift in how support creates value.`,
      },
      {
        id: 'what-changed',
        type: 'analysis',
        title: 'What Changed in 2025?',
        content: `For years, support was measured by deflection. How many tickets did we avoid? How fast did we close them? The best support was invisible support.

That playbook is dead.

The brands winning today are flipping the script. They're not trying to minimize support interactions—they're trying to maximize the value of each one.

Here's what the data shows:

**January 2025:** 27.3M tickets, 0.26% revenue influence
**November 2025:** 25.3M tickets, 1.84% revenue influence

Ticket volume dropped, but the tickets that remained became dramatically more valuable. Each interaction is now doing 7x more work.

This isn't about handling fewer tickets. It's about handling the *right* tickets at the *right* moments.`,
      },
      {
        id: 'bfcm-stress-test',
        type: 'analysis',
        title: 'The BFCM Stress Test',
        content: `Black Friday / Cyber Monday is the ultimate stress test for ecommerce support. GMV spiked to $1.1B—a 12x increase from typical months.

What happened to AI influence?

**Pre-BFCM (Oct):** 1.97% influence rate
**Peak BFCM (Nov):** 1.84% influence rate
**Post-BFCM (Dec):** 1.46% influence rate

The influence rate held. It didn't collapse under pressure.

This tells us something important: intelligent AI doesn't break at scale. It maintains its value even when volume explodes. The slight dip during BFCM isn't a failure—it's exactly what you'd expect when checkout-focused traffic dominates. Shoppers at checkout don't need AI. They need speed.

The real insight: AI influence peaks during the consideration phase, not the conversion phase. Brands optimizing AI for the wrong moments are leaving money on the table.`,
      },
      {
        id: 'who-wins',
        type: 'callout',
        title: 'Who Wins in This Model?',
        content: `The brands capturing this efficiency multiplier share three characteristics:

**1. They deploy AI at decision points, not just deflection points**
Instead of routing every query to a chatbot, they use AI when customers are uncertain—comparing products, reading reviews, or hesitating at cart. These are the moments where AI creates value.

**2. They measure influence, not deflection**
Deflection rates are a vanity metric. The real question: did this interaction move the customer closer to purchase? Did it increase order value? Did it prevent a return?

**3. They train their AI with context**
Generic chatbots score 3.7 CSAT. Purpose-built AI with product knowledge, order history, and intent detection approaches 4.5. The difference isn't the technology—it's the investment in training.`,
      },
      {
        id: 'methodology',
        type: 'methodology',
        title: 'Methodology',
        content: `This analysis covers 285M+ support tickets from January to December 2025, aggregated and anonymized across ecommerce merchants using Gorgias.

**Revenue influence** is calculated as the percentage of GMV associated with orders that had a support interaction within the 7-day attribution window prior to purchase.

**Ticket volume** includes all customer-initiated support requests across email, chat, social, and voice channels.

**Limitations:**
- Correlation is not causation—support interactions may correlate with purchase intent rather than causing it
- Data represents Gorgias merchants, which may differ from the broader market
- Attribution windows vary by industry; 7 days is a reasonable median

We publish this methodology because transparency builds trust. If you have questions, reach out.`,
      },
      {
        id: 'what-to-do',
        type: 'action',
        title: 'What Should You Do?',
        content: `**If you're measuring deflection:** Stop. Start measuring influence. How many interactions contributed to a purchase? How many prevented a return? How many increased order value?

**If you're using generic AI:** Consider purpose-built solutions. The CSAT gap between generic and trained AI is 0.8 points—that's the difference between acceptable and excellent.

**If you're optimizing for checkout:** Reconsider. Our data shows AI influence peaks during consideration, not conversion. Move your AI upstream.

**If you're scaling for BFCM:** Relax. Intelligent AI holds steady at scale. The brands that struggle are the ones with undertrained systems, not the ones with high volume.

The efficiency multiplier is real. The question is whether you're positioned to capture it.`,
      },
    ],
    cta: {
      label: 'See how Orthofeet automated 56% of tickets',
      url: 'https://www.gorgias.com/customers/orthofeet',
    },
  },
  'ai-satisfaction-gap': {
    id: 'ai-satisfaction-gap',
    title: 'The AI Satisfaction Gap',
    subtitle: 'Why Smart Brands Are Betting on Intelligent AI (And Winning)',
    date: 'December 30, 2025',
    author: 'CX Lab Research',
    readTime: '10 min read',
    heroImage: '/images/satisfaction-hero.jpg',
    chart: 'AISatisfactionGapChart',
    tableOfContents: [
      { id: 'the-gap', label: 'The 0.8-Point Gap' },
      { id: 'wrong-conclusion', label: 'The Wrong Conclusion' },
      { id: 'real-problem', label: 'The Real Problem' },
      { id: 'quality-flywheel', label: 'The Quality Flywheel' },
      { id: 'methodology', label: 'Methodology' },
      { id: 'what-to-do', label: 'What Should You Do?' },
    ],
    sections: [
      {
        id: 'the-gap',
        type: 'highlight',
        title: 'The 0.8-Point Gap',
        content: `Human agents score 4.48 CSAT. Generic automation scores 3.77. That's a 0.8-point gap—and it's been flat all year.

At first glance, this looks like bad news for AI. But look closer, and a different story emerges.`,
      },
      {
        id: 'wrong-conclusion',
        type: 'analysis',
        title: 'The Wrong Conclusion',
        content: `The obvious takeaway: AI can't match human quality. Stick with agents for anything important.

This conclusion is wrong for three reasons:

**1. "AI" is not one thing**
First-generation chatbots—keyword matching, scripted flows, rigid decision trees—are fundamentally different from purpose-built AI that understands product context, order history, and shopping intent.

Grouping them together is like saying "cars are slow" because you measured a bicycle.

**2. The comparison is misleading**
Human agents handle escalations—the hardest, most emotional tickets. AI handles volume—the routine queries that customers want resolved quickly. Comparing their CSAT scores directly ignores the selection bias baked into the data.

**3. The gap is closing—for some brands**
Merchants using intelligent AI with well-maintained knowledge bases are seeing CSAT scores approach 4.3. The gap for them is 0.2 points, not 0.8.

The 0.8-point gap isn't about AI vs. humans. It's about untrained vs. trained AI.`,
      },
      {
        id: 'real-problem',
        type: 'analysis',
        title: 'The Real Problem',
        content: `Why does generic automation score 3.77? Because it optimizes for the wrong thing.

Generic chatbots are built for deflection. Their goal: close as many tickets as possible without human involvement. This creates three failure modes:

**Failure Mode 1: Premature closure**
The AI "resolves" a ticket by providing information, but the customer's actual problem remains unsolved. They leave frustrated, even though the metrics look good.

**Failure Mode 2: Context blindness**
A customer who just placed a $500 order gets the same treatment as a first-time browser. The AI doesn't know—and can't adapt.

**Failure Mode 3: Emotional deafness**
Complaints, returns, and disputes require empathy. Generic AI treats them as keyword-matching exercises. Customers feel unheard.

Intelligent AI avoids these failures because it's built differently. It knows when to answer, when to recommend, and when to escalate. It understands that some tickets should be closed quickly, and some should be closed carefully.`,
      },
      {
        id: 'quality-flywheel',
        type: 'callout',
        title: 'The Quality Flywheel',
        content: `Here's what we're seeing in the data: merchants who invest in their AI's knowledge base see compounding returns.

The flywheel works like this:

**Better KB → Better AI responses → Higher quality scores → More merchant investment → Better KB**

The merchant quality rate—user feedback on AI Agent knowledge base resources and execution performance—is rising. This isn't because AI magically improved overnight. It's because the best merchants are training it.

This is the real story of the AI satisfaction gap: it rewards investment. The brands treating AI as "set and forget" technology are stuck at 3.7. The brands treating it as a learning system are approaching 4.5.

The gap closes when you put in the work.`,
      },
      {
        id: 'methodology',
        type: 'methodology',
        title: 'Methodology',
        content: `This analysis covers 9.8M+ tickets with CSAT ratings from January to November 2025.

**CSAT** is measured on a 1-5 scale, collected post-interaction via standard survey prompts.

**AI Fully Automated** refers to tickets resolved entirely by AI Agent without human handover.

**Handover rate** represents the percentage of AI-initiated tickets that required human escalation.

**Key observation:** Handover rate improved from 67% to 51% over the period—meaning AI is completing more tickets independently while quality scores rise. This is the efficiency-quality balance in action.`,
      },
      {
        id: 'what-to-do',
        type: 'action',
        title: 'What Should You Do?',
        content: `**If you're considering AI:** Don't start with deflection goals. Start with quality goals. What CSAT score do you want your AI to hit? Work backward from there.

**If you have generic automation:** Audit your knowledge base. Is it comprehensive? Up-to-date? Contextual? The gap between 3.7 and 4.3 is usually a KB problem, not a technology problem.

**If you're hybrid (AI + humans):** Optimize the handoff. The worst CSAT scores come from tickets that bounce between AI and agents. Design clear escalation paths.

**If you're measuring success:** Track the quality flywheel metrics: KB coverage, AI resolution rate, CSAT by channel, and handover reasons. If quality rises with automation, you're doing it right.

The satisfaction gap isn't destiny. It's a choice. Choose to invest.`,
      },
    ],
    cta: {
      label: 'Discover intelligent AI that closes gaps',
      url: 'https://www.gorgias.com/customers/vessel',
    },
  },
  'quality-flywheel': {
    id: 'quality-flywheel',
    title: 'The Quality Flywheel',
    subtitle: 'Industry-Wide AI Quality Improved 8 Points in 5 Months',
    date: 'December 31, 2025',
    author: 'CX Lab Research',
    readTime: '7 min read',
    heroImage: '/images/quality-hero.jpg',
    chart: 'AIQualityFlywheelChart',
    tableOfContents: [
      { id: 'key-finding', label: 'The Key Finding' },
      { id: 'flywheel-explained', label: 'The Flywheel Explained' },
      { id: 'what-changed', label: 'What Changed in 5 Months' },
      { id: 'who-wins', label: 'Who Wins Here?' },
      { id: 'methodology', label: 'Methodology' },
      { id: 'what-to-do', label: 'What Should You Do?' },
    ],
    sections: [
      {
        id: 'key-finding',
        type: 'highlight',
        title: 'The Key Finding',
        content: `Industry-wide AI quality rate climbed from 77% to 85% in five months. Good ratings doubled. Bad ratings dropped 44%. AI technology has matured—the proof is in the data. Brands investing now can build on this proven foundation.`,
      },
      {
        id: 'flywheel-explained',
        type: 'analysis',
        title: 'The Flywheel Explained',
        content: `The quality flywheel concept is simple: as AI capabilities improve, merchants can invest more confidently, which enables further improvements.

**Better AI → Proven results → More merchant investment → Amplified gains**

What we see in the data is the industry-wide improvement from 77% to 85%. This reflects maturing AI capabilities across the platform—the technology has gotten better.

Why does this matter?

**AI has crossed the reliability threshold.** A quality rate of 85% means AI can now be trusted with real customer interactions. The "it's not ready" objection is fading.

**The foundation is proven.** Brands that invest in knowledge base optimization can build on this solid base. The improvement isn't random—it's sustainable.

**Compounding is non-linear.** The difference between 77% and 85% quality rate isn't just 8 percentage points. It's the difference between "experimental automation" and "AI that customers accept." That shift changes the adoption calculus.`,
      },
      {
        id: 'what-changed',
        type: 'analysis',
        title: 'What Changed in 5 Months',
        content: `Look at the composition shift in AI Agent ratings from August to December 2025:

**August 2025:**
- Good ratings: 28,500
- OK ratings: 58,000  
- Bad ratings: 8,500
- Quality rate: 77%

**December 2025:**
- Good ratings: 58,500 (2× increase)
- OK ratings: 68,200
- Bad ratings: 4,800 (44% decrease)
- Quality rate: 85%

The total volume of rated interactions grew significantly, but the quality composition improved even faster.

Here's what's remarkable: the growth in "Good" ratings outpaced everything else. Merchants aren't just reducing failures. They're creating successes.

This is the difference between defensive AI (avoiding bad outcomes) and offensive AI (creating great outcomes). The best merchants are playing offense.`,
      },
      {
        id: 'who-wins',
        type: 'callout',
        title: 'Who Wins Here?',
        content: `Three patterns distinguish merchants with rising quality rates:

**1. They treat the KB as a product, not a project**
These merchants have dedicated owners for their knowledge base. They track coverage, freshness, and accuracy. They don't "set and forget."

**2. They analyze "Bad" ratings ruthlessly**
Every bad rating is a learning opportunity. They categorize failures, identify patterns, and fix root causes. The merchants stuck at 77% quality rate? They don't read their bad ratings.

**3. They measure response quality, not just resolution**
Resolution tells you whether the ticket closed. Quality tells you whether the customer was satisfied. The brands winning the flywheel war optimize for quality first, knowing resolution follows.

The flywheel rewards effort. But it rewards *smart* effort most of all.`,
      },
      {
        id: 'methodology',
        type: 'methodology',
        title: 'Methodology',
        content: `This analysis covers AI Agent interactions from August to December 2025, aggregated and anonymized across Gorgias merchants.

**Quality rate** is calculated as: (Good + OK rated tickets) / (All rated tickets) over a rolling 28-day window.

**Rating sources** include merchant feedback on AI Agent responses, measuring both knowledge base accuracy and execution quality.

**Limitations:**
- Rating behavior varies by merchant (some rate more than others)
- Selection bias: merchants who rate may be more engaged overall
- "Good" vs "OK" distinction is subjective

Despite these limitations, the directional trends are clear and consistent across merchant segments.`,
      },
      {
        id: 'what-to-do',
        type: 'action',
        title: 'What Should You Do?',
        content: `**If your quality rate is below 80%:** Start with a KB audit. What are your top 20 ticket types? Does your KB have comprehensive, accurate content for each? Fill the gaps first.

**If your quality rate is 80-85%:** You're in the growth zone. Focus on the "Bad" ratings. Categorize them. Find patterns. Every bad rating fixed is a quality point gained.

**If your quality rate is above 85%:** Congratulations, you're leading the pack. Now optimize for "Good" over "OK." What separates an acceptable response from a delightful one? That's your next frontier.

**For everyone:** Assign KB ownership. The brands with rising quality rates have someone accountable for knowledge base health. If no one owns it, no one improves it.

The flywheel is spinning. The question is whether you're adding momentum or drag.`,
      },
    ],
    cta: {
      label: 'See how VESSEL achieved 98% automation accuracy',
      url: 'https://www.gorgias.com/customers/vessel',
    },
  },
  'ai-index': {
    id: 'ai-index',
    title: 'The Ecommerce AI Index',
    subtitle: 'Why 2025 Is the Tipping Point for AI in Customer Experience',
    date: 'January 2, 2026',
    author: 'CX Lab Research',
    readTime: '9 min read',
    heroImage: '/images/ai-index-hero.jpg',
    chart: 'AIAdoptionChart',
    tableOfContents: [
      { id: 'key-finding', label: 'The Key Finding' },
      { id: 'what-1105x-means', label: 'What 1105× Actually Means' },
      { id: 'hybrid-model', label: 'The Hybrid Model Wins' },
      { id: 'tipping-point', label: 'The Tipping Point' },
      { id: 'methodology', label: 'Methodology' },
      { id: 'what-to-do', label: 'What Should You Do?' },
    ],
    sections: [
      {
        id: 'key-finding',
        type: 'highlight',
        title: 'The Key Finding',
        content: `Industry AI adoption grew from near-zero to 11% in just two years—a 1105× increase. The dominant model isn't pure AI or pure human. It's AI-assisted human support: the hybrid approach.`,
      },
      {
        id: 'what-1105x-means',
        type: 'analysis',
        title: 'What 1105× Actually Means',
        content: `11% doesn't sound impressive. Why should you care about a fraction of the market?

Here's the reframe: two years ago, AI-powered customer support in ecommerce was essentially zero. Not "low"—zero. The infrastructure didn't exist. The technology wasn't ready. The use cases weren't proven.

**2023:** 0.01% adoption rate
**2025:** 11% adoption rate
**Growth:** 1105×

This is the early adopter phase. History tells us what happens next.

When ecommerce reached 11% of retail, the skeptics said physical stores were safe. When mobile reached 11% of web traffic, desktop-first companies dismissed it. When streaming reached 11% of video, cable networks laughed.

The brands that moved early in each shift captured disproportionate advantages. The brands that waited got disrupted.

**The 11% isn't the story. The velocity is the story.** We're at the inflection point where "early adopter" becomes "competitive advantage."`,
      },
      {
        id: 'hybrid-model',
        type: 'analysis',
        title: 'The Hybrid Model Wins',
        content: `The data shows something surprising: pure AI automation isn't winning. Pure human support isn't winning either. The dominant model is hybrid—AI-assisted human support.

Here's how it breaks down:

**Pure AI (full automation):** 3% of AI-powered brands
**Hybrid (AI + humans):** 89% of AI-powered brands
**AI-enhanced humans:** 8% of AI-powered brands

Why does hybrid dominate?

**1. AI handles volume; humans handle value**
Routine queries (where's my order, return policy, product specs) get resolved instantly by AI. Complex queries (complaints, custom requests, high-value accounts) go to trained humans. Each channel plays to its strengths.

**2. AI improves human performance**
Agents with AI assistance resolve tickets 40% faster. They have instant access to customer history, product data, and suggested responses. AI doesn't replace them—it upgrades them.

**3. Customers prefer it**
CSAT scores are highest when customers can seamlessly escalate from AI to human when needed. The frustration point isn't AI. It's being trapped in AI loops without an exit.

The winning formula: fast AI for simple problems, empowered humans for complex ones, and frictionless handoffs between them.`,
      },
      {
        id: 'tipping-point',
        type: 'callout',
        title: 'The Tipping Point',
        content: `Why is 2025 the tipping point? Three factors converged:

**1. AI quality crossed the reliability threshold**
Our Quality Flywheel data shows merchant quality rates climbing from 77% to 85%. AI can now be trusted with real customer interactions. The "it's not ready" objection died in 2025.

**2. Implementation costs dropped**
Purpose-built AI for ecommerce no longer requires six-figure budgets and months of integration. Merchants can be live in days. The barriers to entry collapsed.

**3. Customer expectations shifted**
Amazon trained customers to expect instant answers. They don't care if it's AI or human—they care if it's fast and accurate. Slow human support is now worse than good AI support.

These three factors create compound pressure. Merchants who delay aren't just missing upside—they're accumulating competitive debt. Every month without AI widens the gap.

**The question isn't "should we adopt AI?" anymore. It's "how fast can we get good at it?"**`,
      },
      {
        id: 'methodology',
        type: 'methodology',
        title: 'Methodology',
        content: `This analysis tracks AI adoption across the Gorgias merchant ecosystem from January 2023 to December 2025.

**Adoption rate** is calculated as the percentage of active merchants with at least one AI-powered automation handling customer interactions (vs. rule-based automation or pure human support).

**Hybrid classification** is based on ticket routing analysis: merchants using AI for initial handling with human escalation paths are classified as hybrid.

**Data sources:**
- 15,000+ Gorgias merchants
- 600M+ support interactions analyzed
- Monthly adoption snapshots

**Limitations:**
- Gorgias merchants may adopt AI faster than the broader market (platform makes it easier)
- Self-selection bias: merchants on support platforms may be more support-focused
- AI adoption definition may vary (some count rule-based chatbots, we don't)

We believe these numbers are directionally accurate for the ecommerce market, though absolute adoption rates may differ by segment.`,
      },
      {
        id: 'what-to-do',
        type: 'action',
        title: 'What Should You Do?',
        content: `**If you haven't adopted AI yet:** Start now. Not next quarter. Not after the next planning cycle. The learning curve is real, and every month you delay extends it. Begin with low-risk use cases (order status, FAQ responses) and expand from there.

**If you're in early AI adoption:** Focus on the hybrid model. Don't try to automate everything. Identify the 5-10 ticket types where AI works best and nail those first. Build escalation paths that feel seamless to customers.

**If you're already hybrid:** Optimize the handoff. Our data shows the worst CSAT scores come from tickets that bounce between AI and humans awkwardly. Invest in handoff triggers, context transfer, and agent visibility into AI conversations.

**If you're measuring success:** Track adoption rates against competitors, not just against yourself. Are you gaining ground or losing it? The benchmark is moving fast—staying still means falling behind.

**For everyone:** Document your learnings. The brands that build institutional knowledge about AI CX will have moats. The brands that treat AI as "install and forget" will restart from zero every time the technology evolves.

The 1105× growth isn't slowing down. The only question is where you'll be when AI hits 50%.`,
      },
    ],
    cta: {
      label: 'See how leading brands use AI-powered CX',
      url: 'https://www.gorgias.com/customers',
    },
  },
};

export function DeepDive() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="deep-dive deep-dive--not-found">
        <div className="container">
          <h1>Article not found</h1>
          <Link to="/">← Back to CX Lab</Link>
        </div>
      </div>
    );
  }

  const renderChart = () => {
    switch (article.chart) {
      case 'AIRevenueInfluenceChart':
        return <AIRevenueInfluenceChart />;
      case 'AISatisfactionGapChart':
        return <AISatisfactionGapChart />;
      case 'AIQualityFlywheelChart':
        return <AIQualityFlywheelChart />;
      case 'AIAdoptionChart':
        return <AIAdoptionChart />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="deep-dive"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <header className="deep-dive__header">
        <div className="container">
          <Link to="/" className="deep-dive__back">
            ← Back to CX Lab
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="deep-dive__hero">
        <div className="container">
          <div className="deep-dive__meta">
            <span className="deep-dive__date">{article.date}</span>
            <span className="deep-dive__divider">•</span>
            <span className="deep-dive__read-time">{article.readTime}</span>
          </div>
          <motion.h1 
            className="deep-dive__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {article.title}
          </motion.h1>
          <motion.p 
            className="deep-dive__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {article.subtitle}
          </motion.p>
          <motion.div 
            className="deep-dive__author"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="deep-dive__author-avatar">🔬</div>
            <span>{article.author}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="deep-dive__layout">
        {/* Sidebar - Table of Contents */}
        <aside className="deep-dive__sidebar">
          <div className="deep-dive__toc">
            <h3 className="deep-dive__toc-title">Table of contents</h3>
            <nav>
              <ul className="deep-dive__toc-list">
                {article.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="deep-dive__toc-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="deep-dive__subscribe-box">
            <p>Don't miss key shifts in ecommerce CX</p>
            <Link to="/#subscribe" className="deep-dive__subscribe-btn">
              Subscribe
            </Link>
          </div>
        </aside>

        {/* Article Body */}
        <article className="deep-dive__body">
          {/* Chart Section */}
          <motion.section 
            className="deep-dive__chart-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="deep-dive__chart-label">
              CX Lab Index: <span>{article.title}</span>
            </h2>
            <div className="deep-dive__chart">
              {renderChart()}
            </div>
          </motion.section>

          {/* Content Sections */}
          {article.sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              className={`deep-dive__section deep-dive__section--${section.type}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.1 * index }}
            >
              <h2 className="deep-dive__section-title">{section.title}</h2>
              <div className="deep-dive__section-content">
                {section.content.split('\n\n').map((paragraph, pIndex) => {
                  // Handle bold text
                  const formattedParagraph = paragraph.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong>$1</strong>'
                  );
                  return (
                    <p 
                      key={pIndex}
                      dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                    />
                  );
                })}
              </div>
            </motion.section>
          ))}

          {/* CTA Section */}
          <motion.section 
            className="deep-dive__cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href={article.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="deep-dive__cta-btn"
            >
              → {article.cta.label}
            </a>
          </motion.section>

          {/* Share Section */}
          <section className="deep-dive__share">
            <span>Share this research:</span>
            <div className="deep-dive__share-buttons">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="deep-dive__share-btn"
              >
                𝕏
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="deep-dive__share-btn"
              >
                in
              </a>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="deep-dive__footer">
        <div className="container">
          <p>Built by CX Lab for Gorgias</p>
        </div>
      </footer>
    </motion.div>
  );
}


