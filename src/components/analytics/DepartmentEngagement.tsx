
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

// Department data type definition
export interface DepartmentData {
  department: string;
  activeUsers: number;
  totalUsers: number;
  searchesPerUser: number;
  contentViewsPerUser: number;
  change: string;
  isPositive: boolean;
}

interface DepartmentEngagementProps {
  timeRange: string;
  departmentData: DepartmentData[];
}

const DepartmentEngagement: React.FC<DepartmentEngagementProps> = ({ 
  timeRange,
  departmentData 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Engagement Summary</CardTitle>
        <CardDescription>
          User activity metrics broken down by department over the past {timeRange} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead className="text-center">Active/Total Users</TableHead>
              <TableHead className="text-right">Avg. Searches</TableHead>
              <TableHead className="text-right">Avg. Content Views</TableHead>
              <TableHead className="text-right">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departmentData.map((dept) => (
              <TableRow key={dept.department}>
                <TableCell className="font-medium">{dept.department}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="mr-2 text-center w-16">{dept.activeUsers}/{dept.totalUsers}</span>
                    <Progress 
                      value={(dept.activeUsers / dept.totalUsers) * 100} 
                      className="h-2"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-right">{dept.searchesPerUser}</TableCell>
                <TableCell className="text-right">{dept.contentViewsPerUser}</TableCell>
                <TableCell className="text-right">
                  <span className={dept.isPositive ? 'text-green-500' : 'text-red-500'}>
                    {dept.change}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DepartmentEngagement;
