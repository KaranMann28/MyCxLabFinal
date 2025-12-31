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
  Legend,
} from 'recharts';
import { merchantAdoptionData } from '../../data/mockData';
import { GorgiasSymbol } from '../GorgiasLogo';
import { useTheme } from '../../context/ThemeContext';
import './Charts.css';

type SegmentView = 'all' | 'commercial';

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

export function MerchantAdoptionChart() {
  const [activeSegment, setActiveSegment] = useState<SegmentView>('all');
  const { theme } = useTheme();
  const logoColor = theme === 'dark' ? '#888888' : '#666666';

  const avgOverall = Math.round(merchantAdoptionData.reduce((sum, d) => sum + d.overallMerchants, 0) / merchantAdoptionData.length);
  const avgCommercial = Math.round(merchantAdoptionData.reduce((sum, d) => sum + d.commercialMerchants, 0) / merchantAdoptionData.length);

  const annotations = [
    { label: 'All Segments (Avg)', value: avgOverall.toString(), color: 'var(--text-primary)' },
    { label: 'Mid-Market (Avg)', value: avgCommercial.toString(), color: '#E8826E' },
    { label: 'Retention Rate', value: '100%', color: 'var(--success)' },
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
        Ecommerce brands with meaningful AI deployment (50+ monthly tickets, 10%+ AI involvement)
      </div>
      
      <div className="chart-controls">
        <span className="chart-controls__label">Segment</span>
        <div className="tab-nav">
          <motion.button 
            className={`tab-nav__item ${activeSegment === 'all' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveSegment('all')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            All Segments
          </motion.button>
          <motion.button 
            className={`tab-nav__item ${activeSegment === 'commercial' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveSegment('commercial')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Mid-Market ($3-20M)
          </motion.button>
        </div>
      </div>
      
      <motion.div
        key={activeSegment}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={merchantAdoptionData}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
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
              dy={10}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              domain={[0, 200]}
            />
            
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '12px 16px',
                boxShadow: 'var(--shadow-lg)',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'overallMerchants') return [value, 'All Segments'];
                if (name === 'commercialMerchants') return [value, 'Mid-Market'];
                return [value, name];
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => {
                if (value === 'overallMerchants') return 'All Segments';
                if (value === 'commercialMerchants') return 'Mid-Market ($3-20M)';
                return value;
              }}
            />
            
            {activeSegment === 'all' && (
              <Bar
                dataKey="overallMerchants"
                fill="var(--chart-secondary)"
                radius={[4, 4, 0, 0]}
                barSize={24}
                animationDuration={800}
                animationEasing="ease-out"
              />
            )}
            
            {activeSegment === 'commercial' && (
              <Bar
                dataKey="commercialMerchants"
                fill="#E8826E"
                radius={[4, 4, 0, 0]}
                barSize={24}
                animationDuration={800}
                animationEasing="ease-out"
              />
            )}
            
            {activeSegment === 'all' && (
              <Bar
                dataKey="commercialMerchants"
                fill="#E8826E"
                radius={[4, 4, 0, 0]}
                barSize={24}
                animationDuration={800}
                animationEasing="ease-out"
              />
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
      
      {/* Gorgias Watermark */}
      <div className="chart-watermark">
        <GorgiasSymbol color={logoColor} size={18} animated={false} />
        <span className="chart-watermark__text">CX Lab</span>
      </div>
    </motion.div>
  );
}
