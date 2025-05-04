
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
                <span className="text-xs text-muted-foreground font-medium">
                  {value}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Chart container - gives bars room to display */}
        <div className="flex-grow flex items-end space-x-1" style={{ minHeight: '60%' }}>
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
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <div 
                  className="w-full rounded-t-md transition-all"
                  style={{ 
                    height: `${percentage}%`,
                    backgroundColor,
                    minHeight: percentage > 0 ? '8px' : '0'
                  }}
                />
              </div>
            );
          })}
        </div>
        
        {/* X-axis labels */}
        <div className="mt-2 flex space-x-1">
          {data.labels.map((label) => (
            <div key={`label-${label}`} className="flex-1 text-center">
              <span className="text-xs text-muted-foreground block truncate" title={label}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
