# Gorgias CX Lab — Public Industry Research Experience (POC)

## Purpose
Build a **public-facing, industry-level research experience** called **Gorgias CX Lab** that turns aggregated ecommerce support data into **credible, bookmark-worthy insights** for merchants — including **non-Gorgias customers**.

This is NOT a product dashboard.
This is NOT customer-specific tooling.
This IS **industry thought leadership**, modeled after:
- Ramp Economics Lab (ramp.com/data)
- AirOps Research Reports
- Harvey AI Research Labs

The goal is to make a merchant say:
> "This helped me understand what's happening in ecommerce customer experience right now."

---

## Audience
Primary: Ecommerce operators, founders, CX leaders (non-customers included)  
Secondary: Analysts, investors, operators benchmarking CX maturity  

Assume the reader **does not know Gorgias** and **does not care about internal features**.

---

## Core Principles (Non-Negotiable)

### 1. Industry Framing First
- Never say "our customers" or "our product"
- Always say:
  - "Across ecommerce brands"
  - "Across thousands of online merchants"
  - "Aggregated industry data"
- Every chart must answer: **What does this mean for ecommerce as a whole?**

### 2. Fewer Charts, Higher Signal
- 2–3 **hero-quality charts** is better than 10 dashboards
- Each chart must have:
  - A clear headline
  - A one-sentence takeaway
  - A "Why this matters" explanation

### 3. Narrative Over Metrics
Metrics exist to support **stories**, not the other way around.
Each section should explain:
- What we're seeing
- Why it's happening
- What merchants should do about it

### 4. Methodology Builds Trust
Like Ramp:
- Explain data source
- Explain aggregation
- Explain limitations
- Explain why this is more reliable than surveys

---

## Design & Brand Guidelines (Strict)

### Colors (Exact)
- Primary Accent (Coral): `#FF9780`
- Navy (Primary Text): `#0F172A`
- Secondary:
  - Purple: `#9333EA`
  - Teal: `#0EA5E9`
  - Green: `#10B981`
- Neutrals:
  - White: `#FFFFFF`
  - Light Gray: `#F8FAFC`
  - Mid Gray (Body): `#64748B`
  - Dark Gray: `#1E293B`

### Typography
- Font: **Inter** (Google Fonts)
- Large, confident headlines
- Minimalist layout
- No clutter

---

## Core Insights to Highlight (From Data)

### Insight 1: AI Adoption Is Now an Industry Standard
Frame as:
> "AI support is no longer experimental — it's the default operating model for modern ecommerce brands."

Use aggregated monthly adoption trends.

---

### Insight 2: The Automation Ceiling (Critical Thought Leadership)
Frame as:
> "Every ecommerce brand hits the same automation wall — and it's not a tooling problem."

Show that:
- Automation plateaus
- Certain intents consistently require human involvement
- This ceiling appears **across the industry**, not just one vendor

---

### Insight 3: Automation Trades Cost for Complexity
Frame as:
> "Automation reduces cost — but not uniformly. The real gains come from knowing *where* automation breaks."

Compare:
- Fully automated
- AI with handover
- Human-only handling

---

## Chart Requirements (Public-Friendly)

### Chart 1 — Industry AI Adoption Index (Hero Chart)
**Line chart**
- X: Month
- Y: % of ecommerce brands using AI support
- Clear annotation when adoption accelerates

**Why this matters**
Shows structural shift in how ecommerce operates.

---

### Chart 2 — The Automation Ceiling by Inquiry Type
**Bar or scatter plot**
- X: Inquiry intent
- Y: Automation success rate
- Overlay: handover %

**Why this matters**
Reframes expectations. Automation isn't "failing" — it has natural limits.

---

### Chart 3 — Cost vs Satisfaction Tradeoff
**Grouped bars**
- Resolution type vs CSAT
- Cost per ticket overlaid

**Why this matters**
Helps merchants understand the *economics* of CX decisions.

---

## Methodology Section (Required)
Explain:
- Data is aggregated and anonymized
- Covers millions of ecommerce support interactions
- Spans multiple verticals and merchant sizes
- Uses behavioral data, not surveys
- Limitations: free tools, partial adoption, unseen offline workflows

Tone: factual, neutral, transparent.

---

## Technical Expectations
- React + modern component structure
- Chart.js or Recharts
- Deployed on Vercel
- Designed so future reports can be added easily
- Placeholder data acceptable but must be realistic and internally consistent

---

## What Success Looks Like
Someone unfamiliar with Gorgias should:
- Understand ecommerce CX trends
- Learn something non-obvious
- Trust the methodology
- Want to share or bookmark the page

This should feel like:
> "A real research initiative launching in 2026."

