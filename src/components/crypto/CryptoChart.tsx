
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

// Mock data for the chart
const generateChartData = (trend: 'up' | 'down' | 'volatile') => {
  const data = [];
  let baseValue = 100;
  
  for (let i = 0; i < 30; i++) {
    if (trend === 'up') {
      baseValue += Math.random() * 3 - 0.5;
    } else if (trend === 'down') {
      baseValue -= Math.random() * 3 - 1;
    } else {
      baseValue += Math.random() * 6 - 3;
    }
    data.push({
      name: `Day ${i + 1}`,
      value: Math.max(baseValue, 0)
    });
  }
  
  return data;
};

interface CryptoChartProps {
  trend?: 'up' | 'down' | 'volatile';
  color?: string;
  height?: number;
}

const CryptoChart = ({ 
  trend = 'up', 
  color = '#3B82F6', 
  height = 200 
}: CryptoChartProps) => {
  // Ensure trend is one of the allowed values
  const safeTrend = trend === 'up' || trend === 'down' || trend === 'volatile' 
    ? trend 
    : 'up';
  
  const [data] = useState(generateChartData(safeTrend));
  
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <XAxis 
            dataKey="name" 
            tick={false} 
            axisLine={false} 
            tickLine={false} 
          />
          
          <YAxis 
            hide={true}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              border: 'none',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
            }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#9CA3AF', fontWeight: 'bold' }}
          />
          
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, stroke: "#0F172A" }}
            fill="url(#colorGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;
