import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';
import { costSatisfactionData } from '../../data/mockData';
import './Charts.css';

const COLORS = ['#E8826E', '#525252', '#1A1A1A'];

export function CostSatisfactionChart() {
  const [showAiSummary, setShowAiSummary] = useState(false);

  return (
    <div className="chart-container">
      <div className="chart-description">
        Customer satisfaction and cost comparison by resolution method
      </div>
      
      <div className="chart-dual">
        {/* CSAT Chart */}
        <div className="chart-dual__panel">
          <h4 className="chart-dual__title">Customer Satisfaction (CSAT)</h4>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={costSatisfactionData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E5E5" 
                vertical={false}
              />
              
              <XAxis
                dataKey="shortType"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#525252', fontSize: 11 }}
              />
              
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#737373', fontSize: 11 }}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 16px',
                }}
                formatter={(value: number) => [`${value.toFixed(1)} / 5`, 'CSAT']}
              />
              
              <Bar 
                dataKey="csat" 
                radius={[4, 4, 0, 0]}
                barSize={48}
              >
                {costSatisfactionData.map((_, index) => (
                  <Cell key={`csat-${index}`} fill={COLORS[index]} />
                ))}
                <LabelList
                  dataKey="csat"
                  position="top"
                  formatter={(value: number) => value.toFixed(1)}
                  style={{ fill: '#1A1A1A', fontWeight: 700, fontSize: 13 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Cost Chart */}
        <div className="chart-dual__panel">
          <h4 className="chart-dual__title">Cost per Ticket</h4>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={costSatisfactionData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E5E5" 
                vertical={false}
              />
              
              <XAxis
                dataKey="shortType"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#525252', fontSize: 11 }}
              />
              
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#737373', fontSize: 11 }}
                tickFormatter={(value) => `$${value}`}
                domain={[0, 14]}
              />
              
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 16px',
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Cost']}
              />
              
              <Bar 
                dataKey="costPerTicket" 
                radius={[4, 4, 0, 0]}
                barSize={48}
              >
                {costSatisfactionData.map((_, index) => (
                  <Cell key={`cost-${index}`} fill={COLORS[index]} />
                ))}
                <LabelList
                  dataKey="costPerTicket"
                  position="top"
                  formatter={(value: number) => `$${value.toFixed(2)}`}
                  style={{ fill: '#1A1A1A', fontWeight: 700, fontSize: 13 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="chart-legend chart-legend--inline">
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: COLORS[0] }} />
          <span>Fully Automated</span>
        </div>
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: COLORS[1] }} />
          <span>AI + Handover</span>
        </div>
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: COLORS[2] }} />
          <span>Human Only</span>
        </div>
      </div>

      {/* AI Summary Toggle */}
      <div className="chart-ai-toggle">
        <button 
          className={`chart-ai-btn ${showAiSummary ? 'chart-ai-btn--active' : ''}`}
          onClick={() => setShowAiSummary(!showAiSummary)}
        >
          <span className="chart-ai-btn__icon">✦</span>
          {showAiSummary ? 'Hide AI Analysis' : 'View AI Analysis'}
        </button>
      </div>

      {showAiSummary && (
        <div className="chart-ai-panel">
          <div className="chart-ai-panel__header">
            <span className="chart-ai-panel__badge">✦ AI Analysis</span>
          </div>
          <div className="chart-ai-panel__content">
            <p><strong>The Tradeoff:</strong> Fully automated resolution costs $0.52/ticket but achieves only 3.8 CSAT. Human-only scores highest (4.5 CSAT) but costs $11.80/ticket—23x more expensive.</p>
            <p><strong>The Sweet Spot:</strong> AI + Human Handover delivers 4.4 CSAT at $4.20/ticket. That's 98% of human satisfaction at 36% of the cost. The 0.1 CSAT difference is statistically negligible; the cost savings are not.</p>
            <p><strong>The Math:</strong> For a brand handling 100,000 tickets monthly, shifting from human-only to hybrid saves ~$760,000 annually while maintaining satisfaction. This isn't optimization—it's a structural change in unit economics.</p>
          </div>
        </div>
      )}
    </div>
  );
}
