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

// AI Satisfaction Gap Data - using csatAiFully (not csatAllAi)
// December has null CSAT data, so we filter it out for chart display
const satisfactionGapData = [
  { month: "2025-01-01", label: "Jan '25", humanTickets: 877372, aiTickets: 169122, aiShareOfTickets: 16.16, csatHuman: 4.46, csatAiFully: 3.70, totalAiAgentTickets: 1273655, handoverPercent: 66.7, fullyAutomatedPercent: 33.3 },
  { month: "2025-02-01", label: "Feb '25", humanTickets: 724308, aiTickets: 140891, aiShareOfTickets: 16.28, csatHuman: 4.50, csatAiFully: 3.72, totalAiAgentTickets: 1192036, handoverPercent: 67.2, fullyAutomatedPercent: 32.8 },
  { month: "2025-03-01", label: "Mar '25", humanTickets: 774920, aiTickets: 174529, aiShareOfTickets: 18.38, csatHuman: 4.51, csatAiFully: 3.80, totalAiAgentTickets: 1505413, handoverPercent: 65.8, fullyAutomatedPercent: 34.2 },
  { month: "2025-04-01", label: "Apr '25", humanTickets: 760450, aiTickets: 183880, aiShareOfTickets: 19.47, csatHuman: 4.51, csatAiFully: 3.72, totalAiAgentTickets: 1537589, handoverPercent: 61.2, fullyAutomatedPercent: 38.8 },
  { month: "2025-05-01", label: "May '25", humanTickets: 784685, aiTickets: 214410, aiShareOfTickets: 21.46, csatHuman: 4.49, csatAiFully: 3.75, totalAiAgentTickets: 1837877, handoverPercent: 59.9, fullyAutomatedPercent: 40.1 },
  { month: "2025-06-01", label: "Jun '25", humanTickets: 778478, aiTickets: 222010, aiShareOfTickets: 22.19, csatHuman: 4.49, csatAiFully: 3.77, totalAiAgentTickets: 2041146, handoverPercent: 54.9, fullyAutomatedPercent: 45.1 },
  { month: "2025-07-01", label: "Jul '25", humanTickets: 829644, aiTickets: 246991, aiShareOfTickets: 22.94, csatHuman: 4.48, csatAiFully: 3.71, totalAiAgentTickets: 2416537, handoverPercent: 50.2, fullyAutomatedPercent: 49.8 },
  { month: "2025-08-01", label: "Aug '25", humanTickets: 773912, aiTickets: 242987, aiShareOfTickets: 23.89, csatHuman: 4.47, csatAiFully: 3.80, totalAiAgentTickets: 2285200, handoverPercent: 57.0, fullyAutomatedPercent: 43.0 },
  { month: "2025-09-01", label: "Sep '25", humanTickets: 757223, aiTickets: 235109, aiShareOfTickets: 23.69, csatHuman: 4.47, csatAiFully: 3.82, totalAiAgentTickets: 2190138, handoverPercent: 59.4, fullyAutomatedPercent: 40.6 },
  { month: "2025-10-01", label: "Oct '25", humanTickets: 774497, aiTickets: 257157, aiShareOfTickets: 24.93, csatHuman: 4.47, csatAiFully: 3.87, totalAiAgentTickets: 2608135, handoverPercent: 54.5, fullyAutomatedPercent: 45.5 },
  { month: "2025-11-01", label: "Nov '25", humanTickets: 864039, aiTickets: 318819, aiShareOfTickets: 26.95, csatHuman: 4.48, csatAiFully: 3.83, totalAiAgentTickets: 3308673, handoverPercent: 50.9, fullyAutomatedPercent: 49.1 },
  // December excluded due to null CSAT data
];

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

export function AISatisfactionGapChart() {
  const annotations = [
    { label: 'The CSAT Gap', value: '0.8 pts', color: '#E8826E' },
    { label: 'AI Ticket Share', value: '33% → 50%', color: 'var(--success)' },
    { label: 'Human CSAT', value: '4.5 / 5', color: '#4B5EFC' },
    { label: 'AI CSAT (flat)', value: '3.7 / 5', color: 'var(--text-primary)' },
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
        AI adoption is rising fast, but satisfaction hasn't followed — automation scale ≠ customer experience
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={satisfactionGapData}
            margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="aiShareGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A3A3A3" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#A3A3A3" stopOpacity={0.3} />
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
              domain={[3.5, 4.6]}
              ticks={[3.5, 3.7, 3.9, 4.1, 4.3, 4.5]}
              tickFormatter={(value) => value.toFixed(1)}
              label={{ 
                value: 'CSAT Score', 
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
              tick={{ fill: '#737373', fontSize: 11 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 35]}
              label={{ 
                value: 'AI Share %', 
                angle: 90, 
                position: 'insideRight',
                style: { fill: '#737373', fontSize: 12 }
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
                if (name === 'csatHuman') return [value.toFixed(2), 'Human CSAT'];
                if (name === 'csatAiFully') return [value.toFixed(2), 'AI Fully Automated CSAT'];
                if (name === 'aiShareOfTickets') return [`${value.toFixed(1)}%`, 'AI Share of Tickets'];
                return [value, name];
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => {
                if (value === 'csatHuman') return 'Human CSAT';
                if (value === 'csatAiFully') return 'AI Fully Automated CSAT';
                if (value === 'aiShareOfTickets') return 'AI Share of Tickets';
                return value;
              }}
            />
            
            <Bar
              yAxisId="right"
              dataKey="aiShareOfTickets"
              fill="url(#aiShareGradient)"
              radius={[4, 4, 0, 0]}
              barSize={24}
              animationDuration={800}
              animationEasing="ease-out"
            />
            
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="csatHuman"
              stroke="#4B5EFC"
              strokeWidth={3}
              dot={{ r: 4, fill: '#4B5EFC', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#4B5EFC', stroke: '#fff', strokeWidth: 2 }}
              animationDuration={1000}
              animationEasing="ease-out"
            />
            
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="csatAiFully"
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

