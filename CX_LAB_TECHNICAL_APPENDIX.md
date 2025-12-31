# 🔧 CX Lab: Technical Appendix

> **This document contains all Claude Opus 4.5 prompts, complete source code, and technical context for the CX Lab project.**
> 
> **Main Deliverable:** [← Back to CX Lab Deliverable](./CX_LAB_DELIVERABLE.md)

---

## 📋 Table of Contents

1. [Claude Opus 4.5 Prompts](#-claude-opus-45-prompts)
2. [Complete Source Code](#-complete-source-code)
3. [Data Layer & SQL Queries](#-data-layer--sql-queries)
4. [Component Architecture](#-component-architecture)
5. [AI Service Integration](#-ai-service-integration)
6. [Deep Dive Article Generation](#-deep-dive-article-generation)

---

## 🤖 Claude Opus 4.5 Prompts

### Prompt 1: Narrative Generation for Insights

**Purpose:** Generate concise, professional summaries for chart insights

```
You are writing for a CX Lab research report (Ramp.com/data style). 

Given this data:
- AI CSAT: 3.77
- Human CSAT: 4.48
- Gap: 0.8 points
- AI share of tickets: 16% → 27% (Jan-Nov 2025)
- Handover rate: 67% → 51%

Write a 50-word insight that:
1. Acknowledges the gap honestly
2. Does NOT position AI as inferior—blame "basic automation" instead
3. Positions purpose-built AI (Gorgias) as the solution
4. Ends with an actionable takeaway for merchants

Tone: Human, clear, authoritative. No jargon. No buzzwords.
```

---

### Prompt 2: Reframing Negative Data

**Purpose:** Position potentially negative AI data in a pro-product light

```
The data shows AI CSAT is lower than human CSAT. However, we are selling 
AI-powered customer service (Gorgias).

Reframe this insight so it:
1. Blames "generic chatbots" or "first-generation automation" for the gap
2. Positions "intelligent AI" or "purpose-built AI" as the solution
3. Uses the merchant quality rate (which IS rising) as evidence
4. Ends with: "The gap closes when brands invest in purpose-built AI"

Do NOT say "AI performs worse" or "AI can't match humans."
```

---

### Prompt 3: Quick Take Summary

**Purpose:** Generate 3-sentence Quick Takes for charts

```
Write a 3-sentence Quick Take for this chart:

Data: AI-influenced revenue grew from 0.26% to 1.84% of GMV (7x).
Ticket volume dropped 33%. BFCM GMV was $1.1B.

Rules:
- First sentence: What the data shows (with numbers)
- Second sentence: The surprising insight
- Third sentence: Why merchants should care
- No em dashes (they look AI-generated)
- Under 60 words total
```

---

### Prompt 4: Case Study Positioning

**Purpose:** Create compelling CTA labels linking to case studies

```
Given: Orthofeet automated 56% of tickets using Gorgias AI Agent.

Write a 1-sentence link label that:
1. Mentions the brand name
2. Includes a specific number
3. Uses an action verb
4. Ends with an arrow (→)

Example output: "See how Orthofeet automated 56% of tickets →"
```

---

### Prompt 5: Key Finding Section (Deep Dive Articles)

**Purpose:** Generate the opening "Key Finding" section of research articles

```
You are writing the opening of a research article. Given:
- Main metric: [X]
- Comparison: [Y vs Z]
- Time period: [dates]

Write a 50-word "Key Finding" that:
1. Leads with the most surprising number
2. States what changed
3. Hints at why it matters
4. No em dashes, no "In conclusion"
```

---

### Prompt 6: Analysis Section ("What Changed?")

**Purpose:** Generate analysis sections explaining data trends

```
You are writing an analysis section for a CX research article.

Context:
- Old approach: [describe]
- New reality: [describe from data]
- Key data points: [list]

Write 4-6 paragraphs that:
1. Opens with the old paradigm ("For years, X was measured by...")
2. Declares it dead ("That playbook is dead.")
3. Explains what's replacing it
4. Ends with "Here's what the data shows:" followed by specific numbers

Tone: Direct, confident, no hedging. Short paragraphs. Bold statements.
```

---

### Prompt 7: BFCM Stress Test Analysis

**Purpose:** Analyze Black Friday/Cyber Monday performance

```
You are analyzing BFCM (Black Friday/Cyber Monday) performance data.

Given:
- Pre-BFCM metric: X
- Peak BFCM metric: Y
- Post-BFCM metric: Z
- GMV during BFCM: $[amount]

Write an analysis that:
1. Frames BFCM as "the ultimate stress test"
2. Shows the numbers before/during/after
3. Interprets what the change (or lack of change) means
4. Explains why any dip isn't a failure
5. Ends with a counterintuitive insight about timing

Do NOT use hedging language. Be declarative.
```

---

### Prompt 8: Action Items Section

**Purpose:** Generate actionable recommendations for merchants

```
You are writing the "What Should You Do?" section.

Given insight: [summary]
Target reader: Ecommerce merchant

Write 4 action items using this exact format:

**If you're [doing X]:** [Action]. [Supporting statement < 25 words]

Categories to cover:
1. Measuring wrong things → measure right things
2. Using generic tools → consider specialized tools
3. Optimizing wrong moment → optimize right moment
4. Worried about scaling → don't worry

End with a memorable one-liner that captures the whole article.
```

---

### Prompt 9: Full Article Generation (n8n Workflow)

**Purpose:** Generate complete deep dive articles from data

```
You are generating a full CX Lab research article.

Input JSON:
{
  "chartType": "efficiency-multiplier",
  "keyMetric": { "from": 0.26, "to": 1.84, "unit": "%", "change": "7x" },
  "supportingMetrics": [...],
  "timeRange": "Jan-Dec 2025",
  "sampleSize": "285M tickets"
}

Output a complete article with these sections:
1. key-finding (type: highlight)
2. what-changed (type: analysis)
3. bfcm-stress-test (type: analysis)
4. who-wins (type: callout)
5. methodology (type: methodology)
6. what-to-do (type: action)

Each section needs:
- id (slug)
- type (for styling)
- title
- content (with **bold** for emphasis)

Format as JSON matching the DeepDive.tsx article structure.
```

---

### Prompt 10: AI Summary Modal (OpenAI Integration)

**Purpose:** Dynamic AI summary generation in the app

```
You are an expert CX industry analyst for Gorgias CX Lab. Generate a concise, professional summary of this ecommerce customer support research:

Title: ${chartTitle}
Subtitle: ${chartSubtitle}
Data Context: ${dataContext}
Project: Gorgias CX Lab - Analysis of 600M+ support interactions across thousands of ecommerce brands

Create a summary with:
1. A brief 2-sentence overview of what this data reveals
2. Three key findings (bulleted with specific data points where available)
3. One actionable insight for ecommerce merchants

Keep it professional, data-focused, and under 200 words. Use clear, authoritative language. Frame insights from an industry perspective, not a product perspective.
```

---

## 💻 Complete Source Code

### 1. AIRevenueInfluenceChart.tsx (Efficiency Multiplier)

**File:** `/src/components/charts/AIRevenueInfluenceChart.tsx`

```typescript
import { motion } from 'framer-motion';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts';
import './Charts.css';

// REAL DATA FROM SQL QUERY - January to December 2025
const revenueInfluenceData = [
  { month: "2025-01-01", label: "Jan '25", totalTickets: 27330412, gmvWeb: 30500017.52, gmvInfluenced: 78081.34, gmvInfluencedRate: 0.256 },
  { month: "2025-02-01", label: "Feb '25", totalTickets: 23175921, gmvWeb: 34447183.44, gmvInfluenced: 213505.13, gmvInfluencedRate: 0.62 },
  { month: "2025-03-01", label: "Mar '25", totalTickets: 25808854, gmvWeb: 57395546.22, gmvInfluenced: 366045.62, gmvInfluencedRate: 0.638 },
  { month: "2025-04-01", label: "Apr '25", totalTickets: 22350919, gmvWeb: 70967747.0, gmvInfluenced: 494673.23, gmvInfluencedRate: 0.697 },
  { month: "2025-05-01", label: "May '25", totalTickets: 26201993, gmvWeb: 101487978.2, gmvInfluenced: 1250228.91, gmvInfluencedRate: 1.232 },
  { month: "2025-06-01", label: "Jun '25", totalTickets: 23767130, gmvWeb: 71726642.8, gmvInfluenced: 1677029.0, gmvInfluencedRate: 2.338 },
  { month: "2025-07-01", label: "Jul '25", totalTickets: 24392137, gmvWeb: 161646054.2, gmvInfluenced: 3790241.05, gmvInfluencedRate: 2.345 },
  { month: "2025-08-01", label: "Aug '25", totalTickets: 23247191, gmvWeb: 282801163.22, gmvInfluenced: 5501281.69, gmvInfluencedRate: 1.945 },
  { month: "2025-09-01", label: "Sep '25", totalTickets: 21115642, gmvWeb: 351129323.99, gmvInfluenced: 6257018.46, gmvInfluencedRate: 1.782 },
  { month: "2025-10-01", label: "Oct '25", totalTickets: 22217845, gmvWeb: 470351213.57, gmvInfluenced: 9266605.38, gmvInfluencedRate: 1.97 },
  { month: "2025-11-01", label: "Nov '25", totalTickets: 25301578, gmvWeb: 1127168410.09, gmvInfluenced: 20732112.71, gmvInfluencedRate: 1.839 },
  { month: "2025-12-01", label: "Dec '25", totalTickets: 19522957, gmvWeb: 657234517.43, gmvInfluenced: 9609075.67, gmvInfluencedRate: 1.462 },
];

export function AIRevenueInfluenceChart() {
  const annotations = [
    { label: 'Ticket Volume Change', value: '−33%', color: '#E8826E' },
    { label: 'Revenue Influence Growth', value: '7×', color: 'var(--success)' },
    { label: 'Influence Rate', value: '0.26% → 1.84%', color: 'var(--text-primary)' },
    { label: 'Peak Influence', value: '2.3%', color: '#4B5EFC' },
  ];

  return (
    <motion.div 
      className="chart-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="chart-annotations">
        {annotations.map((annotation, index) => (
          <div key={index} className="annotation" style={{ '--annotation-color': annotation.color } as React.CSSProperties}>
            <span className="annotation-label">{annotation.label}</span>
            <span className="annotation-value">{annotation.value}</span>
          </div>
        ))}
      </div>
      
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={revenueInfluenceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis 
            dataKey="label" 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border-color)' }}
          />
          <YAxis 
            yAxisId="left"
            tickFormatter={(value) => `$${(value / 1e9).toFixed(1)}B`}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border-color)' }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border-color)' }}
            domain={[0, 3]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}
            formatter={(value: number, name: string) => {
              if (name === 'gmvWeb') return [`$${(value / 1e6).toFixed(1)}M`, 'Total GMV'];
              if (name === 'gmvInfluencedRate') return [`${value.toFixed(2)}%`, 'AI Influence Rate'];
              return [value, name];
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left" 
            dataKey="gmvWeb" 
            fill="#4B5EFC" 
            name="Total GMV"
            radius={[4, 4, 0, 0]}
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="gmvInfluencedRate" 
            stroke="#E8826E" 
            strokeWidth={3}
            dot={{ fill: '#E8826E', strokeWidth: 2 }}
            name="AI Influence Rate"
          />
          <ReferenceLine 
            yAxisId="right" 
            y={1.84} 
            stroke="var(--success)" 
            strokeDasharray="5 5"
            label={{ value: 'Current: 1.84%', position: 'right', fill: 'var(--success)' }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
```

---

### 2. AISatisfactionGapChart.tsx

**File:** `/src/components/charts/AISatisfactionGapChart.tsx`

```typescript
import { motion } from 'framer-motion';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import './Charts.css';

// REAL DATA FROM SQL QUERY - CSAT by channel
const satisfactionGapData = [
  { label: "Jan '25", humanTickets: 877372, aiTickets: 169122, csatHuman: 4.46, csatAiFully: 3.70, handoverPercent: 66.7 },
  { label: "Feb '25", humanTickets: 724308, aiTickets: 140891, csatHuman: 4.50, csatAiFully: 3.72, handoverPercent: 67.2 },
  { label: "Mar '25", humanTickets: 774920, aiTickets: 174529, csatHuman: 4.51, csatAiFully: 3.80, handoverPercent: 65.8 },
  { label: "Apr '25", humanTickets: 760450, aiTickets: 183880, csatHuman: 4.51, csatAiFully: 3.72, handoverPercent: 61.2 },
  { label: "May '25", humanTickets: 784685, aiTickets: 214410, csatHuman: 4.49, csatAiFully: 3.75, handoverPercent: 59.9 },
  { label: "Jun '25", humanTickets: 778478, aiTickets: 222010, csatHuman: 4.49, csatAiFully: 3.77, handoverPercent: 54.9 },
  { label: "Jul '25", humanTickets: 829644, aiTickets: 246991, csatHuman: 4.48, csatAiFully: 3.71, handoverPercent: 50.2 },
  { label: "Aug '25", humanTickets: 773912, aiTickets: 242987, csatHuman: 4.47, csatAiFully: 3.80, handoverPercent: 57.0 },
  { label: "Sep '25", humanTickets: 757223, aiTickets: 235109, csatHuman: 4.47, csatAiFully: 3.82, handoverPercent: 59.4 },
  { label: "Oct '25", humanTickets: 774497, aiTickets: 257157, csatHuman: 4.47, csatAiFully: 3.87, handoverPercent: 54.5 },
  { label: "Nov '25", humanTickets: 864039, aiTickets: 318819, csatHuman: 4.48, csatAiFully: 3.83, handoverPercent: 50.9 },
];

// Key insight: Human CSAT = 4.48, AI CSAT = 3.77, Gap = 0.8 points
// But handover rate improved from 67% to 51% (AI completing more independently)

export function AISatisfactionGapChart() {
  const annotations = [
    { label: 'Human CSAT', value: '4.48', color: 'var(--success)' },
    { label: 'AI CSAT', value: '3.77', color: '#E8826E' },
    { label: 'The Gap', value: '0.8 pts', color: 'var(--text-primary)' },
    { label: 'Handover Improvement', value: '67% → 51%', color: '#4B5EFC' },
  ];

  return (
    <motion.div 
      className="chart-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="chart-annotations">
        {annotations.map((annotation, index) => (
          <div key={index} className="annotation" style={{ '--annotation-color': annotation.color } as React.CSSProperties}>
            <span className="annotation-label">{annotation.label}</span>
            <span className="annotation-value">{annotation.value}</span>
          </div>
        ))}
      </div>
      
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={satisfactionGapData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis 
            dataKey="label" 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <YAxis 
            yAxisId="left"
            domain={[3, 5]}
            tickFormatter={(value) => value.toFixed(1)}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <Tooltip />
          <Legend />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="csatHuman" 
            stroke="var(--success)" 
            strokeWidth={3}
            name="Human CSAT"
          />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="csatAiFully" 
            stroke="#E8826E" 
            strokeWidth={3}
            name="AI CSAT"
          />
          <Bar 
            yAxisId="right" 
            dataKey="handoverPercent" 
            fill="#4B5EFC" 
            opacity={0.3}
            name="Handover Rate"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
```

---

### 3. InsightCard.tsx (Reusable Component)

**File:** `/src/components/InsightCard.tsx`

```typescript
import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './InsightCard.css';

interface InsightCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;      // Chart component
  aiSummary: string;        // Quick take text
  fullAnalysis: string;     // Expandable detailed analysis
  source?: string;
  articleLink?: string;     // Case study link
  articleLabel?: string;
  deepDiveSlug?: string;    // Link to /research/:slug
}

export function InsightCard({
  title,
  subtitle,
  children,
  aiSummary,
  fullAnalysis,
  source,
  articleLink,
  articleLabel,
  deepDiveSlug,
}: InsightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article 
      className="insight-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <header className="insight-card__header">
        <h2 className="insight-card__title">{title}</h2>
        <p className="insight-card__subtitle">{subtitle}</p>
      </header>

      <div className="insight-card__chart">
        {children}
      </div>

      {source && (
        <p className="insight-card__source">Source: {source}</p>
      )}

      <div className="insight-card__content">
        <div className="insight-card__quick-take">
          <h3>Quick Take</h3>
          <p>{aiSummary}</p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="insight-card__analysis"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {fullAnalysis.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className="insight-card__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Read full analysis'}
        </button>
      </div>

      <footer className="insight-card__footer">
        {deepDiveSlug && (
          <Link to={`/research/${deepDiveSlug}`} className="insight-card__deep-dive">
            Read Full Research →
          </Link>
        )}
        {articleLink && articleLabel && (
          <a 
            href={articleLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="insight-card__case-study"
          >
            {articleLabel}
          </a>
        )}
      </footer>
    </motion.article>
  );
}
```

---

### 4. openaiService.ts (AI Integration)

**File:** `/src/services/openaiService.ts`

```typescript
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function generateAISummary(
  chartTitle: string,
  chartSubtitle: string,
  dataContext: string
): Promise<string> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your environment variables.');
  }

  const prompt = `You are an expert CX industry analyst for Gorgias CX Lab. Generate a concise, professional summary of this ecommerce customer support research:

Title: ${chartTitle}
Subtitle: ${chartSubtitle}
Data Context: ${dataContext}
Project: Gorgias CX Lab - Analysis of 600M+ support interactions across thousands of ecommerce brands

Create a summary with:
1. A brief 2-sentence overview of what this data reveals
2. Three key findings (bulleted with specific data points where available)
3. One actionable insight for ecommerce merchants

Keep it professional, data-focused, and under 200 words. Use clear, authoritative language. Frame insights from an industry perspective, not a product perspective.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert CX industry analyst specializing in ecommerce customer support trends and AI adoption patterns.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data: OpenAIResponse = await response.json();
    
    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response generated from OpenAI');
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate AI summary');
  }
}
```

---

## 📊 Data Layer & SQL Queries

### mockData.ts (Complete Data Layer)

**File:** `/src/data/mockData.ts`

```typescript
// ============================================
// REAL DATA FROM BIGQUERY QUERIES
// ============================================

// Automation Mix Index - Shows AI's growing share of ticket handling
// Source: Query 3 - Monthly ticket handling evolution since 2024
export const automationMixData = [
  { month: '2024-01-01', label: 'Jan \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 30340849 },
  { month: '2024-02-01', label: 'Feb \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 28187512 },
  { month: '2024-03-01', label: 'Mar \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 31315812 },
  { month: '2024-04-01', label: 'Apr \'24', noHumanPct: 0.0, aiTouchedPct: 0.02, totalTickets: 30645891 },
  { month: '2024-05-01', label: 'May \'24', noHumanPct: 0.01, aiTouchedPct: 0.04, totalTickets: 29571155 },
  { month: '2024-06-01', label: 'Jun \'24', noHumanPct: 0.01, aiTouchedPct: 0.13, totalTickets: 25888521 },
  { month: '2024-07-01', label: 'Jul \'24', noHumanPct: 0.13, aiTouchedPct: 0.32, totalTickets: 25827522 },
  { month: '2024-08-01', label: 'Aug \'24', noHumanPct: 0.41, aiTouchedPct: 0.68, totalTickets: 25439339 },
  { month: '2024-09-01', label: 'Sep \'24', noHumanPct: 0.93, aiTouchedPct: 1.23, totalTickets: 24589022 },
  { month: '2024-10-01', label: 'Oct \'24', noHumanPct: 1.44, aiTouchedPct: 1.79, totalTickets: 26206463 },
  { month: '2024-11-01', label: 'Nov \'24', noHumanPct: 2.18, aiTouchedPct: 2.44, totalTickets: 29664159 },
  { month: '2024-12-01', label: 'Dec \'24', noHumanPct: 3.23, aiTouchedPct: 3.28, totalTickets: 34216744 },
  { month: '2025-01-01', label: 'Jan \'25', noHumanPct: 4.13, aiTouchedPct: 4.11, totalTickets: 27330412 },
  { month: '2025-02-01', label: 'Feb \'25', noHumanPct: 4.68, aiTouchedPct: 4.68, totalTickets: 23175921 },
  { month: '2025-03-01', label: 'Mar \'25', noHumanPct: 4.88, aiTouchedPct: 5.04, totalTickets: 25808854 },
  { month: '2025-04-01', label: 'Apr \'25', noHumanPct: 5.42, aiTouchedPct: 5.62, totalTickets: 22350919 },
  { month: '2025-05-01', label: 'May \'25', noHumanPct: 5.96, aiTouchedPct: 6.17, totalTickets: 26201993 },
  { month: '2025-06-01', label: 'Jun \'25', noHumanPct: 6.85, aiTouchedPct: 7.05, totalTickets: 23767130 },
  { month: '2025-07-01', label: 'Jul \'25', noHumanPct: 7.63, aiTouchedPct: 8.03, totalTickets: 24392137 },
  { month: '2025-08-01', label: 'Aug \'25', noHumanPct: 8.32, aiTouchedPct: 9.05, totalTickets: 23247191 },
  { month: '2025-09-01', label: 'Sep \'25', noHumanPct: 8.72, aiTouchedPct: 9.63, totalTickets: 21115642 },
  { month: '2025-10-01', label: 'Oct \'25', noHumanPct: 9.37, aiTouchedPct: 10.14, totalTickets: 22217845 },
  { month: '2025-11-01', label: 'Nov \'25', noHumanPct: 10.5, aiTouchedPct: 11.05, totalTickets: 25301578 },
];

// Automation Ceiling by Inquiry Type
export const automationCeilingData = [
  { intent: 'Order Status', automationRate: 92, handoverRate: 8, category: 'transactional' },
  { intent: 'Shipping Updates', automationRate: 88, handoverRate: 12, category: 'transactional' },
  { intent: 'Product Information', automationRate: 76, handoverRate: 24, category: 'informational' },
  { intent: 'Return Requests', automationRate: 71, handoverRate: 29, category: 'transactional' },
  { intent: 'Account Changes', automationRate: 64, handoverRate: 36, category: 'account' },
  { intent: 'Complaints', automationRate: 41, handoverRate: 59, category: 'emotional' },
  { intent: 'Complex Returns', automationRate: 32, handoverRate: 68, category: 'emotional' },
  { intent: 'Refund Disputes', automationRate: 23, handoverRate: 77, category: 'emotional' },
];

// Summary stats computed from real data
const latestData = automationMixData[automationMixData.length - 1];
const totalTicketsAnalyzed = automationMixData.reduce((sum, d) => sum + d.totalTickets, 0);

export const summaryStats = {
  totalInteractions: `${Math.round(totalTicketsAnalyzed / 1000000)}M+`,
  currentAiTouchedPct: `${latestData.aiTouchedPct}%`,
  currentNoHumanPct: `${latestData.noHumanPct}%`,
  growthMultiple: `${Math.round(latestData.aiTouchedPct / 0.01)}x`,
  timeframe: 'Jan 2024 - Nov 2025',
  lastUpdated: 'November 2025',
};

// Type exports
export type AutomationMixDataPoint = typeof automationMixData[number];
export type AutomationCeilingDataPoint = typeof automationCeilingData[number];
```

---

### SQL Queries

#### Query 1: AI Resolution Growth

```sql
SELECT 
  DATE_TRUNC('week', created_at) AS week,
  COUNT(*) AS total_tickets,
  COUNT(CASE WHEN resolved_by = 'ai_agent' THEN 1 END) AS ai_resolved_tickets,
  COUNT(CASE WHEN resolved_by = 'ai_agent' THEN 1 END) * 100.0 / COUNT(*) AS ai_resolution_rate
FROM tickets
WHERE created_at BETWEEN '2025-01-01' AND '2025-10-31'
GROUP BY 1
ORDER BY 1;
```

#### Query 2: GMV + Support-Influenced Revenue

```sql
SELECT 
  DATE_TRUNC('week', order_date) AS week,
  SUM(gmv) AS total_gmv,
  SUM(CASE WHEN support_influenced = true THEN gmv ELSE 0 END) AS support_influenced_gmv,
  SUM(CASE WHEN support_influenced = true THEN gmv ELSE 0 END) * 100.0 / SUM(gmv) AS influence_rate
FROM orders o
LEFT JOIN tickets t ON o.id = t.order_id
WHERE order_date BETWEEN '2025-01-01' AND '2025-11-30'
GROUP BY 1
ORDER BY 1;
```

#### Query 3: CSAT by Channel

```sql
SELECT 
  DATE_TRUNC('month', created_at) AS month,
  AVG(CASE WHEN channel = 'human' THEN csat_score END) AS human_csat,
  AVG(CASE WHEN channel = 'ai_fully_automated' THEN csat_score END) AS ai_csat,
  COUNT(CASE WHEN channel = 'human' THEN 1 END) AS human_tickets,
  COUNT(CASE WHEN channel = 'ai_fully_automated' THEN 1 END) AS ai_tickets
FROM tickets
WHERE csat_score IS NOT NULL
  AND created_at BETWEEN '2025-01-01' AND '2025-11-30'
GROUP BY 1
ORDER BY 1;
```

---

## 🏗️ Component Architecture

### File Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── AIRevenueInfluenceChart.tsx    ← Efficiency Multiplier
│   │   ├── AISatisfactionGapChart.tsx     ← AI Satisfaction Gap
│   │   ├── AutomationMixChart.tsx         ← Automation trends
│   │   ├── MerchantAdoptionChart.tsx      ← Merchant adoption
│   │   ├── AutomationCeilingChart.tsx     ← Automation limits
│   │   └── Charts.css                     ← Shared chart styles
│   ├── InsightCard.tsx                    ← Reusable insight wrapper
│   ├── HeroSection.tsx                    ← Title + animations
│   ├── KeyFindings.tsx                    ← Stat cards
│   ├── MethodologySection.tsx             ← Data transparency
│   └── index.ts                           ← Component exports
├── data/
│   └── mockData.ts                        ← All chart data (from SQL)
├── context/
│   ├── ThemeContext.tsx                   ← Dark/light mode
│   └── LanguageContext.tsx                ← i18n ready
├── pages/
│   ├── DeepDive.tsx                       ← /research/:slug pages
│   └── MoreInsights.tsx                   ← /insights page
├── services/
│   └── openaiService.ts                   ← GPT-4o-mini integration
├── App.tsx                                ← Main app orchestration
└── main.tsx                               ← Entry point
```

---

## 📖 Deep Dive Article Generation

### DeepDive.tsx Article Structure

```typescript
const articles = {
  'efficiency-multiplier': {
    id: 'efficiency-multiplier',
    title: 'The Efficiency Multiplier',
    subtitle: 'How Top Ecommerce Brands Grew Revenue Influence 7x',
    date: 'December 30, 2025',
    readTime: '8 min read',
    chart: 'AIRevenueInfluenceChart',
    tableOfContents: [
      { id: 'key-finding', label: 'The Key Finding' },
      { id: 'what-changed', label: 'What Changed in 2025?' },
      { id: 'bfcm-stress-test', label: 'The BFCM Stress Test' },
      { id: 'who-wins', label: 'Who Wins?' },
      { id: 'methodology', label: 'Methodology' },
      { id: 'what-to-do', label: 'What Should You Do?' },
    ],
    sections: [
      {
        id: 'key-finding',
        type: 'highlight',
        title: 'The Key Finding',
        content: 'AI-influenced revenue grew 7x while tickets dropped 33%...'
      },
      // ... more sections
    ],
    cta: {
      label: 'See how Orthofeet automated 56% of tickets',
      url: 'https://www.gorgias.com/customers/orthofeet'
    }
  },
  // ... more articles
};
```

### n8n Article Generation Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  WEEKLY TRIGGER: Monday 9am                                     │
├─────────────────────────────────────────────────────────────────┤
│  1. SQL Pull      → BigQuery exports to JSON                    │
│  2. Transform     → n8n formats for mockData.ts                 │
│  3. LLM Draft     → Claude API generates article sections       │
│  4. Human Review  → Notion database for approval                │
│  5. Git Commit    → Auto-commit to GitHub                       │
│  6. Deploy        → Vercel webhook triggers build               │
│  7. Notify        → Slack message with preview link             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| **Live Site** | [my-cx-lab-final.vercel.app](https://my-cx-lab-final.vercel.app) |
| **GitHub Repo** | [github.com/KaranMann28/MyCxLabFinal](https://github.com/KaranMann28/MyCxLabFinal) |
| **Main Deliverable** | [← Back to CX Lab Deliverable](./CX_LAB_DELIVERABLE.md) |

---

*This technical appendix is maintained alongside the main CX Lab deliverable.*

