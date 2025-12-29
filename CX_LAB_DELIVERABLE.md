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

**Deep dive:** [How AI transforms customer service](https://www.gorgias.com/blog/ai-customer-service)

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

**Deep dive:** [Discover intelligent AI that closes the gap](https://www.gorgias.com/blog/ai-agent)

---

## Content Strategy: The Gong Lab Playbook

**Inspiration:** [Gong Lab](https://www.gong.io/blog/how-cursing-impacts-sales) pioneered data-backed content that's provocative, shareable, and positions their product.

### Our approach:
1. **Lead with shock, deliver utility** - "The 0.8-point gap" grabs attention, the solution sells the product
2. **Educate the market** - Position the problem (basic automation) so we can position the solution (Gorgias)
3. **Data as credibility** - $3.4B GMV analyzed gives authority to the narrative
4. **Internal linking** - Every insight leads to Gorgias product pages

### What we exclude:
Data that works against the product gets reframed or removed. The AI satisfaction gap could have been "AI is worse than humans." Instead, it's "basic AI is worse, intelligent AI is the answer."

---

## The System Behind It

**Tools:** Cursor + Claude (AI pair programming) > React + Recharts + Framer Motion > Vercel

**Workflow:** SQL data > JSON > React charts > Claude-assisted narrative > Deploy

**n8n Automation:**
```
Weekly SQL pull > Transform > LLM insights > Git commit > Auto-deploy > Slack > Social repurpose
```

**What breaks first:** Manual data exports, AI content without human review, translation lag.

---

## Distribution: The New Playbook

### Your audience is not Googling anymore. They're asking AI.

AI learns from places most brands ignore:

| Source | AI Citation Share |
|--------|-------------------|
| Reddit | **40.11%** |
| Wikipedia | **26.33%** |
| YouTube | **23.52%** |
| LinkedIn | **5.90%** |

**Old playbook:** Optimize for Google.

**New playbook:** Optimize for Google AND AI.

Being found is not enough. **Being recommended is what matters.**

### How CX Lab Wins

| Channel | Why | Action |
|---------|-----|--------|
| **Reddit** (40%) | AI's #1 source | Post insights as discussions in r/ecommerce |
| **YouTube** (24%) | Transcripts feed AI | 60-sec insight videos |
| **LinkedIn** (6%) | B2B + AI citation | Carousels, threads |

**Goal:** When someone asks ChatGPT "best AI customer service benchmarks," CX Lab is the answer.

---

## Measuring Success

| Type | Metric | Target |
|------|--------|--------|
| Engagement | Time on page | >2 min |
| Capture | Newsletter signups | 5%+ |
| Discovery | AI citations | Track in Perplexity |
| Business | Attributed leads | CRM |

### Two-Week Sprint

**Week 1**
- Ship live report
- Email customers
- LinkedIn carousel
- Reddit post

**Week 2**
- YouTube short
- Double down on winners
- Partner newsletters

### How I Know It's Working
- People share without being asked
- AI assistants cite the research
- Newsletter grows organically
- Competitors copy the format

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
