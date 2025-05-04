
import React from 'react';

// Types for chart data
interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor: string | string[];
    borderWidth?: number;
  }>;
}

// Props for BarChart component
interface BarChartProps {
  data: ChartData;
  height?: number;
}

// A visual bar chart component that renders based on the data provided
export const BarChart: React.FC<BarChartProps> = ({ data, height = 300 }) => {
  // Find the maximum value to scale the bars correctly
  const maxValue = Math.max(...data.datasets.flatMap(dataset => dataset.data));
  
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <div className="flex flex-col h-full">
        {/* Value labels at the top */}
        <div className="flex space-x-1 mb-2">
          {data.labels.map((label, index) => {
            const value = data.datasets[0].data[index];
            return (
              <div key={`value-${label}`} className="flex-1 text-center">
                <span className="text-xs font-medium text-text-secondary">
                  {value}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Chart container with enhanced visuals */}
        <div className="flex-grow flex items-end space-x-2" style={{ minHeight: '60%' }}>
          {data.labels.map((label, index) => {
            const value = data.datasets[0].data[index];
            // Calculate height percentage, but ensure we have appropriate minimum height
            const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
            const backgroundColor = Array.isArray(data.datasets[0].backgroundColor)
              ? data.datasets[0].backgroundColor[index]
              : data.datasets[0].backgroundColor;
            
            return (
              <div 
                key={label} 
                className="flex-1 flex flex-col items-center justify-end h-full group"
              >
                <div 
                  className="w-full rounded-t-xl transition-all duration-300 group-hover:opacity-90 shadow-md relative"
                  style={{ 
                    height: `${percentage}%`,
                    backgroundColor: 'var(--primary)',
                    background: `linear-gradient(180deg, ${backgroundColor || 'var(--primary)'} 0%, ${backgroundColor ? (typeof backgroundColor === 'string' ? backgroundColor : backgroundColor[0]) : 'var(--primary)'} 100%)`,
                    minHeight: percentage > 0 ? '8px' : '0'
                  }}
                >
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-medium px-1.5 py-0.5 bg-black/30 rounded-full backdrop-blur-sm">
                      {value}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* X-axis labels with better styling */}
        <div className="mt-4 grid" style={{ gridTemplateColumns: `repeat(${data.labels.length}, minmax(0, 1fr))` }}>
          {data.labels.map((label) => (
            <div 
              key={`label-${label}`} 
              className="flex justify-center"
            >
              <div 
                className="text-xs text-text-secondary max-w-[80px] text-center font-medium truncate px-2"
                title={label} // Show full label on hover
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
