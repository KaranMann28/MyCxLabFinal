import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { automationCeilingData } from '../../data/mockData';
import { GorgiasSymbol } from '../GorgiasLogo';
import { useTheme } from '../../context/ThemeContext';
import './Charts.css';

type ViewType = 'automation' | 'handover';

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

export function AutomationCeilingChart() {
  const [activeView, setActiveView] = useState<ViewType>('automation');
  const { theme } = useTheme();
  const logoColor = theme === 'dark' ? '#888888' : '#666666';

  // Sort by automation rate descending
  const sortedData = [...automationCeilingData].sort(
    (a, b) => b.automationRate - a.automationRate
  );

  const getBarColor = (rate: number) => {
    if (rate >= 70) return 'var(--chart-secondary)';
    if (rate >= 50) return 'var(--chart-tertiary)';
    return '#E8826E';
  };

  const avgAutomation = Math.round(
    automationCeilingData.reduce((sum, d) => sum + d.automationRate, 0) / automationCeilingData.length
  );

  const annotations = [
    { label: 'Peak Automation', value: '92%', color: 'var(--text-primary)' },
    { label: 'Floor (Complex)', value: '23%', color: '#E8826E' },
    { label: 'Industry Avg', value: `${avgAutomation}%`, color: 'var(--text-primary)' },
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
        Automation success rate by inquiry type across the ecommerce industry
      </div>
      
      <div className="chart-controls">
        <span className="chart-controls__label">View</span>
        <div className="tab-nav">
          <motion.button 
            className={`tab-nav__item ${activeView === 'automation' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveView('automation')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Automation Rate
          </motion.button>
          <motion.button 
            className={`tab-nav__item ${activeView === 'handover' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveView('handover')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Human Handover
          </motion.button>
        </div>
      </div>
      
      <motion.div
        key={activeView}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={360}>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="var(--chart-grid)" 
              horizontal={false}
            />
            
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
            />
            
            <YAxis
              type="category"
              dataKey="intent"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-primary)', fontSize: 12, fontWeight: 500 }}
              width={120}
            />
            
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '12px 16px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '8px' }}
              formatter={(value: number, name: string) => {
                if (name === 'automationRate') return [`${value}%`, 'Automation Success'];
                if (name === 'handoverRate') return [`${value}%`, 'Human Handover'];
                return [value, name];
              }}
            />
            
            {activeView === 'automation' && (
              <Bar 
                dataKey="automationRate" 
                radius={[0, 4, 4, 0]}
                barSize={22}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {sortedData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getBarColor(entry.automationRate)} 
                  />
                ))}
                <LabelList
                  dataKey="automationRate"
                  position="right"
                  formatter={(value: number) => `${value}%`}
                  style={{ fill: 'var(--text-primary)', fontWeight: 600, fontSize: 11 }}
                />
              </Bar>
            )}
            
            {activeView === 'handover' && (
              <Bar 
                dataKey="handoverRate" 
                radius={[0, 4, 4, 0]}
                barSize={22}
                fill="#E8826E"
                animationDuration={800}
                animationEasing="ease-out"
              >
                <LabelList
                  dataKey="handoverRate"
                  position="right"
                  formatter={(value: number) => `${value}%`}
                  style={{ fill: 'var(--text-primary)', fontWeight: 600, fontSize: 11 }}
                />
              </Bar>
            )}
          </BarChart>
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
      
      <motion.div 
        className="chart-legend chart-legend--inline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: 'var(--chart-secondary)' }} />
          <span>High automation (70%+)</span>
        </div>
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: 'var(--chart-tertiary)' }} />
          <span>Medium (50-69%)</span>
        </div>
        <div className="chart-legend__item">
          <span className="chart-legend__dot" style={{ backgroundColor: '#E8826E' }} />
          <span>Ceiling reached</span>
        </div>
      </motion.div>
      
      {/* Gorgias Watermark */}
      <div className="chart-watermark">
        <GorgiasSymbol color={logoColor} size={18} animated={false} />
        <span className="chart-watermark__text">CX Lab</span>
      </div>
    </motion.div>
  );
}
