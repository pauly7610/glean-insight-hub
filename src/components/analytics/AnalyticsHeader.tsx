
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface AnalyticsHeaderProps {
  timeRange: string;
  setTimeRange: (value: string) => void;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({ timeRange, setTimeRange }) => {
  const metrics = [
    { label: 'Total Searches', value: '2,487', change: '+12%', positive: true },
    { label: 'Active Users', value: '312', change: '+5%', positive: true },
    { label: 'Documents Accessed', value: '1,124', change: '-3%', positive: false },
    { label: 'Avg Searches/User', value: '7.9', change: '+8%', positive: true },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Analytics Dashboard</h1>
          <p className="text-text-secondary mt-1">
            Monitor how your organization is using Glean
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">Time period:</span>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] border-primary/20 focus:ring-primary/30 bg-white">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="custom-card group transition-all hover:shadow-[var(--shadow-lg)] border-none">
            <div className="card-border"></div>
            <div className="flex flex-col">
              <span className="text-sm text-text-secondary">{metric.label}</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-semibold text-text-primary">{metric.value}</span>
                <div className={`stat-trend ${metric.positive ? 'up' : 'down'}`}>
                  {metric.positive ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsHeader;
