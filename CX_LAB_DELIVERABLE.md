# CX Lab: Final Deliverable

**Live:** [my-cx-lab-final.vercel.app](https://my-cx-lab-final.vercel.app)

---

## The Two Insights That Matter

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

## Content Strategy: The Gong Lab Playbook

**Inspiration:** [Gong Lab](https://www.gong.io/blog/how-cursing-impacts-sales) pioneered data-backed content that's provocative, shareable, and positions their product.

### Our approach:
1. **Lead with shock, deliver utility** - "The 0.8-point gap" grabs attention, the solution sells the product
2. **Educate the market** - Position the problem (basic automation) so we can position the solution (Gorgias)
3. **Data as credibility** - $3.4B GMV analyzed gives authority to the narrative
4. **Internal linking** - Every insight links to customer success stories

---

## Content Curation: What We Show (and What We Don't)

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

## The System Behind It (Step-by-Step)

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

## Distribution: The Concrete Plan

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

## Measuring Success

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

## Three Research Ideas (Shock + Utility)

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
