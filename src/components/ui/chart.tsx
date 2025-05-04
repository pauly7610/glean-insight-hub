
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
    <div className="w-full h-full flex flex-col">
      <div className="flex-grow flex items-end space-x-2" style={{ minHeight: '200px' }}>
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
          const backgroundColor = Array.isArray(data.datasets[0].backgroundColor)
            ? data.datasets[0].backgroundColor[index]
            : data.datasets[0].backgroundColor;
          
          return (
            <div 
              key={label} 
              className="flex-1 flex flex-col items-center"
            >
              <div className="w-full flex justify-center mb-1">
                <span className="text-xs text-muted-foreground truncate max-w-full" title={value.toString()}>
                  {value}
                </span>
              </div>
              <div 
                className="w-full rounded-t-md transition-all"
                style={{ 
                  height: `${percentage}%`,
                  minHeight: '8px',
                  backgroundColor
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex space-x-2">
        {data.labels.map((label) => (
          <div key={label} className="flex-1 text-center">
            <span className="text-xs text-muted-foreground block truncate" title={label}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
