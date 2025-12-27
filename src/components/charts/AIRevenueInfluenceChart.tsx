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

// AI Revenue Influence vs GMV Data
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

const formatGMV = (value: number) => {
  if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
};

const formatPercent = (value: number) => `${value.toFixed(1)}%`;

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={chartVariants}
    >
      <div className="chart-description">
        Monthly GMV alongside support-influenced revenue rate — fewer tickets, more impact per interaction
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={revenueInfluenceData}
            margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="gmvGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4B5EFC" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#4B5EFC" stopOpacity={0.6} />
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
              tickFormatter={formatGMV}
              domain={[0, 'auto']}
              label={{ 
                value: 'GMV', 
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
              tick={{ fill: '#E8826E', fontSize: 11 }}
              tickFormatter={formatPercent}
              domain={[0, 3]}
              label={{ 
                value: 'Influence Rate %', 
                angle: 90, 
                position: 'insideRight',
                style: { fill: '#E8826E', fontSize: 12 }
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
                if (name === 'gmvWeb') return [formatGMV(value), 'Total GMV'];
                if (name === 'gmvInfluencedRate') return [`${value.toFixed(2)}%`, 'AI Influence Rate'];
                if (name === 'gmvInfluenced') return [formatGMV(value), 'AI-Influenced Revenue'];
                return [value, name];
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => {
                if (value === 'gmvWeb') return 'Total GMV';
                if (value === 'gmvInfluencedRate') return 'AI Influence Rate';
                return value;
              }}
            />
            
            <Bar
              yAxisId="left"
              dataKey="gmvWeb"
              fill="url(#gmvGradient)"
              radius={[4, 4, 0, 0]}
              barSize={28}
              animationDuration={800}
              animationEasing="ease-out"
            />
            
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="gmvInfluencedRate"
              stroke="#E8826E"
              strokeWidth={3}
              dot={{ r: 4, fill: '#E8826E', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#E8826E', stroke: '#fff', strokeWidth: 2 }}
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

