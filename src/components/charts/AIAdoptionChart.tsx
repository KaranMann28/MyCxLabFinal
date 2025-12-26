import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { aiAdoptionData } from '../../data/mockData';
import './Charts.css';

type ViewType = 'overall' | 'vertical' | 'size';

export function AIAdoptionChart() {
  const [activeView, setActiveView] = useState<ViewType>('overall');

  return (
    <div className="chart-container">
      <div className="chart-description">
        Share of ecommerce brands with AI-powered customer support
      </div>
      
      <div className="chart-controls">
        <span className="chart-controls__label">View by</span>
        <div className="tab-nav">
          <button 
            className={`tab-nav__item ${activeView === 'overall' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveView('overall')}
          >
            Overall
          </button>
          <button 
            className={`tab-nav__item ${activeView === 'vertical' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveView('vertical')}
          >
            Vertical
          </button>
          <button 
            className={`tab-nav__item ${activeView === 'size' ? 'tab-nav__item--active' : ''}`}
            onClick={() => setActiveView('size')}
          >
            Size
          </button>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={380}>
        <AreaChart
          data={aiAdoptionData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="adoptionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E8826E" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#E8826E" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#E5E5E5" 
            vertical={false}
          />
          
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#737373', fontSize: 12 }}
            interval={3}
            dy={10}
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#737373', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 80]}
            dx={-10}
          />
          
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1A1A',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
            labelStyle={{ color: '#A3A3A3', marginBottom: '4px', fontSize: '12px' }}
            itemStyle={{ color: '#E8826E', fontSize: '14px', fontWeight: 600 }}
            formatter={(value: number) => [`${value}%`, 'Adoption Rate']}
          />
          
          {/* 50% threshold line */}
          <ReferenceLine
            y={50}
            stroke="#A3A3A3"
            strokeDasharray="4 4"
            strokeWidth={1}
          />
          
          <Area
            type="monotone"
            dataKey="adoption"
            stroke="#E8826E"
            strokeWidth={2.5}
            fill="url(#adoptionGradient)"
            dot={false}
            activeDot={{ r: 5, fill: '#E8826E', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="chart-annotations">
        <div className="chart-annotation">
          <span className="chart-annotation__label">Current</span>
          <span className="chart-annotation__value" style={{ color: '#E8826E' }}>67%</span>
        </div>
        <div className="chart-annotation">
          <span className="chart-annotation__label">12 months ago</span>
          <span className="chart-annotation__value">34%</span>
        </div>
        <div className="chart-annotation">
          <span className="chart-annotation__label">Change</span>
          <span className="chart-annotation__value chart-annotation__value--positive">+33pts</span>
        </div>
      </div>
    </div>
  );
}
