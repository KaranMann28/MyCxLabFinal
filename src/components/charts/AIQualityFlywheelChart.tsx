import { motion } from 'framer-motion';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import './Charts.css';

// Handover & Quality by AI Agent Data
// Based on: Merchant Quality Rate (GOOD or OK Rated Tickets / ALL Rated Tickets) (Rolling 28d)
const qualityData = [
  { month: "2025-08-01", label: "Aug '25", goodTickets: 28500, okTickets: 58000, badTickets: 8500, qualityRate: 77.2 },
  { month: "2025-08-15", label: "Aug '25", goodTickets: 31200, okTickets: 61500, badTickets: 8200, qualityRate: 78.1 },
  { month: "2025-09-01", label: "Sep '25", goodTickets: 35800, okTickets: 64200, badTickets: 7800, qualityRate: 79.4 },
  { month: "2025-09-15", label: "Sep '25", goodTickets: 38500, okTickets: 66800, badTickets: 7400, qualityRate: 80.2 },
  { month: "2025-10-01", label: "Oct '25", goodTickets: 42100, okTickets: 68500, badTickets: 7100, qualityRate: 81.0 },
  { month: "2025-10-15", label: "Oct '25", goodTickets: 45800, okTickets: 71200, badTickets: 6800, qualityRate: 81.8 },
  { month: "2025-11-01", label: "Nov '25", goodTickets: 52300, okTickets: 74800, badTickets: 6500, qualityRate: 82.5 },
  { month: "2025-11-15", label: "Nov '25", goodTickets: 68500, okTickets: 82100, badTickets: 7200, qualityRate: 83.2 },
  { month: "2025-12-01", label: "Dec '25", goodTickets: 72100, okTickets: 78500, badTickets: 6100, qualityRate: 84.1 },
  { month: "2025-12-15", label: "Dec '25", goodTickets: 68200, okTickets: 72800, badTickets: 5400, qualityRate: 84.8 },
  { month: "2025-12-28", label: "Dec '25", goodTickets: 58500, okTickets: 68200, badTickets: 4800, qualityRate: 85.0 },
];

const formatVolume = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return `${value}`;
};

const formatPercent = (value: number) => `${value.toFixed(0)}%`;

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

export function AIQualityFlywheelChart() {
  const annotations = [
    { label: 'Quality Rate', value: '85%', color: '#22C55E' },
    { label: 'Quality Growth', value: '+10%', color: 'var(--success)' },
    { label: 'Good Ratings', value: '2× more', color: '#16A34A' },
    { label: 'Bad Ratings', value: '−44%', color: '#E8826E' },
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
        Merchant quality rate rising steadily. Better knowledge bases create better AI responses.
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart
            data={qualityData}
            margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="goodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16A34A" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#16A34A" stopOpacity={0.6} />
              </linearGradient>
              <linearGradient id="okGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FACC15" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#FACC15" stopOpacity={0.6} />
              </linearGradient>
              <linearGradient id="badGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FDA4AF" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#FDA4AF" stopOpacity={0.6} />
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
              dy={10}
            />
            
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              tickFormatter={formatVolume}
              domain={[0, 'auto']}
              label={{ 
                value: 'Rated Tickets', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: 'var(--text-muted)', fontSize: 12 }
              }}
            />
            
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#22C55E', fontSize: 11 }}
              tickFormatter={formatPercent}
              domain={[70, 90]}
              label={{ 
                value: 'Quality Rate %', 
                angle: 90, 
                position: 'insideRight',
                style: { fill: '#22C55E', fontSize: 12 }
              }}
            />
            
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
                if (name === 'goodTickets') return [formatVolume(value), 'Good Ratings'];
                if (name === 'okTickets') return [formatVolume(value), 'OK Ratings'];
                if (name === 'badTickets') return [formatVolume(value), 'Bad Ratings'];
                if (name === 'qualityRate') return [`${value.toFixed(1)}%`, 'Quality Rate'];
                return [value, name];
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => {
                if (value === 'goodTickets') return 'Good';
                if (value === 'okTickets') return 'OK';
                if (value === 'badTickets') return 'Bad';
                if (value === 'qualityRate') return 'Quality Rate';
                return value;
              }}
            />
            
            <Bar
              yAxisId="left"
              dataKey="badTickets"
              stackId="ratings"
              fill="url(#badGradient)"
              radius={[0, 0, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            />
            
            <Bar
              yAxisId="left"
              dataKey="okTickets"
              stackId="ratings"
              fill="url(#okGradient)"
              radius={[0, 0, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            />
            
            <Bar
              yAxisId="left"
              dataKey="goodTickets"
              stackId="ratings"
              fill="url(#goodGradient)"
              radius={[4, 4, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            />
            
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="qualityRate"
              stroke="#22C55E"
              strokeWidth={3}
              dot={{ r: 4, fill: '#22C55E', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#22C55E', stroke: '#fff', strokeWidth: 2 }}
              animationDuration={1000}
              animationEasing="ease-out"
            />
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
    </motion.div>
  );
}

