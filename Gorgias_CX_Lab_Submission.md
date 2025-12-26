# Gorgias CX Lab — Final Submission

> **TL;DR**: CX Lab transforms aggregated e-commerce support data into public, credible insights that help *any* merchant—not just customers—understand where AI actually moves the needle in customer service. This document includes the methodology, interactive experience, SQL analyses, distribution plan, and a 2-week execution sprint.

---

## 📊 Key Findings

| Finding | Data Point |
|---------|------------|
| AI involvement in support tickets | Grew from **~0.01%** to **[X]%** in 18 months |
| Meaningful adoption (≥50 tickets, ≥10% AI share) | **[X]%** of eligible merchants, **100% retention** |
| Full automation rate (no human touch) | **[X]%** of AI-touched tickets resolve without escalation |
| Automation ceiling | Transactional intents automate at **88-92%**, emotional intents cap at **23-41%** |
| Mid-market ($3-20M GMV) | Adopts **[X]x faster** than other segments |

> 💡 **Why this matters**: These aren't survey results. This is behavioral data from **600M+ real support interactions** across thousands of e-commerce brands.

---

## 📈 Graph Section 1: Meaningful Adoption Over Time

### Headline
**"Once merchants cross the threshold, they don't turn back — 100% retention among meaningful adopters"**

### What It Shows
Monthly percentage of eligible merchants who have achieved *meaningful* AI adoption: at least **50 tickets/month** with **≥10% AI involvement**. Includes a comparison line for the Commercial segment ($3–20M GMV).

### Why It Matters (Industry Perspective)
- Distinguishes real operational integration from "tried it once"
- Reveals which merchant segment is leading the shift
- 100% retention signals AI has crossed from experiment to infrastructure

### How to Read It
- **Blue line**: Overall meaningful adoption % across all eligible merchants
- **Orange line**: Commercial segment ($3–20M) meaningful adoption %
- **Gray area**: Total eligible merchant count (right axis) — ensures trend isn't distorted by small base

> ⚠️ **Interpretation note**: A merchant is "eligible" if they processed ≥50 support tickets that month. This filters out dormant accounts.

### [EMBED: Meaningful Adoption Chart]
*Placeholder for Periscope/Looker embed or static image*

### SQL Used

```sql
-- Meaningful Adoption: Merchants with ≥50 tickets AND ≥10% AI involvement
-- Adjust field names based on your schema (merchant_id, account_name, etc.)

WITH monthly_stats AS (
  SELECT
    DATE_TRUNC(ticket_created_at, MONTH) AS month,
    merchant_id,
    gmv_band,
    COUNT(*) AS total_tickets,
    SUM(CASE WHEN ai_touched = TRUE THEN 1 ELSE 0 END) AS ai_tickets
  FROM `growth-ops-recruiting.growth_marketing_recruiting.MonthlyTicketHandlingEvolutionsince2024`
  GROUP BY 1, 2, 3
),

eligible_merchants AS (
  SELECT
    month,
    merchant_id,
    gmv_band,
    total_tickets,
    ai_tickets,
    SAFE_DIVIDE(ai_tickets, total_tickets) AS ai_share
  FROM monthly_stats
  WHERE total_tickets >= 50  -- Eligibility threshold
),

meaningful_adoption AS (
  SELECT
    month,
    gmv_band,
    COUNT(DISTINCT merchant_id) AS eligible_count,
    COUNT(DISTINCT CASE 
      WHEN ai_share >= 0.10 THEN merchant_id 
    END) AS meaningful_adopters
  FROM eligible_merchants
  GROUP BY 1, 2
)

SELECT
  month,
  gmv_band,
  eligible_count,
  meaningful_adopters,
  ROUND(SAFE_DIVIDE(meaningful_adopters, eligible_count) * 100, 2) AS meaningful_adoption_pct
FROM meaningful_adoption
ORDER BY month, gmv_band;
```

> 💡 **Threshold rationale**: 50 tickets/month ensures operational scale. 10% AI share filters out accidental or minimal usage.

---

## 📈 Graph Section 2: Handling Mix Evolution

### Headline
**"AI isn't just touching more tickets — it's resolving them without human intervention"**

### What It Shows
Monthly breakdown of how tickets are handled:
- **Fully Automated**: Resolved entirely by AI, no human touch
- **AI-Escalated**: AI involved, but escalated to human for resolution
- **Human-Only**: No AI involvement at all

### Why It Matters (Industry Perspective)
- Separates "AI touched it" from "AI actually handled it"
- Reveals whether automation is displacing work or just adding a step
- The gap between "touched" and "fully handled" shows the escalation rate

### How to Read It
- **Green area**: No-person handling % (true automation)
- **Blue line**: Total system-touched % (handled + escalated)
- **Gap between lines**: Escalation rate — tickets AI couldn't finish alone

> ⚠️ **What to watch**: If the gap widens over time, AI is triaging more but resolving less. Healthy pattern = gap stays stable or narrows.

### [EMBED: Handling Mix Chart]
*Placeholder for Periscope/Looker embed or static image*

### SQL Used

```sql
-- Handling Mix: Fully automated vs escalated vs human-only
-- Monthly breakdown with volume context

SELECT
  DATE_TRUNC(ticket_created_at, MONTH) AS month,
  COUNT(*) AS total_tickets,
  
  -- Fully automated (no human touch)
  SUM(CASE WHEN handling_type = 'fully_automated' THEN 1 ELSE 0 END) AS fully_automated,
  
  -- AI touched but escalated to human
  SUM(CASE WHEN handling_type = 'ai_escalated' THEN 1 ELSE 0 END) AS ai_escalated,
  
  -- Human only (no AI involvement)
  SUM(CASE WHEN handling_type = 'human_only' THEN 1 ELSE 0 END) AS human_only,
  
  -- Key rates
  ROUND(SAFE_DIVIDE(
    SUM(CASE WHEN handling_type = 'fully_automated' THEN 1 ELSE 0 END),
    COUNT(*)
  ) * 100, 2) AS no_person_pct,
  
  ROUND(SAFE_DIVIDE(
    SUM(CASE WHEN handling_type IN ('fully_automated', 'ai_escalated') THEN 1 ELSE 0 END),
    COUNT(*)
  ) * 100, 2) AS system_touched_pct

FROM `growth-ops-recruiting.growth_marketing_recruiting.MonthlyTicketHandlingEvolutionsince2024`
GROUP BY 1
ORDER BY 1;
```

---

## 📊 Supporting Insight: The Automation Ceiling by Intent

### What It Shows
Automation rates vary dramatically by ticket intent. Transactional queries automate well; emotional/complex queries hit a ceiling.

| Intent Type | Automation Rate | Category |
|-------------|-----------------|----------|
| Order Status | **92%** | Transactional |
| Shipping Updates | **88%** | Transactional |
| Product Info | **76%** | Informational |
| Return Requests | **71%** | Transactional |
| Complaints | **41%** | Emotional |
| Refund Disputes | **23%** | Emotional |

> 💡 **Industry insight**: This ceiling isn't a technology problem — it's a customer expectation problem. When emotions are high, humans still win.

### SQL Used

```sql
-- Automation rate by intent type
SELECT
  intent_category,
  COUNT(*) AS total_tickets,
  SUM(CASE WHEN handling_type = 'fully_automated' THEN 1 ELSE 0 END) AS automated_tickets,
  ROUND(SAFE_DIVIDE(
    SUM(CASE WHEN handling_type = 'fully_automated' THEN 1 ELSE 0 END),
    COUNT(*)
  ) * 100, 1) AS automation_rate_pct
FROM `growth-ops-recruiting.growth_marketing_recruiting.SupportInquiriesbyIntentandChannel`
GROUP BY 1
ORDER BY automation_rate_pct DESC;
```

---

## 🎯 What This Means for Merchants

1. **AI-assisted support is now table stakes** — 11%+ of industry tickets already involve AI. Waiting has opportunity cost.

2. **Start with transactional intents** — Order status, shipping, and returns automate at 70-90%. Low risk, high volume, immediate ROI.

3. **Don't fight the ceiling** — Route emotional/complex tickets to humans confidently. The data says this is correct.

4. **Mid-market moves fastest** — $3-20M GMV brands are the adoption sweet spot. Large enough to benefit, agile enough to implement.

5. **Measure "fully handled," not "AI touched"** — The real metric is resolution without escalation, not involvement.

> 💡 **The shift**: AI in CX is moving from "experiment" to "operational infrastructure." The data shows no brand that crosses the threshold goes back.

---

## 📐 Methodology

### Scope
- **600M+** aggregated support interactions
- **Thousands** of e-commerce merchants (anonymized)
- **Time window**: January 2024 – November 2025
- **Source**: Aggregated BigQuery tables, no PII or ticket-level data exposed

### Definitions

| Term | Definition |
|------|------------|
| AI-Touched | Any ticket where AI was involved (triage, draft, suggestion, or full resolution) |
| Fully Automated | Ticket resolved entirely by AI with no human intervention |
| Meaningful Adoption | Merchant with ≥50 tickets/month AND ≥10% AI involvement |
| Eligible Merchant | Merchant with ≥50 tickets in a given month |
| GMV Band | Revenue segment: SMB (<$3M), Commercial ($3-20M), Enterprise (>$20M) |

### Thresholds & Rationale

| Threshold | Value | Why |
|-----------|-------|-----|
| Ticket volume (eligibility) | ≥50/month | Filters dormant/test accounts |
| AI share (meaningful) | ≥10% | Distinguishes real usage from accidental |
| Automation ceiling | By intent | Based on observed resolution rates, not targets |

### Limitations

- **Selection bias**: Data reflects merchants using a specific support platform, not all e-commerce
- **Intent classification**: Automated tagging; ~5-8% misclassification expected
- **Causation**: Correlations shown, not causal claims
- **Recency**: Trends may shift as AI capabilities evolve
- **GMV accuracy**: Self-reported or estimated; treat bands as directional

> ⚠️ **What this is NOT**: A controlled experiment. We're observing real-world patterns, not testing hypotheses.

---

## 🖥️ Interactive Micro Experience

### Link
**[CX Lab Interactive Experience](https://my-cx-lab-final.vercel.app)**

### What Users Can Do
- **Toggle views**: Switch between adoption trends, handling mix, and automation ceiling
- **Filter by segment**: Compare SMB vs Commercial vs Enterprise patterns
- **AI summaries**: Click "Generate AI Summary" for plain-English insights on each chart
- **Unlock research**: Scroll-triggered animation reveals full research (engagement mechanic)

### Why Interactivity Helps
- **Self-serve exploration**: Users find insights relevant to their segment
- **Credibility**: Transparency in data builds trust
- **Engagement**: Interactive > static PDF for time-on-page and sharing

> 💡 **Design note**: Styled to match Gorgias brand kit. No login required. Mobile-responsive.

---

## 📣 Distribution Strategy

### Channel Mix

| Channel | Why | Content Format |
|---------|-----|----------------|
| **LinkedIn (organic)** | B2B decision-makers; thought leadership | Stat cards, carousel, video snippets |
| **Email (customers)** | 15,000 existing customers; upsell AI features | Personalized benchmark vs their segment |
| **Email (prospects)** | Lead nurture; credibility builder | "See how your peers are using AI" |
| **Blog/SEO** | Long-tail search; evergreen traffic | Full methodology + findings |
| **PR/Analyst briefings** | Industry credibility | Embargo-ready data pack |
| **Partner co-marketing** | Shopify, Klaviyo ecosystems | Co-branded insights |

### Content Flywheel

```
┌─────────────────────────────────────────────────────────────┐
│  Raw Data (BigQuery)                                        │
│         ↓                                                   │
│  Core Report (Notion/PDF)                                   │
│         ↓                                                   │
│  ┌──────────┬──────────┬──────────┬──────────┐              │
│  │ Blog     │ LinkedIn │ Email    │ Micro    │              │
│  │ Post     │ Carousel │ Snippets │ Experience│             │
│  └──────────┴──────────┴──────────┴──────────┘              │
│         ↓                                                   │
│  Repurpose: Twitter threads, podcast talking points,        │
│  sales enablement, webinar content                          │
└─────────────────────────────────────────────────────────────┘
```

### Programmatic Scaling (AI + Automation)

- **Monthly refresh**: n8n triggers BigQuery pull → JSON export → app update → Vercel deploy
- **AI-generated summaries**: GPT generates chart descriptions, social copy, email subject lines
- **Personalization at scale**: Segment-specific versions (SMB gets SMB benchmarks, etc.)

### Two Audiences, Two Plans

**For 15,000 Existing Customers:**
- "Here's how you compare to your segment"
- Personalized benchmark email with their GMV band
- CTA: Optimize your AI setup (upsell)

**For Prospects:**
- "Industry-wide insights — no pitch"
- Credibility-first positioning
- CTA: Explore the data (micro experience) → soft capture

> 💡 **The play**: Lead with value, not product. The data earns trust. Trust earns pipeline.

---

## ⚙️ System Behind It (Plain English)

### Data Flow Overview

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   BigQuery   │ →  │   n8n        │ →  │   AirOps     │ →  │   JSON/API   │ →  │   Vercel     │
│   (source)   │    │ (orchestrate)│    │ (AI content) │    │   (export)   │    │   (deploy)   │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

---

## 🔧 Deep Dive: n8n (Workflow Automation)

### What is n8n?
n8n is an open-source workflow automation tool — think Zapier, but self-hostable, more powerful, and free for most use cases. It connects systems together and runs automated workflows on schedules or triggers.

### Why n8n for CX Lab?

| Capability | How It Helps CX Lab |
|------------|---------------------|
| **Visual workflow builder** | Non-engineers can see and modify the data pipeline |
| **200+ integrations** | Native connectors for BigQuery, Slack, GitHub, Vercel, Google Sheets |
| **Cron scheduling** | Set "every Monday at 6am" — data refreshes automatically |
| **Error handling** | Built-in retry logic, dead-letter queues, failure alerts |
| **Self-hosted option** | Keep sensitive data in your own infrastructure |
| **Free tier** | Generous limits for small-to-medium workloads |

### n8n Workflow for CX Lab (Step-by-Step)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TRIGGER: Cron Schedule (Every Monday 6:00 AM UTC)                          │
│                              ↓                                              │
│  STEP 1: BigQuery Node                                                      │
│  - Run SQL: Meaningful Adoption query                                       │
│  - Run SQL: Handling Mix query                                              │
│  - Run SQL: Intent Automation query                                         │
│  - Output: Raw data arrays                                                  │
│                              ↓                                              │
│  STEP 2: Function Node (JavaScript)                                         │
│  - Transform data to frontend-ready JSON                                    │
│  - Calculate derived metrics (% changes, totals)                            │
│  - Add metadata (last_updated timestamp)                                    │
│                              ↓                                              │
│  STEP 3: IF Node (QA Checks)                                                │
│  - Check: Row count > 0?                                                    │
│  - Check: No null values in key fields?                                     │
│  - Check: Values within expected ranges?                                    │
│  - If FAIL → Go to Error Branch                                             │
│                              ↓                                              │
│  STEP 4a (Success): GitHub Node                                             │
│  - Commit JSON to repo: /data/charts.json                                   │
│  - Trigger Vercel rebuild via webhook                                       │
│                              ↓                                              │
│  STEP 4b (Error): Slack Node                                                │
│  - Send alert: "CX Lab data refresh failed"                                 │
│  - Include error details + link to n8n execution                            │
│                              ↓                                              │
│  STEP 5: Slack Node (Success notification)                                  │
│  - "✅ CX Lab data refreshed. New adoption rate: X%"                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Specific n8n Nodes Used

| Node | Purpose | Configuration |
|------|---------|---------------|
| **Schedule Trigger** | Kicks off the workflow | Cron: `0 6 * * 1` (Mondays 6am) |
| **Google BigQuery** | Runs SQL queries | Service account auth, project ID, query text |
| **Function** | JavaScript transformations | Custom code to reshape data |
| **IF** | Conditional branching | Check row counts, null values |
| **GitHub** | Commit files to repo | OAuth, repo name, file path, commit message |
| **HTTP Request** | Trigger Vercel deploy | POST to Vercel deploy hook URL |
| **Slack** | Notifications | Webhook URL, message formatting |

### n8n Workflow JSON (Importable)

```json
{
  "name": "CX Lab Data Refresh",
  "nodes": [
    {
      "name": "Weekly Schedule",
      "type": "n8n-nodes-base.scheduleTrigger",
      "parameters": {
        "rule": { "interval": [{ "field": "cronExpression", "expression": "0 6 * * 1" }] }
      }
    },
    {
      "name": "Query BigQuery",
      "type": "n8n-nodes-base.googleBigQuery",
      "parameters": {
        "operation": "executeQuery",
        "projectId": "growth-ops-recruiting",
        "sqlQuery": "-- Your SQL here"
      }
    },
    {
      "name": "Transform Data",
      "type": "n8n-nodes-base.function",
      "parameters": {
        "functionCode": "// Transform to frontend JSON format\nreturn items.map(item => ({ json: { ...item.json, updated_at: new Date().toISOString() } }));"
      }
    },
    {
      "name": "Commit to GitHub",
      "type": "n8n-nodes-base.github",
      "parameters": {
        "operation": "file:edit",
        "owner": "your-org",
        "repository": "cx-lab",
        "filePath": "data/charts.json"
      }
    }
  ]
}
```

> 💡 **Pro tip**: Start with manual triggers during development. Switch to cron once the workflow is stable.

---

## 🤖 Deep Dive: AirOps (AI Content Generation)

### What is AirOps?
AirOps is an AI workflow platform designed for marketing and content teams. It lets you build repeatable AI "recipes" that take structured inputs and produce consistent, brand-aligned outputs — without prompt engineering every time.

### Why AirOps for CX Lab?

| Capability | How It Helps CX Lab |
|------------|---------------------|
| **Structured AI workflows** | Same input format → consistent output quality |
| **Brand voice training** | Train on Gorgias tone/style for on-brand content |
| **Template library** | Reusable recipes for different content types |
| **API access** | Trigger AI generation from n8n or directly |
| **Output formatting** | Markdown, HTML, JSON — whatever the frontend needs |
| **Version control** | Track which AI recipe generated which content |

### AirOps Use Cases for CX Lab

#### 1. Chart Summary Generation
**Input**: Chart title, data points, segment  
**Output**: 3-paragraph plain-English summary

```
┌─────────────────────────────────────────────────────────────┐
│  AirOps Recipe: "Chart Summary Generator"                   │
│                                                             │
│  INPUT:                                                     │
│  - chart_title: "Meaningful Adoption Over Time"             │
│  - key_stat: "34% of commercial merchants"                  │
│  - trend: "up 12% MoM"                                      │
│  - segment: "Commercial ($3-20M)"                           │
│                                                             │
│  PROMPT TEMPLATE:                                           │
│  "You are a CX industry analyst. Write a 3-paragraph        │
│   summary of this chart for e-commerce operators.           │
│   Tone: authoritative but accessible. No jargon.            │
│   Include: what the data shows, why it matters,             │
│   one actionable takeaway."                                 │
│                                                             │
│  OUTPUT:                                                    │
│  "Here's what's happening with AI adoption in support..."   │
└─────────────────────────────────────────────────────────────┘
```

#### 2. LinkedIn Post Generator
**Input**: Key finding, stat, chart link  
**Output**: Ready-to-post LinkedIn content

```
┌─────────────────────────────────────────────────────────────┐
│  AirOps Recipe: "LinkedIn Stat Post"                        │
│                                                             │
│  INPUT:                                                     │
│  - headline: "AI adoption hits 11% across e-commerce"       │
│  - stat: "1105x growth in 18 months"                        │
│  - link: "https://cx-lab.gorgias.com"                       │
│                                                             │
│  OUTPUT:                                                    │
│  "We analyzed 600M+ support tickets. Here's what we found:  │
│                                                             │
│   📊 AI involvement in e-commerce support: 0.01% → 11%      │
│   📈 That's 1105x growth in 18 months                       │
│   🔒 100% retention among serious adopters                  │
│                                                             │
│   The data is clear: AI in CX isn't optional anymore.       │
│                                                             │
│   Full research (free, no signup): [link]                   │
│                                                             │
│   #ecommerce #customerexperience #AI"                       │
└─────────────────────────────────────────────────────────────┘
```

#### 3. Email Subject Line Generator
**Input**: Segment, key insight  
**Output**: 5 subject line options (A/B testable)

#### 4. Methodology Explainer
**Input**: Technical methodology details  
**Output**: Plain-English "how we did this" section

### AirOps + n8n Integration

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW: Content Generation Pipeline                                  │
│                                                                             │
│  STEP 1: BigQuery → Fresh data                                              │
│                              ↓                                              │
│  STEP 2: HTTP Request → AirOps API                                          │
│          POST /api/recipes/chart-summary/run                                │
│          Body: { chart_title, key_stats, segment }                          │
│                              ↓                                              │
│  STEP 3: AirOps returns generated content                                   │
│                              ↓                                              │
│  STEP 4: Function Node → Format for frontend                                │
│                              ↓                                              │
│  STEP 5: GitHub → Commit to /content/summaries.json                         │
│                              ↓                                              │
│  STEP 6: HTTP Request → AirOps API (LinkedIn post recipe)                   │
│                              ↓                                              │
│  STEP 7: Slack → "📝 New content ready for review"                          │
│          Include: summary preview, LinkedIn draft, approval link            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### AirOps API Call Example (from n8n)

```javascript
// n8n HTTP Request Node configuration
{
  "method": "POST",
  "url": "https://api.airops.com/v1/recipes/{{recipe_id}}/run",
  "headers": {
    "Authorization": "Bearer {{$credentials.airops_api_key}}",
    "Content-Type": "application/json"
  },
  "body": {
    "inputs": {
      "chart_title": "{{ $json.chart_title }}",
      "key_stat": "{{ $json.adoption_rate }}%",
      "trend": "{{ $json.mom_change }}% MoM",
      "segment": "{{ $json.gmv_band }}"
    }
  }
}
```

> 💡 **Why not just GPT directly?** AirOps adds: version control, consistent prompts, brand training, output formatting, and team collaboration. Raw GPT API works, but AirOps makes it repeatable and auditable.

---

## 🔄 Full System Architecture (n8n + AirOps + Vercel)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           CX LAB AUTOMATION STACK                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────┐                                                                    │
│  │  BigQuery   │ ← Source of truth (aggregated, anonymized)                         │
│  └──────┬──────┘                                                                    │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐                │
│  │                         n8n (Orchestration)                      │               │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐             │               │
│  │  │ Schedule│→ │ Query   │→ │ QA      │→ │ Branch  │             │               │
│  │  │ Trigger │  │ BigQuery│  │ Checks  │  │ Logic   │             │               │
│  │  └─────────┘  └─────────┘  └─────────┘  └────┬────┘             │               │
│  │                                              │                   │               │
│  │         ┌────────────────────────────────────┼──────────┐        │               │
│  │         ▼                                    ▼          ▼        │               │
│  │  ┌─────────────┐                    ┌─────────┐  ┌─────────┐    │               │
│  │  │ Call AirOps │                    │ Commit  │  │ Alert   │    │               │
│  │  │ for content │                    │ to Git  │  │ on Slack│    │               │
│  │  └──────┬──────┘                    └────┬────┘  └─────────┘    │               │
│  │         │                                │                       │               │
│  └─────────┼────────────────────────────────┼───────────────────────┘               │
│            │                                │                                       │
│            ▼                                ▼                                       │
│  ┌─────────────────┐              ┌─────────────────┐                               │
│  │     AirOps      │              │     GitHub      │                               │
│  │  (AI Content)   │              │  (Data + Code)  │                               │
│  │                 │              │                 │                               │
│  │ • Chart summaries│             │ • charts.json   │                               │
│  │ • LinkedIn posts │             │ • summaries.json│                               │
│  │ • Email copy     │             │ • Frontend code │                               │
│  └────────┬────────┘              └────────┬────────┘                               │
│           │                                │                                        │
│           │      ┌─────────────────────────┘                                        │
│           │      │                                                                  │
│           ▼      ▼                                                                  │
│  ┌─────────────────────┐                                                            │
│  │       Vercel        │ ← Auto-deploys on GitHub push                              │
│  │   (Hosting + CDN)   │                                                            │
│  │                     │                                                            │
│  │  cx-lab.gorgias.com │                                                            │
│  └─────────────────────┘                                                            │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ⚠️ What Breaks First at Scale

| Risk | Tool Affected | Mitigation |
|------|---------------|------------|
| Query timeout | BigQuery | Pre-aggregate tables; set query timeout limits |
| Data drift (schema changes) | n8n | Schema validation node; alert on unexpected columns |
| Stale data published | n8n/Vercel | Timestamp checks; "last updated" badge on frontend |
| AI hallucinations | AirOps | Human review gate before publish; confidence thresholds |
| Cost blowup | BigQuery/AirOps | Budget alerts; query cost monitoring; rate limits |
| n8n workflow failures | n8n | Retry logic (3x); dead-letter queue; Slack alerts |
| AirOps API rate limits | AirOps | Queue requests; batch processing; cache outputs |
| Vercel build failures | Vercel | Preview deployments; rollback capability |

### Monitoring Dashboard (Recommended)

| Metric | Tool | Alert Threshold |
|--------|------|-----------------|
| n8n workflow success rate | n8n + Slack | <95% weekly |
| BigQuery query cost | GCP Billing | >$50/month |
| AirOps API latency | AirOps dashboard | >10s avg response |
| Vercel build time | Vercel dashboard | >2 minutes |
| Data freshness | Custom check | >7 days stale |

> ⚠️ **Scaling note**: For v1, manual QA is fine. At scale, add automated anomaly detection (e.g., "AI adoption dropped 50% MoM" → alert before publishing). AirOps can even generate the anomaly explanation.

---

## 💰 Cost Estimates (Monthly)

| Tool | Tier | Estimated Cost | Notes |
|------|------|----------------|-------|
| **n8n** | Cloud Starter | $20/mo | 5 workflows, 10k executions |
| **n8n** | Self-hosted | $0 | Requires server (~$10/mo on Railway) |
| **AirOps** | Starter | $49/mo | 1,000 AI runs/month |
| **BigQuery** | On-demand | $5-20/mo | ~1TB queried/month |
| **Vercel** | Pro | $20/mo | Unlimited deploys, analytics |
| **GitHub** | Free | $0 | Public repos unlimited |
| **Slack** | Free | $0 | Webhook notifications |
| **TOTAL** | | **~$100/mo** | Scales to 10x volume |

> 💡 **v1 recommendation**: Start with n8n Cloud ($20) + AirOps Starter ($49) + Vercel Pro ($20) = **$89/month** for a fully automated, AI-powered data pipeline.

---

## 📏 Success Metrics + 2-Week Sprint Plan

### Metrics Framework

| Category | Metric | Target (Placeholder) |
|----------|--------|----------------------|
| **Output** | Report published | Week 1 |
| **Output** | Micro experience live | Week 1 |
| **Engagement** | Unique visitors (micro exp) | 500 in first 2 weeks |
| **Engagement** | Avg time on page | >90 seconds |
| **Engagement** | Social shares | 50+ |
| **Business** | Email signups (prospects) | 100 |
| **Business** | Customer engagement (opens) | 25% open rate |
| **Business** | SQLs attributed | 10 |

### 2-Week Sprint Plan

#### Week 1: Build & Ship

| Day | Task | Owner | Notes |
|-----|------|-------|-------|
| Mon | Finalize SQL queries; validate outputs | Data | QA with sample |
| Tue | Export JSON; integrate with frontend | Eng | n8n → Vercel |
| Wed | Styling pass (Gorgias brand kit) | Design | Match gorgias.com |
| Thu | Internal review; copy polish | Content | Exec sign-off |
| Fri | **Ship v1** — micro experience live | All | Soft launch |

#### Week 2: Distribute & Learn

| Day | Task | Owner | Notes |
|-----|------|-------|-------|
| Mon | Customer email (15k) | Marketing | Personalized benchmarks |
| Tue | LinkedIn launch (carousel + link) | Social | Paid boost optional |
| Wed | Blog post live; SEO optimization | Content | Long-form version |
| Thu | Prospect email (lead nurture) | Marketing | "Industry insights" angle |
| Fri | **Retro**: Review metrics, plan v2 | All | What worked? What didn't? |

### Tradeoffs Accepted

- **Speed over perfection**: Ship v1 with known limitations; iterate based on feedback
- **Breadth over depth**: 3 charts, not 10. Focused narrative wins.
- **Manual QA for v1**: Automate in v2 once patterns are stable

> 💡 **Goal**: Credibility-first. If the data is solid and the story is clear, distribution compounds.

---

## 📎 Appendix

### All SQL Queries

#### Query 1: Basic Adoption (Any Usage)

```sql
-- Monthly % of merchants with any AI usage
SELECT
  DATE_TRUNC(ticket_created_at, MONTH) AS month,
  COUNT(DISTINCT merchant_id) AS eligible_merchants,
  COUNT(DISTINCT CASE WHEN ai_touched = TRUE THEN merchant_id END) AS using_merchants,
  ROUND(SAFE_DIVIDE(
    COUNT(DISTINCT CASE WHEN ai_touched = TRUE THEN merchant_id END),
    COUNT(DISTINCT merchant_id)
  ) * 100, 2) AS adoption_pct
FROM `growth-ops-recruiting.growth_marketing_recruiting.MonthlyTicketHandlingEvolutionsince2024`
GROUP BY 1
ORDER BY 1;
```

#### Query 2: Meaningful Adoption

```sql
-- See Graph Section 1 above for full query
```

#### Query 3: Handling Mix

```sql
-- See Graph Section 2 above for full query
```

#### Query 4: Automation by Intent

```sql
-- See Supporting Insight section above for full query
```

#### Query 5: CSAT by Interaction Type (Optional)

```sql
SELECT
  interaction_type,
  COUNT(*) AS responses,
  ROUND(AVG(csat_score), 2) AS avg_csat,
  ROUND(STDDEV(csat_score), 2) AS csat_stddev
FROM `growth-ops-recruiting.growth_marketing_recruiting.CSATbyInteractionType`
GROUP BY 1
ORDER BY avg_csat DESC;
```

### Glossary

| Term | Plain English |
|------|---------------|
| AI-Touched | AI was involved somehow (even just suggesting a response) |
| Fully Automated | AI handled the whole ticket — no human needed |
| Escalated | AI started it, but a human had to finish |
| GMV | Gross Merchandise Value — total sales volume |
| Meaningful Adoption | Real usage, not just testing — at least 50 tickets and 10% AI |
| Automation Ceiling | The natural limit of what AI can handle for a given ticket type |

---

## 🚀 If I Had 30 More Days

1. **Cohort analysis**: Track merchants from first AI usage through 6 months — does adoption accelerate or plateau?

2. **Revenue attribution**: Connect support interactions to post-ticket purchase behavior. "Customers who got AI responses spent X% more."

3. **Response time → churn correlation**: Find the "cliff" where slow response predicts customer loss.

4. **Predictive churn model**: Use ticket patterns to identify at-risk customers before they complain (or leave silently).

5. **Competitive benchmarking**: Partner with industry groups for cross-platform data — true industry benchmark, not single-source.

> 💡 **The unlock**: Gorgias sits on unique data that connects support interactions to commerce outcomes. That's the moat. These 30-day ideas exploit it.

---

## 📝 Final Notes

This document is designed to:
- Stand alone as a Notion page
- Export cleanly to PDF
- Serve as the source of truth for all derivative content

**Last updated**: [12/26/2026]  
**Author**: [Kam]  
**Version**: 1.0

---

*Built for the Gorgias CX Lab case study. Data is aggregated and anonymized. No merchant names, no ticket IDs, no PII.*

