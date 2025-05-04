
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

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
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor how your organization is using Glean
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Time period:</span>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] border-purple-200 dark:border-purple-900">
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
          <Card key={metric.label} className="p-4 border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-purple-50/30 dark:from-background dark:to-purple-900/5">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">{metric.label}</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-semibold">{metric.value}</span>
                <span className={`text-xs font-medium ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsHeader;
