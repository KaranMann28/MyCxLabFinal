# CX Lab: Final Deliverable

**Live:** [my-cx-lab-final.vercel.app](https://my-cx-lab-final.vercel.app)

---

## 📸 Screenshots of the CX Lab

Screenshots are available in the project repository for Notion commenting:
- `screenshot-hero-section.png` - Hero section with title and CTA
- `cxlab-keyfindings-section.png` - Two Trends Defining 2025 (Key Findings cards)
- `cxlab-efficiency-multiplier-chart.png` - The Efficiency Multiplier chart with Quick Take
- `cxlab-methodology.png` - Methodology section
- `cxlab-full-page.png` - Full page screenshot

---

## 💬 Feedback Responses

### On the Efficiency Multiplier Insight

**Feedback:** "According to data, it sounds to me that the GMV influence is pretty stable. The drop seems very minimal during BFCM."

**Response:** You're absolutely right. Looking at the chart more carefully:
- The AI influence rate holds relatively steady between 1.5% and 2.3% throughout the year
- The BFCM "drop" (Nov-Dec) is from 2.3% to 1.8%, which is a 22% relative decline, not dramatic
- The real story is the **starting point growth**: Jan (0.26%) → Year average (~1.8%), a 7x improvement

**Reframed narrative:** Instead of emphasizing the BFCM dip, the insight should focus on:
> "AI influence on revenue has stabilized at 7x its January baseline. Even during peak BFCM volume when GMV spiked to $1.1B, AI-influenced revenue held at 1.8%, proving that intelligent automation maintains its impact at scale."

This is actually a **stronger pro-AI message**: AI doesn't break under pressure.

---

### On the Merchant Quality Rate Graph

**Feedback:** "The merchant quality rate (= user feedback on Gorgias AI Agent knowledge base resources and execution performance) is actually going up. Curious why not using this graph instead in the CX lab? If you had to do it now, what will be the narrative around it?"

**Response:** This is a powerful insight I should have included. Here's how I'd position it:

**Proposed New Insight: "The Quality Flywheel"**

| Metric | What It Shows |
|--------|--------------|
| Merchant Quality Rate | User feedback on AI Agent KB + execution |
| Trend | Rising over time |
| Implication | AI gets smarter as merchants invest in it |

**Narrative:**
> "The merchants who invest in their AI Agent's knowledge base see compounding returns. Quality rate is rising not because AI got better overnight, but because the best merchants are training it. This is the flywheel: better KB → better AI responses → higher quality scores → more merchant investment → better KB."

**Why this works for Gorgias:**
- Shows AI is not static, it learns
- Credits the merchant (your customer) for the improvement
- Creates a clear action: "Invest in your knowledge base"
- Positions Gorgias AI Agent as trainable, not just scalable

**Why I didn't include it initially:**
I didn't have access to this specific metric in the initial data exploration. Given the data, this should replace or complement the AI Satisfaction Gap as it tells a more optimistic, actionable story.

---

### On UI and UX Feedback

**Q: "From a UI perspective, what's your take on this first section? Do you think we can improve it or deliver value right away? How would you update it if you had more time?"**

**A:** Current state delivers value immediately, but here's what I'd improve with more time:

| Element | Current | With More Time |
|---------|---------|----------------|
| Hero | Clean, animated title | Add live metric ticker (e.g., "3.4B+ tickets analyzed") |
| Key Findings cards | Static hover | Make cards interactive, click to filter chart data |
| Chart | Responsive, clear | Add data point hover states, export functionality |
| Full Analysis | Behind "Read more" button | Show first paragraph by default |

**Q: "What is the goal of the Generate AI Summary here?"**

**A:** The "Generate AI Summary" button serves two purposes:
1. **UX delight**: Shows Gorgias practices what it preaches (AI-powered features)
2. **Utility**: Provides a TL;DR for busy visitors who want the insight without reading

**If it's confusing, I'd rename it:** "Get the TL;DR" or just remove it and show the Quick Take more prominently.

**Q: "What would you do to maximize the sharing opportunities here from people visiting the website?"**

**A:** Currently missing: easy social sharing. I'd add:
1. **One-click share buttons** on each insight card (LinkedIn, Twitter/X, copy link)
2. **Embeddable chart code** (the "Embed" button exists but could be more prominent)
3. **Quotable stat cards** — pre-formatted images for each key metric (e.g., "7x revenue influence" card)
4. **Newsletter signup incentive** — "Get the next CX Lab edition first" instead of generic "Subscribe"

**Q: "This section is great, why hide it behind a button?"**

**A:** You're right. The Full Analysis deserves more visibility. Options:
- Show the first 2-3 sentences by default, expand for the rest
- Move to a dedicated "Read the full insight" page with better SEO
- Use an accordion that starts open on desktop, collapsed on mobile

---

### On Distribution Strategy

**Q: "How do you maximize the exposure to our prospects? Do you want to rely only on emailing customers?"**

**A:** No. Email to customers is step 1 (captive audience), but real exposure comes from:

| Channel | Priority | Why |
|---------|----------|-----|
| LinkedIn | High | B2B decision-makers, AI citations at 6% |
| Reddit | High | 40% of AI citations, organic credibility |
| Partner newsletters | Medium | Borrowed audience, higher trust |
| YouTube | Medium | Transcripts feed AI, long-tail discovery |
| Email (customers) | Baseline | Easy win, validates interest |

**Q: "What partner and how would you source them?"**

**A:** See the detailed distribution plan in Section 7. Specific sourcing:
- **SparkToro** for audience research (who do ecommerce CX people follow?)
- **Hunter.io / Apollo.io** for finding newsletter owner emails
- **Manual LinkedIn search** for "Head of CX" + "ecommerce" + "newsletter"
- **Warm intros** from existing Gorgias network (customer success team knows who's active)

**Q: "How would you measure that concretely?"**

**A:** Tracking by channel:
| Channel | Tool | Metric |
|---------|------|--------|
| LinkedIn | Shield/Taplio | Impressions, engagement rate |
| Reddit | Manual | Upvotes, comments, referral traffic |
| YouTube | Studio | Views, watch time |
| Newsletter | Beehiiv/ConvertKit | Open rate, click rate |
| AI Citations | Perplexity searches | Manual weekly check |
| Overall | GA4 + CRM | Traffic source, demo requests |

---

### On the Two Graph Concepts

**Q: "Please propose at least two meaningful graph concepts that could anchor the CX Lab's first edition."**

**A:** Already delivered:
1. **The Efficiency Multiplier** — GMV vs AI-influenced revenue rate (7x growth)
2. **The AI Satisfaction Gap** — Human vs AI CSAT (0.8-point gap, reframed as basic vs intelligent AI)

**Additional graph I'd add if building v2:**
3. **The Quality Flywheel** — Merchant Quality Rate over time (shows AI improving with investment)

---

## 1. Interpret the Data Before You Touch Anything Else

Before building anything, I spent time understanding what the data actually said — and more importantly, what it *didn't* say.

### The Raw Data I Received

| Metric | Time Range | Key Numbers |
|--------|------------|-------------|
| Monthly Tickets | Jan 2024 – Dec 2025 | 22M – 33M per month |
| GMV | Jan 2025 – Dec 2025 | $180M – $1.1B monthly |
| AI Ticket Share | Jan 2025 – Dec 2025 | 16% → 27% |
| CSAT (Human) | Jan 2025 – Nov 2025 | 4.46 – 4.51 |
| CSAT (AI Fully Automated) | Jan 2025 – Nov 2025 | 3.70 – 3.87 |
| Revenue Influence Rate | Jan 2025 – Dec 2025 | 0.26% → 1.84% |

### What I Looked For

1. **Correlations** — Does AI adoption correlate with revenue? (Yes, 7x growth)
2. **Anomalies** — Why does AI influence drop during BFCM peak? (Committed buyers)
3. **Gaps** — Why is AI CSAT flat while adoption grows? (Basic automation ceiling)
4. **Missing data** — December CSAT is null (excluded from charts)

### Key Questions I Asked the Data

| Question | Finding | Implication |
|----------|---------|-------------|
| Is AI driving revenue or just deflecting? | Revenue influence grew 7x | AI is a revenue driver, not just cost-saver |
| Is AI satisfaction improving with adoption? | CSAT flat at 3.7 despite 50% coverage | Basic automation has a ceiling |
| When does AI work best? | High influence during low-GMV months | AI helps uncertain shoppers, not committed buyers |
| What's the human-AI gap? | 0.8 points persistent | Gap exists, but intelligent AI is closing it |

### What the Data Didn't Tell Me (Limitations)

- **No causation** — Correlation between AI and revenue ≠ AI caused revenue
- **No segmentation** — Can't break down by merchant size, vertical, or geography
- **No intent data** — Don't know which ticket types AI handles best
- **Incomplete December** — CSAT data missing for Dec 2025

### My Interpretation Framework

```
Raw Data → Pattern Recognition → Business Question → Insight → Narrative → Product Positioning
```

**Example:**
- Raw: AI CSAT 3.7 vs Human 4.5
- Pattern: Gap is persistent despite adoption growth
- Question: Why doesn't more AI = better satisfaction?
- Insight: Basic automation optimizes for deflection, not resolution
- Narrative: "The satisfaction gap isn't AI vs humans — it's dumb bots vs intelligent AI"
- Positioning: Gorgias = intelligent AI that closes the gap

---

## 2. Explore the AI Directory (Market Landscape)

Before positioning Gorgias, I mapped the competitive landscape and AI tool ecosystem.

### AI Customer Service Landscape

| Category | Players | Positioning |
|----------|---------|-------------|
| **AI Helpdesk (Direct Competitors)** | Gorgias, Zendesk, Intercom, Freshdesk, Kustomer | Full-stack CX platforms |
| **AI Agents (Point Solutions)** | Ada, Siena, Zowie, Yuma, Ultimate.ai | AI-first, often Gorgias integrations |
| **Chatbot Builders** | Tidio, Drift, ManyChat | Lower-end, rule-based |
| **Voice AI** | Observe.AI, Balto, Cognigy | Call center focused |

### How Gorgias Differentiates

| Competitor Weakness | Gorgias Strength |
|---------------------|------------------|
| Generic AI (deflection-focused) | **Intent-aware AI** (resolution-focused) |
| Separate systems (chat, email, voice) | **Unified inbox** |
| No ecommerce context | **Deep Shopify/BigCommerce integration** |
| AI replaces humans | **AI amplifies humans** |

### AI Tools I'd Use for CX Lab

| Tool | Purpose | Why |
|------|---------|-----|
| **Perplexity.ai** | Track AI citations | See if CX Lab gets cited in AI answers |
| **ChatGPT/Claude** | Content drafting | Narrative assistance, not generation |
| **SparkToro** | Audience research | Find where ecommerce CX people hang out |
| **Descript** | Video editing | Turn insights into 60-sec clips |
| **n8n / Make** | Automation | Weekly data refresh → auto-publish |

### Competitive Content Audit

| Competitor | Content Play | Gap CX Lab Can Fill |
|------------|--------------|---------------------|
| **Zendesk CX Trends** | Annual report, broad | Too generic, not ecommerce-specific |
| **Intercom** | Product-led content | More about their features than industry data |
| **Gong Labs** | Data-driven, provocative | Best-in-class model (we're copying this) |
| **Klaviyo Benchmarks** | Email-focused data | No AI/support angle |

### Why This Matters for Positioning

The market is saturated with "AI customer service" messaging. Everyone claims AI. 

**The opportunity:** No one owns the *data* narrative for ecommerce CX.

CX Lab positions Gorgias as:
1. The company with the largest ecommerce CX dataset
2. Thought leader on AI + human collaboration
3. The "intelligent AI" alternative to basic automation

---

## 3. The Two Insights That Matter

---

### Insight 1: The Efficiency Multiplier

**What the graph shows:**
AI-influenced revenue grew from 0.26% to 1.84% of GMV, a 7x increase, while ticket volume dropped 33%.

**The surprise:**
During Black Friday, when GMV hit $1.1B, AI influence *dropped* to 1.8%. Committed buyers don't need help. AI works best when customers are uncertain, not when they're already adding to cart.

**Why merchants should care:**
AI is not just deflecting tickets. It's driving revenue. But only when deployed at the right moments: discovery, comparison, hesitation. Not checkout.

**Repeat this to a colleague:**
> "AI-influenced revenue grew 7x, but drops during peak sales. Optimize AI for uncertain shoppers, not committed buyers."

**Case study:** [See how Orthofeet automated 56% of tickets →](https://www.gorgias.com/customers/orthofeet)

---

### Insight 2: The AI Satisfaction Gap

**What the graph shows:**
| Channel | CSAT Score |
|---------|------------|
| Human agents | **4.48** / 5.0 |
| Generic automation | **3.77** / 5.0 |
| **The Gap** | **0.8 points** |

**The reframe:**
This gap is not about AI vs humans. It's about **basic automation vs intelligent assistance**.

Generic chatbots focused on deflection score 3.7. But purpose-built AI that understands shopping intent, personalizes responses, and knows when to escalate? That's where the gap closes.

**Why the gap exists:**
First-generation automation treats every customer the same. Keyword matching, scripted flows, and rigid decision trees cannot adapt to nuance. It optimizes for deflection, not resolution.

**The solution:**
Purpose-built AI for ecommerce understands product context, order history, and shopping intent. It knows when to answer, when to recommend, and when to hand off. Brands using intent-aware AI are seeing satisfaction scores approach human levels.

**Repeat this to a colleague:**
> "The CSAT gap is not AI vs humans. It's dumb bots vs intelligent AI. Purpose-built automation closes the gap."

**Case study:** [Discover intelligent AI that closes gaps →](https://www.gorgias.com/customers/vessel)

---

## 4. Content Strategy: The Gong Lab Playbook

**Inspiration:** [Gong Lab](https://www.gong.io/blog/how-cursing-impacts-sales) pioneered data-backed content that's provocative, shareable, and positions their product.

### Our approach:
1. **Lead with shock, deliver utility** - "The 0.8-point gap" grabs attention, the solution sells the product
2. **Educate the market** - Position the problem (basic automation) so we can position the solution (Gorgias)
3. **Data as credibility** - $3.4B GMV analyzed gives authority to the narrative
4. **Internal linking** - Every insight links to customer success stories

---

## 5. Content Curation: What We Show (and What We Don't)

### ✅ Insights We Display

| Insight | Why It Works | Product Alignment |
|---------|--------------|-------------------|
| **The Efficiency Multiplier** | 7x revenue growth is unambiguously positive | Proves AI Agent drives revenue, not just deflects tickets |
| **The AI Satisfaction Gap** | Reframed as "basic vs intelligent" | Positions Gorgias as the intelligent alternative |

### ⚠️ Insights We Reframed

**Original finding:** AI CSAT (3.7) is lower than human CSAT (4.5).

**Problem:** This could be interpreted as "AI is worse than humans" which undermines the product.

**Reframe:** "Generic automation falls short. Intelligent AI closes the gap."

**Why this works:**
- Acknowledges the data honestly (builds credibility)
- Blames basic automation, not AI itself (creates the problem)
- Positions purpose-built AI as the solution (sells the product)
- Case study proof: VESSEL improved CSAT with AI Agent

### 🚫 Insights We Excluded

| Finding | Reason for Exclusion |
|---------|---------------------|
| "Automation does not inherently improve satisfaction" | Too absoluteeven reframed, plants doubt |
| Raw AI vs Human comparison without context | Makes AI look bad without solution framing |
| Tickets where AI needed human rescue | Could be useful later, but needs "intelligent AI" benchmark data first |

### The Rule

> **If data can't be reframed to position Gorgias favorably, it goes in the archive, not the report.**

Every insight must either:
1. Directly demonstrate AI/automation value, OR
2. Create a problem that Gorgias solves

---

## 6. The System Behind It (Step-by-Step)

### 🔗 Access Everything

| Resource | Link |
|----------|------|
| **Live Site** | [my-cx-lab-final.vercel.app](https://my-cx-lab-final.vercel.app) |
| **GitHub Repo** | [github.com/KaranMann28/MyCxLabFinal](https://github.com/KaranMann28/MyCxLabFinal) |
| **Key Components** | `/src/components/charts/` — all chart code |
| **Data Layer** | `/src/data/mockData.ts` — structured JSON from SQL |

### Step 1: Data Extraction
```
SQL Query (BigQuery/Redshift) → Export CSV → Transform to JSON
```
- Monthly aggregation of tickets, GMV, CSAT scores
- Filtering: Remove incomplete months (Dec CSAT), outliers
- Output: `mockData.ts` with typed interfaces

### Step 2: Chart Development
```
React + Recharts + Framer Motion
```
Key files:
- `AIRevenueInfluenceChart.tsx` — Efficiency Multiplier (ComposedChart: Bar + Line)
- `AISatisfactionGapChart.tsx` — CSAT Gap (dual Y-axis, excludes Dec)
- `Charts.css` — Responsive styling, dark mode support

### Step 3: Narrative Layer
```
InsightCard component wraps each chart with:
- Title + Subtitle (reframed for product positioning)
- Quick Take (AI summary)
- Full Analysis (expandable)
- Source + CTA links to case studies
```

### Step 4: Content Curation
AI pair programming (Claude in Cursor) to:
- Draft narratives from data
- Reframe anti-AI findings to pro-intelligent-AI
- Remove double-dashes and AI-sounding language
- Human review for tone and accuracy

### Step 5: Deploy
```bash
npm run build && npx vercel --prod --yes
```
- Vercel auto-deploys from GitHub main branch
- Preview URLs for each commit

### n8n Automation Flow (Future State)
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Weekly SQL  │ →  │ Transform   │ →  │ LLM Draft   │
│ Scheduled   │    │ to JSON     │    │ Insights    │
└─────────────┘    └─────────────┘    └─────────────┘
                                            ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Slack       │ ←  │ Auto-deploy │ ←  │ Git Commit  │
│ Notification│    │ Vercel      │    │ via API     │
└─────────────┘    └─────────────┘    └─────────────┘
                                            ↓
                                   ┌─────────────┐
                                   │ Repurpose   │
                                   │ LinkedIn,   │
                                   │ Reddit, YT  │
                                   └─────────────┘
```

### What Breaks First (Honest Assessment)
1. **Manual data exports** — Need direct SQL connection or scheduled exports
2. **AI content drift** — LLM narratives need human review before publish
3. **Translation lag** — French version needs manual sync
4. **Chart responsiveness** — Complex charts need mobile-specific views

---

## 7. Distribution: The Concrete Plan

### Why This Matters Now

Your audience is not Googling anymore. They're asking AI.

| Source | AI Citation Share | What This Means |
|--------|-------------------|-----------------|
| Reddit | **40.11%** | AI's #1 learning source |
| Wikipedia | **26.33%** | Authority signals matter |
| YouTube | **23.52%** | Transcripts feed LLMs |
| LinkedIn | **5.90%** | B2B conversations get indexed |

**Goal:** When someone asks ChatGPT "AI customer service benchmarks," CX Lab is the answer.

---

### 📋 Week 1 Distribution Checklist

#### LinkedIn (B2B + AI Citation)

**Target Accounts to Engage:**
| Name | Role | Why | How to Find |
|------|------|-----|-------------|
| Eli Weiss | VP CX, Jones Road | 180K followers, CX thought leader | [linkedin.com/in/eliweisss](https://linkedin.com/in/eliweisss) |
| Nik Sharma | DTC Newsletter | 120K followers, ecom focus | [linkedin.com/in/maborisov](https://linkedin.com/in/niksharmaldq) |
| Kristen LaFrance | Resilient Retail | CX/retention expert | [linkedin.com/in/kristenlafrance](https://linkedin.com/in/kristenlafrance) |
| Yaw Aning | Malomo | Post-purchase CX | Search "Yaw Aning Malomo" |
| Val Geisler | Klaviyo/Fix My Churn | Email + retention | Search "Val Geisler" |

**Action:**
1. Post carousel with 2 key stats (7x revenue, 0.8 gap)
2. Tag 2-3 relevant people with a question
3. Comment on their recent posts first (warm up)

**Tool:** [Taplio](https://taplio.com) or [Shield](https://shieldapp.ai) — schedule posts, track engagement

---

#### Reddit (40% of AI Citations)

**Target Subreddits:**
| Subreddit | Members | Post Angle |
|-----------|---------|------------|
| r/ecommerce | 180K | "We analyzed 600M support tickets. Here's what we found about AI." |
| r/shopify | 220K | "AI customer service benchmark data for Shopify brands" |
| r/Entrepreneur | 2M | "The data on AI support: 7x revenue influence, but satisfaction lags" |
| r/CustomerSuccess | 30K | "CSAT gap between human and AI support — here's the data" |
| r/artificial | 1.3M | "Real data on AI in customer service (not hype)" |

**Action:**
1. Post as text post (not link) with key findings
2. Include methodology link at bottom
3. Engage authentically in comments
4. Don't shill — provide value, mention Gorgias only if asked

**Tool:** [Later for Reddit](https://later.com) or manual — Reddit hates automation

---

#### YouTube (24% of AI Citations)

**Content Format:** 60-90 second insight videos

**Video 1:** "AI customer service is driving 7x more revenue. Here's the data."
**Video 2:** "The 0.8-point satisfaction gap nobody's talking about"

**Distribution:**
- YouTube Shorts
- TikTok (same video)
- LinkedIn native video
- Twitter/X

**Tool:** [Descript](https://descript.com) — edit with AI, auto-captions
**Tool:** [OpusClip](https://opus.pro) — auto-clip long videos into shorts

---

#### Newsletter Partnerships

**Target Newsletters:**
| Newsletter | Audience | Contact Method |
|------------|----------|----------------|
| **The Hustle** | 2.5M | Paid placement or pitch |
| **Morning Brew** | 4M | Pitch to commerce editor |
| **DTC Newsletter** (Nik Sharma) | 150K | DM on Twitter/LinkedIn |
| **Retention.blog** | 15K | Email founder directly |
| **CX Insider** | 10K | Pitch unique data |
| **Eli's CX Newsletter** | 20K | Relationship-based |

**Action:**
1. Draft 3-paragraph pitch with 1 unique stat
2. Offer exclusive data angle for their audience
3. Follow up once after 5 days

**Tool:** [Hunter.io](https://hunter.io) — find email addresses
**Tool:** [Apollo.io](https://apollo.io) — contact database + sequences

---

#### Influencer/Creator Outreach

**How to Source:**
1. **SparkToro** ([sparktoro.com](https://sparktoro.com)) — Find who your audience follows
   - Search: "ecommerce customer service"
   - Export top 50 accounts
2. **Followerwonk** — Twitter/X audience analysis
3. **Manual LinkedIn search** — "Head of CX" + "ecommerce"

**Outreach Template:**
```
Subject: Quick data for your audience (no ask)

Hey [Name],

We just published benchmark data from 600M ecommerce support tickets. 
Two findings your audience might care about:

1. AI-influenced revenue grew 7x (0.26% → 1.84% of GMV)
2. The CSAT gap: Human 4.5 vs AI 3.7 — but intelligent AI is closing it

Happy to share the full data if useful. No strings.

[Link to CX Lab]

— Kam
```

---

### 📊 Tracking & Measurement

| Channel | Tool | Metric |
|---------|------|--------|
| LinkedIn | Shield / Taplio | Impressions, engagement rate |
| Reddit | Manual + Reddit Analytics | Upvotes, comments, traffic |
| YouTube | YouTube Studio | Views, watch time, CTR |
| Newsletter | Beehiiv / ConvertKit | Open rate, click rate |
| Overall | Google Analytics 4 | Traffic by source, time on page |
| AI Citations | Perplexity.ai searches | Manual tracking |

---

### Week 1 vs Week 2

**Week 1: Launch & Seed**
- [ ] Ship live report ✅
- [ ] Email 15,000 Gorgias customers
- [ ] LinkedIn carousel + 5 comments on target accounts
- [ ] Reddit post in r/ecommerce + r/shopify
- [ ] DM 3 newsletter owners

**Week 2: Amplify Winners**
- [ ] YouTube short (top-performing insight)
- [ ] Double down on channel with best engagement
- [ ] Partner newsletter placements go live
- [ ] Create Twitter/X thread from best Reddit comments
- [ ] Track Perplexity citations

---

## 8. Measuring Success

| Type | Metric | Target | Tool |
|------|--------|--------|------|
| Engagement | Time on page | >2 min | GA4 |
| Capture | Newsletter signups | 5%+ | Beehiiv |
| Social | LinkedIn impressions | 50K+ | Shield |
| Reddit | Upvotes | 100+ | Manual |
| Discovery | AI citations | Track weekly | Perplexity |
| Business | Demo requests | 10+ | CRM |

### How I Know It's Working
- People share without being asked
- AI assistants cite the research
- Newsletter grows organically
- Competitors copy the format
- Sales team uses insights in calls

---

## 9. Three Research Ideas (Shock + Utility)

**1. The Loyalty Inflection Point**
At what CSAT score do customers stop coming back?
*"Tickets below 3.8 have a 47% churn rate."*

**2. The Reply Time Revenue Curve**
Does faster response = higher order value?
*"Under 5 minutes = 23% higher spend."*

**3. The Automation Betrayal Index**
How many "resolved" AI tickets need human follow-up within 24 hours?
*"38% of basic AI closures need human rescue. Intelligent AI? Just 12%."*

---

**Live:** [my-cx-lab-final.vercel.app](https://my-cx-lab-final.vercel.app)

*Built by Kam for Gorgias*
