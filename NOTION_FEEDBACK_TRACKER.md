# CX Lab Notion Feedback Tracker

**Document:** 🔬 CX Lab: Final Deliverable  
**Date:** January 6, 2026  
**Status:** ✅ Feedback collected — Ready for implementation

---

## 📋 Complete Guide Available

**See:** [`CX_Lab_Feedback_Complete_Guide.md`](./CX_Lab_Feedback_Complete_Guide.md) for the full implementation guide with:
- Action items checklist
- Content templates
- Detailed fixes for each issue

---

## Quick Summary

### ⚠️ Critical Issues (Fix Before Launch)
| # | Issue | Fix |
|---|-------|-----|
| 1 | Ticket Volume unclear | Add "(AI + Human combined)" to all mentions |
| 2 | Quality claims need data | Add data analysis OR disclaimer |
| 3 | "No product changes" false | Acknowledge platform improvements (agentic architecture) |

### 📌 Important Issues (Should Fix)
| # | Issue | Fix |
|---|-------|-----|
| 4 | Missing macro "Why" | Add conversational commerce connection |
| 5 | Launch day timing | Use peak times for primary channels |
| 6 | Reddit strategy | Switch to value-first approach (AMA/data share) |

### 💡 Nice to Have
| # | Issue | Fix |
|---|-------|-----|
| 7 | Press outreach | Add to pre-launch |
| 8 | Examples needed | For Reddit AMA, podcasts, newsletters |
| 9 | AI avatar strategy | Clarify: real person or generic AI, not CEO clone |

---

## Detailed Feedback Comments

### Comment #1
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #1: Efficiency Multiplier → "ticket volume" text |
| **Section** | "AI-influenced revenue grew from 0.26% to 1.84% of GMV—a **7x increase**—while **ticket volume** dropped 33%." |

**Feedback:**
> "@K M would this be all tickets, just AI-tickets or just human-tickets? would be good to clarify as the report tries to navigate this hybrid approach narrative"

**Action Required:** Clarify what "ticket volume" refers to (all tickets, AI-only, or human-only) to support the hybrid approach narrative.

**Status:** ⏳ Pending

---

### Analysis & Proposed Fix

**What the data actually shows:**

Looking at `revenueInfluenceData` in `AIRevenueInfluenceChart.tsx`, `totalTickets` represents **ALL support tickets** across the platform:

| Month | Total Tickets |
|-------|---------------|
| Jan '25 | 27,330,412 |
| Dec '25 | 19,522,957 |

This is ~28-33% reduction in **total support volume** (all tickets: AI-resolved + human-resolved + hybrid handovers).

**Why this matters for the narrative:**
The point is that total support demand dropped (fewer tickets needed) while AI-influenced revenue grew 7x. This shows efficiency gains across the board—not just AI tickets.

**Proposed text changes:**

**Option A - Add clarification in parentheses:**
> "AI-influenced revenue grew from 0.26% to 1.84% of GMV—a **7x increase**—while **total ticket volume** (all support interactions) dropped 33%."

**Option B - More explicit hybrid framing:**
> "AI-influenced revenue grew from 0.26% to 1.84% of GMV—a **7x increase**—while **overall support volume dropped 33%** across AI, human, and hybrid interactions."

**Option C - Add context sentence:**
> "AI-influenced revenue grew from 0.26% to 1.84% of GMV—a **7x increase**—while ticket volume dropped 33%. This represents total support demand—AI-resolved, human-resolved, and hybrid handovers combined—showing efficiency gains across all interaction types."

**Recommendation:** Option A or B for conciseness. The methodology section already defines this metric, so a brief clarification inline should suffice.

---

### Comment #2
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #1 → "The surprise" section |
| **Section** | "Most systems break under 12x volume—this one scaled." |

**Feedback:**
> "Commenting here as an example: I noticed there're a couple claims that would require a source to back. Curious to know where you retrieved this info - is it possible this claim is AI generated? @K M"

**Action Required:** Either cite a source for the "12x volume" claim OR remove/rephrase if it's not backed by data.

**Status:** ⏳ Pending

**Analysis:**
This claim appears to be a general industry observation rather than data-backed. Options:
1. **Remove it** — Simplify to: "AI influence held steady at 1.8% even during BFCM when GMV spiked to $1.1B."
2. **Rephrase without the unsourced claim** — "AI influence held steady at 1.8% even as GMV surged 12x during BFCM."
3. **Find a source** — Look for industry benchmarks on system scaling during peak traffic.

**Recommendation:** Option 2 — keeps the 12x fact (which IS in the data: GMV went from ~$100M to $1.2B) without the unsourced "most systems break" claim.

---

### Comment #3
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #1 → "Why merchants should care" section |
| **Section** | "The ROI math changes completely." |

**Feedback:**
> "@K M what does this mean?"

**Action Required:** Clarify or expand on what "ROI math changes completely" means.

**Status:** ⏳ Pending

**Analysis:**
The phrase is vague. It's trying to say: "When AI drives revenue (not just cuts costs), the ROI calculation shifts from cost-savings to revenue generation."

**Proposed rewrites:**

**Option A - Explain the shift:**
> "The ROI calculation shifts: AI becomes a revenue center, not just a cost reduction."

**Option B - Be more specific:**
> "ROI shifts from cost-per-ticket savings to revenue-per-interaction gains."

**Option C - Remove and let the data speak:**
> Just delete the sentence. The preceding text already makes the point.

**Recommendation:** Option A — clearer and directly explains the shift.

---

### Comment #4
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #1 → "Why merchants should care" section |
| **Section** | "This proves AI isn't just a cost-cutter—it's a **revenue driver**." |

**Feedback:**
> "The graph doesn't address how AI is cutting costs. It's true AI is a cost cutting tool (for a good portion of brands), we just need to make sure we show that to sustain the claim @K M"

**Action Required:** Either show cost-cutting data to support the claim, OR remove the "cost-cutter" reference.

**Status:** ⏳ Pending

**Analysis:**
Valid point. The Efficiency Multiplier graph shows:
- ✅ Revenue influence growth (7x)
- ✅ Ticket volume reduction (33%)
- ❌ Does NOT show cost savings directly

The "cost-cutter" framing implies we're comparing cost savings, but the graph only shows revenue influence.

**Proposed fixes:**

**Option A - Remove the cost-cutter comparison:**
> "This proves AI is a **revenue driver**. If AI can influence 1.8% of GMV while handling 33% fewer tickets, your support team can focus on high-value conversations that close sales."

**Option B - Reframe as implied cost savings (ticket reduction = cost reduction):**
> "This proves AI delivers on both fronts—**efficiency** (33% fewer tickets) and **revenue** (7x influence growth). Your support team can focus on high-value conversations that close sales."

**Option C - Add explicit cost data from methodology:**
Reference the `costSatisfactionData` which shows:
- Fully Automated: $0.52/ticket
- Human Only: $11.80/ticket
> "AI cuts costs (automated tickets cost $0.52 vs $11.80 for human-only) AND drives revenue (7x influence growth)."

**Recommendation:** Option B — acknowledges both efficiency and revenue without requiring additional cost data that may not be in this specific graph's scope.

---

## Graph #2: The Quality Flywheel (77% → 85%)

### Comment #5
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #2 → "The surprise" section |
| **Section** | "Quality improved **without major product changes**—merchants who invested in their knowledge base saw the biggest gains." |

**Feedback:**
> "@K M this isn't necessarily true, the p&e team has been focusing on improving quality for most of H2 which has come into fruition with the updated agentic architecture, amongst other changes. Not saying you would've known this of course, but need to be wary of unsustained claims"

**Action Required:** The claim that quality improved "without major product changes" is **factually incorrect**. The P&E team DID make product changes (agentic architecture updates in H2). Need to reframe.

**Status:** ⏳ Pending

**Analysis:**
This is a critical correction. The original narrative implied merchant effort drove quality gains, but in reality, Gorgias product improvements (agentic architecture) were a major factor.

**Proposed fixes:**

**Option A - Acknowledge both factors:**
> "Quality improved through a combination of product enhancements and merchant investment—brands who invested in their knowledge base saw the biggest gains from these improvements."

**Option B - Remove the unsupported claim entirely:**
> "Quality improved from 77% to 85% over 5 months. AI quality is a function of both platform capability and merchant effort."

**Option C - Reframe as product + merchant synergy:**
> "Quality improved as Gorgias enhanced its AI capabilities—and merchants who invested in their knowledge base amplified those gains."

**Recommendation:** Option C — acknowledges the product work while still giving merchants credit for KB investment (if that data exists).

---

### Comment #6
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #2 → "Repeat to a colleague" callout |
| **Section** | "AI quality isn't magic—it's investment. Merchants who train their AI see 8+ point quality gains." |

**Feedback:**
> "@K M how do we know this is true? do we have any insight on merchants who updated their KBs vs those who didn't?"

**Action Required:** Verify if there's data comparing KB-updated merchants vs. non-updated merchants. If not, remove or soften the claim.

**Status:** ⏳ Pending

**Analysis:**
The "8+ point" claim needs data backing. Questions to answer:
1. Is there data segmenting merchants by KB investment?
2. Can we correlate quality score improvements with KB updates?
3. If no data exists, this claim should be removed.

**Proposed fixes:**

**Option A - If data exists:**
> Keep as-is, but add source reference.

**Option B - If no data, soften the claim:**
> "AI quality isn't magic—it's investment. Merchants who actively train their AI tend to see stronger quality gains."

**Option C - Remove the specific number:**
> "AI quality isn't magic—it reflects the effort you put into training and knowledge base development."

**Recommendation:** Option C unless you have segmented data to back the 8+ point claim.

---

### Comment #7
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | 5 hours ago |
| **Location** | Graph #2 → Same "8+ points" claim |
| **Section** | Same as Comment #6 |

**Feedback:**
> "@K M do we know if the 8+ points in quality came from merchants who optimized their AI Agent?"

**Action Required:** Same as Comment #6 — need to verify data source for the 8-point claim.

**Status:** ⏳ Pending

**Analysis:**
This reinforces Comment #6. The question is specifically asking: "Did merchants who optimized their AI Agent see 8+ points, or is this an aggregate number?"

**Key questions to answer:**
1. Where did the 77% → 85% (8 point) improvement come from?
2. Is this across ALL merchants, or only those who optimized?
3. Is there any segmentation by merchant behavior?

**If the 8 points is just the aggregate improvement (77% → 85%):**
The claim is misleading because it implies causation (merchants who train → get 8 points) when it might just be correlation or product-driven.

**Proposed fix:**
Reframe to be accurate about what the data shows:
> "Industry-wide, AI quality scores improved from 77% to 85%. Merchants who invest in training and knowledge base development position themselves to benefit most from these gains."

---

---

## 🔮 Future Analysis Suggestions

### Suggestion #1: AI Adopter Segmentation Analysis
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | January 8, 2026 |
| **Location** | Graph #3: Ecommerce AI Index |
| **Type** | Future analysis / methodology enhancement |

**Feedback:**
> "@K M this is interesting. i think removing outliers would've helped draw an even more interesting picture: of the brands that have adopted AI, how much has their automation rate increased? I imagine this avg would be significantly higher than 11% - we could then compare how that bucket is performing against the bucket that hasn't adopted AI in terms of CSAT, revenue influence, total number of tickets, etc. to position conversational commerce as a business foundation 💡"

**Analysis:**
This is a **methodology suggestion for future analysis**, not a text correction. Alessandro proposes:

1. **Segment brands** into AI adopters vs. non-adopters
2. **Remove outliers** to focus on brands actively using AI
3. **Compare key metrics** between segments:
   - Automation rate (likely higher than 11% for adopters)
   - CSAT scores
   - Revenue influence
   - Total ticket volume
4. **Strategic positioning** - Use this comparison to position conversational commerce as a business foundation

**Why this matters:**
The current 11% is an industry-wide average. If we segmented to show "AI adopters average 30%+ automation" vs "non-adopters at 2%", it would create a stronger narrative around competitive advantage.

**Action Type:** 📊 Data team analysis request (not a document fix)

**Status:** 💡 Logged for future consideration

---

---

## 📣 CX Lab Promotion Playbook Feedback

### Playbook Feedback #1: Press/Media Strategy (Ahrefs Backlink Method)
| Field | Details |
|-------|---------|
| **From** | Maxime Sutra |
| **Time** | January 8, 2026 |
| **Location** | Phase 1: Pre-Launch → Day -14 |
| **Section** | "Identify 15 key CX influencers (LinkedIn, Substack, podcasts)" |

**Feedback (Part 1 - The Gap):**
> "I will have included the press too."

The original playbook focused only on influencers (LinkedIn, Substack, podcasts) but missed traditional press/media outlets entirely. Press coverage has higher credibility and SEO impact than influencer mentions.

**Feedback (Part 2 - The Method):**
> "What I recommend is to use Ahrefs and look at the backlinks of our top competitors or partners, identify the medias behind that, and notify them in advance."

**The Ahrefs Backlink Method Explained:**
1. **Go to Ahrefs Site Explorer** → Enter competitor URL (e.g., `zendesk.com/blog/customer-service-statistics`)
2. **Click "Backlinks"** → Filter by:
   - Page type: "Article" or "News"
   - Domain Rating: >50 (quality filter)
   - Time: Last 6-12 months (recent coverage)
3. **Identify media outlets** from the referring domains:
   - OpenAI blog, Medium publications, Investopedia, Shopify blog (as seen in screenshot)
   - Trade publications: TechCrunch, Retail Dive, Modern Retail
4. **Export the list** → Use Hunter.io to find journalist emails
5. **Reach out in advance** with embargo offer before CX Lab launch

**Competitors to Analyze:**
| Competitor | URL to Check | Why |
|------------|--------------|-----|
| Zendesk | zendesk.com/blog/customer-service-statistics | 3,320 backlinks, major industry benchmark |
| Intercom | intercom.com/blog | Product-led content, startup audience |
| Kustomer | kustomer.com/blog | CX-focused, ecommerce angle |
| Freshdesk | freshworks.com/freshdesk | SMB audience coverage |

**Feedback (Part 3 - API Question):**
> "I'm curious how you handle that. Can you check if it is doable via the API?"

**API Feasibility Research:**
✅ Yes, this is doable via API. Ahrefs API v3 supports:
- `backlinks` endpoint - get all backlinks to a target
- `refdomains` endpoint - get referring domains  
- Filter by `domain_rating`, `traffic`, and domain type
- Export up to 10K rows per request

**Automated Workflow (n8n + Ahrefs API):**
```
Weekly trigger → Ahrefs API (fetch competitor backlinks) 
→ Filter: DR>50, type="news/article", last 90 days
→ Dedupe & enrich with Hunter.io (journalist emails) 
→ Output to Notion database / Google Sheets
→ Slack alert: "5 new media outlets found"
```

**Cost Consideration:** 
- Ahrefs API requires Enterprise plan (~$999/mo) OR Ahrefs Connect program (partner access)
- **For CX Lab launch:** Manual approach is sufficient (one-time research)
- **For ongoing monitoring:** API automation makes sense if publishing monthly reports

**Proposed Fix:**
Add to Day -14: "Identify 15 key CX influencers + 10 press/media outlets (use Ahrefs to analyze competitor backlinks: Zendesk, Intercom, Kustomer)"

**Status:** ✅ Applied to Notion

---

### Playbook Feedback #2: Sequential vs Peak Posting
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | January 8, 2026 |
| **Location** | Phase 2: Launch Day |
| **Section** | The sequential 9AM → 10AM → 11AM → 12PM posting schedule |

**Feedback:**
> "Is there a reason why we'd benefit with posting on these channels sequentially as opposed to posting using peak posting times?"

**Analysis:**
Valid question. The current sequential schedule doesn't account for optimal posting times per channel:
- LinkedIn: 8-10 AM EST (Tuesday-Thursday)
- Twitter: 9 AM - 12 PM EST
- Email: Tuesday 10 AM EST
- Reddit: 6-8 AM EST (catch early readers)

**Proposed Fix:**
Revise to use peak times per channel rather than sequential posting. Clarify that coordination matters (CEO + company + email same day) but exact timing should follow platform best practices.

**Status:** ⏳ Pending

---

### Playbook Feedback #3: Reddit AMA Risk
| Field | Details |
|-------|---------|
| **From** | Alessandro Montelli |
| **Time** | January 8, 2026 |
| **Location** | Phase 3: Amplification → Week 1 → Reddit |
| **Section** | "AMA: 'We analyzed 600M support tickets. Ask us anything.'" |

**Feedback:**
> "If we're asking people to 'ask us anything', they will. Lots of risk associated with this, how would you mitigate it?"

**Analysis:**
Valid concern. Reddit AMAs can attract:
- Trolls/bad-faith questions
- Competitor plants
- Off-topic complaints about Gorgias
- Questions we can't/shouldn't answer (pricing, confidential data)

**Proposed Fix:**
Add risk mitigation section:
1. **Pre-AMA prep:** Anticipate 20 tough questions, prepare responses
2. **Moderator coordination:** Work with subreddit mods for rules
3. **Scope boundaries:** "Happy to discuss the data methodology and findings. Product/pricing questions → support team"
4. **Team backup:** Have 2-3 people ready to help respond
5. **Exit strategy:** Know when to wrap up gracefully

Alternative: Instead of AMA, do a "data share" post where we present findings and invite discussion (less open-ended risk).

**Status:** ⏳ Pending

---

### Playbook Feedback #4: Podcast Appearances Strategy
| Field | Details |
|-------|---------|
| **From** | (Feedback Comment) |
| **Time** | January 8, 2026 |
| **Location** | Phase 3: Amplification → Podcasts |
| **Section** | "3 appearances (CX Today, Support Driven, Ecommerce Fuel)" |

**Feedback:**
> "Who will you send to this podcast, or do you just want them to mention it?"

**Analysis:**
Good clarification question. The playbook should specify:
1. Who from Gorgias will appear (CEO, Head of Data, PM)
2. What format (interview vs. mention vs. sponsored segment)
3. Talking points aligned with CX Lab messaging

**Proposed Fix:**
Add spokesperson recommendation: "Send CEO or Head of CX Research for CX Today and Support Driven (thought leadership angle). For Ecommerce Fuel, position as data-backed insights from practitioner perspective."

**Status:** ✅ Applied

---

### Playbook Feedback #5: AI Avatar Video Strategy
| Field | Details |
|-------|---------|
| **From** | (Feedback Comment) |
| **Time** | January 8, 2026 |
| **Location** | Phase 3: Amplification → LinkedIn |
| **Section** | "60-sec explainer video (Synthesia AI avatar)" |

**Feedback:**
> "Interesting. What's your take on that? Did you find any example that is realistic? Do you think it's possible to clone our CEO?"

**Analysis:**
Valid concern about AI avatar authenticity. Options:
1. **CEO clone** — Possible with HeyGen/Synthesia but may feel uncanny/inauthentic
2. **Generic professional avatar** — Lower risk but less brand connection
3. **Real video with AI editing** — CEO records, AI adds graphics/captions
4. **Skip avatar entirely** — Use motion graphics with voiceover

**Proposed Fix:**
Clarify strategy: "Use generic professional avatar OR motion graphics with voiceover. Avoid CEO deep-fake—authenticity matters more than novelty. Alternative: Real 30-sec CEO video if bandwidth allows."

**Status:** ✅ Applied

---

### Playbook Feedback #6: Webinar Promotion Strategy
| Field | Details |
|-------|---------|
| **From** | (Feedback Comment) |
| **Time** | January 8, 2026 |
| **Location** | Phase 3: Amplification → Webinar |
| **Section** | "500+ registrations" |

**Feedback:**
> "Love it! How would you handle the promotion?"

**Analysis:**
Positive feedback but requests promotion details. Should specify:
1. Promotion channels (email list, LinkedIn ads, partner cross-promo)
2. Timeline (how many days before?)
3. Incentives (early bird, exclusive content)

**Proposed Fix:**
Add promotion plan: "Promote via: (1) Email to existing list 2 weeks + 1 week + 1 day before, (2) LinkedIn sponsored posts targeting CX/ecommerce leaders, (3) Partner cross-promotion with CX Today/Support Driven, (4) Gorgias community/Slack channels."

**Status:** ✅ Applied

---

*More feedback comments will be added as they are received.*

