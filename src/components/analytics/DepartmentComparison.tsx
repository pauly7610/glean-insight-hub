
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart } from '@/components/ui/chart';

interface DepartmentComparisonProps {
  timeRange: string;
}

type MetricType = 'activeUsers' | 'searchesPerUser' | 'contentViewsPerUser';

const metrics = [
  { value: 'activeUsers', label: 'Active Users %' },
  { value: 'searchesPerUser', label: 'Searches Per User' },
  { value: 'contentViewsPerUser', label: 'Content Views Per User' },
];

const DepartmentComparison: React.FC<DepartmentComparisonProps> = ({ timeRange }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('activeUsers');
  
  const departmentData = {
    labels: ['Engineering', 'Marketing', 'Sales', 'Product', 'Customer Success', 'HR', 'Finance', 'Legal'],
    datasets: [
      {
        label: 'Active Users %',
        data: [92, 87, 90, 93, 90, 80, 82, 88],
        backgroundColor: 'rgba(124, 58, 237, 0.8)',
        borderColor: 'rgb(124, 58, 237)',
      }
    ],
  };
  
  const searchesData = {
    labels: ['Engineering', 'Marketing', 'Sales', 'Product', 'Customer Success', 'HR', 'Finance', 'Legal'],
    datasets: [
      {
        label: 'Searches Per User',
        data: [12.4, 9.2, 7.8, 14.7, 10.3, 6.5, 5.8, 8.3],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
      }
    ],
  };
  
  const viewsData = {
    labels: ['Engineering', 'Marketing', 'Sales', 'Product', 'Customer Success', 'HR', 'Finance', 'Legal'],
    datasets: [
      {
        label: 'Content Views Per User',
        data: [28.7, 22.3, 18.5, 32.1, 24.8, 15.2, 13.7, 19.4],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgb(16, 185, 129)',
      }
    ],
  };
  
  const renderChart = () => {
    switch(selectedMetric) {
      case 'activeUsers':
        return <BarChart data={departmentData} height={300} />;
      case 'searchesPerUser':
        return <BarChart data={searchesData} height={300} />;
      case 'contentViewsPerUser':
        return <BarChart data={viewsData} height={300} />;
      default:
        return <BarChart data={departmentData} height={300} />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <CardTitle>Department Comparison</CardTitle>
            <CardDescription>
              Benchmark departments against each other over the past {timeRange} days
            </CardDescription>
          </div>
          <Select value={selectedMetric} onValueChange={(value) => setSelectedMetric(value as MetricType)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              {metrics.map((metric) => (
                <SelectItem key={metric.value} value={metric.value}>
                  {metric.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="pt-4">
          {renderChart()}
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentComparison;
