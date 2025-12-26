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

export function downloadAnalysis(): void {
  // Fetch the analysis.md file and trigger download
  fetch('/analysis.md')
    .then(response => {
      if (!response.ok) {
        throw new Error('Analysis file not found');
      }
      return response.text();
    })
    .then(content => {
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CX-Lab-Analysis.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Failed to download analysis:', error);
      throw error;
    });
}


