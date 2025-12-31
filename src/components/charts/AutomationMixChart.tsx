import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { automationMixData, summaryStats } from '../../data/mockData';
import { GorgiasSymbol } from '../GorgiasLogo';
import { useTheme } from '../../context/ThemeContext';
import './Charts.css';

type ViewType = 'lines' | 'volume' | 'both';

const formatTickets = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value.toString();
};

const chartVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const annotationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ 
    opacity: 1, 
    scale: 1,
    transition: { 
      delay: 0.3 + i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function AutomationMixChart() {
  const [activeView, setActiveView] = useState<ViewType>('both');
  const { theme } = useTheme();
  const logoColor = theme === 'dark' ? '#888888' : '#666666';

  const latestData = automationMixData[automationMixData.length - 1];

  const annotations = [
    { label: 'Industry AI Rate', value: `${latestData.aiTouchedPct}%`, color: '#E8826E' },
    { label: 'Full Automation', value: `${latestData.noHumanPct}%`, color: 'var(--text-primary)' },
    { label: 'YoY Growth', value: summaryStats.growthMultiple, color: 'var(--success)' },
    { label: 'Sample Size', value: summaryStats.totalInteractions, color: 'var(--text-primary)' },
  ];

  return (
    <motion.div 
      className="chart-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={chartVariants}
    >
      <div className="chart-description">
        Share of ecommerce customer support interactions involving AI (3-month rolling average)
      </div>
      
      <div className="chart-controls">
        <span className="chart-controls__label">View by</span>
        <div className="tab-nav">
          {(['both', 'lines', 'volume'] as ViewType[]).map((view) => (
            <motion.button 
              key={view}
              className={`tab-nav__item ${activeView === view ? 'tab-nav__item--active' : ''}`}
              onClick={() => setActiveView(view)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {view === 'both' ? 'Rates + Volume' : view === 'lines' ? 'Rates Only' : 'Volume Only'}
            </motion.button>
          ))}
        </div>
      </div>
      
      <motion.div
        key={activeView}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={360}>
          <ComposedChart
            data={automationMixData}
            margin={{ top: 20, right: 60, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="aiTouchedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E8826E" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#E8826E" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="var(--chart-grid)" 
              vertical={false}
            />
            
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              interval={2}
              dy={10}
            />
            
            {(activeView === 'lines' || activeView === 'both') && (
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 12]}
              />
            )}
            
            {(activeView === 'volume' || activeView === 'both') && (
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-light)', fontSize: 11 }}
                tickFormatter={formatTickets}
                domain={[0, 40000000]}
              />
            )}
            
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '12px 16px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '12px' }}
              formatter={(value: number, name: string) => {
                if (name === 'totalTickets') return [formatTickets(value), 'Industry Volume'];
                if (name === 'aiTouchedPct') return [`${value}%`, 'AI-Assisted'];
                if (name === 'noHumanPct') return [`${value}%`, 'Fully Automated'];
                return [value, name];
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => {
                if (value === 'aiTouchedPct') return 'AI-Assisted';
                if (value === 'noHumanPct') return 'Fully Automated';
                if (value === 'totalTickets') return 'Industry Volume';
                return value;
              }}
            />
            
            {(activeView === 'volume' || activeView === 'both') && (
              <Bar
                yAxisId="right"
                dataKey="totalTickets"
                fill="var(--chart-bar)"
                radius={[2, 2, 0, 0]}
                barSize={16}
                animationDuration={800}
                animationEasing="ease-out"
              />
            )}
            
            {(activeView === 'lines' || activeView === 'both') && (
              <>
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="aiTouchedPct"
                  stroke="#E8826E"
                  strokeWidth={2.5}
                  fill="url(#aiTouchedGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#E8826E', stroke: '#fff', strokeWidth: 2 }}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="noHumanPct"
                  stroke="var(--chart-secondary)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: 'var(--chart-secondary)', stroke: '#fff', strokeWidth: 2 }}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>
      
      <div className="chart-annotations">
        {annotations.map((ann, index) => (
          <motion.div 
            key={ann.label}
            className="chart-annotation"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={annotationVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="chart-annotation__label">{ann.label}</span>
            <span 
              className="chart-annotation__value"
              style={{ color: ann.color }}
            >
              {ann.value}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Gorgias Watermark */}
      <div className="chart-watermark">
        <GorgiasSymbol color={logoColor} size={18} animated={false} />
        <span className="chart-watermark__text">CX Lab</span>
      </div>
    </motion.div>
  );
}
