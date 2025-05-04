
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

interface UserEngagementProps {
  timeRange: string;
}

const UserEngagement: React.FC<UserEngagementProps> = ({ timeRange }) => {
  // Mock data for department engagement
  const departmentData = [
    { 
      department: "Engineering", 
      activeUsers: 87, 
      totalUsers: 95, 
      searchesPerUser: 12.4, 
      contentViewsPerUser: 28.7, 
      change: "+8%", 
      isPositive: true 
    },
    { 
      department: "Marketing", 
      activeUsers: 45, 
      totalUsers: 52, 
      searchesPerUser: 9.2, 
      contentViewsPerUser: 22.3, 
      change: "+15%", 
      isPositive: true 
    },
    { 
      department: "Sales", 
      activeUsers: 63, 
      totalUsers: 70, 
      searchesPerUser: 7.8, 
      contentViewsPerUser: 18.5, 
      change: "-3%", 
      isPositive: false 
    },
    { 
      department: "Product", 
      activeUsers: 42, 
      totalUsers: 45, 
      searchesPerUser: 14.7, 
      contentViewsPerUser: 32.1, 
      change: "+12%", 
      isPositive: true 
    },
    { 
      department: "Customer Success", 
      activeUsers: 38, 
      totalUsers: 42, 
      searchesPerUser: 10.3, 
      contentViewsPerUser: 24.8, 
      change: "+5%", 
      isPositive: true 
    },
    { 
      department: "Human Resources", 
      activeUsers: 12, 
      totalUsers: 15, 
      searchesPerUser: 6.5, 
      contentViewsPerUser: 15.2, 
      change: "-2%", 
      isPositive: false 
    },
    { 
      department: "Finance", 
      activeUsers: 18, 
      totalUsers: 22, 
      searchesPerUser: 5.8, 
      contentViewsPerUser: 13.7, 
      change: "+4%", 
      isPositive: true 
    },
    { 
      department: "Legal", 
      activeUsers: 7, 
      totalUsers: 8, 
      searchesPerUser: 8.3, 
      contentViewsPerUser: 19.4, 
      change: "+0%", 
      isPositive: true 
    }
  ];

  // Mock data for user activity
  const userActivityData = [
    { timeOfDay: "Early Morning (5am-8am)", percentage: 8 },
    { timeOfDay: "Morning (8am-11am)", percentage: 28 },
    { timeOfDay: "Midday (11am-2pm)", percentage: 18 },
    { timeOfDay: "Afternoon (2pm-5pm)", percentage: 25 },
    { timeOfDay: "Evening (5pm-8pm)", percentage: 15 },
    { timeOfDay: "Night (8pm-5am)", percentage: 6 }
  ];

  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Activity by Time of Day</CardTitle>
            <CardDescription>
              When users are most active on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userActivityData.map((timeSlot) => (
                <div key={timeSlot.timeOfDay} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{timeSlot.timeOfDay}</span>
                    <span className="text-sm text-muted-foreground">{timeSlot.percentage}%</span>
                  </div>
                  <Progress value={timeSlot.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Power Users</CardTitle>
            <CardDescription>
              Users with highest engagement in the past {timeRange} days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead className="text-right">Searches</TableHead>
                  <TableHead className="text-right">Content Views</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sarah Johnson</TableCell>
                  <TableCell>Engineering</TableCell>
                  <TableCell className="text-right">87</TableCell>
                  <TableCell className="text-right">142</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Chen</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell className="text-right">76</TableCell>
                  <TableCell className="text-right">138</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jessica Liu</TableCell>
                  <TableCell>Marketing</TableCell>
                  <TableCell className="text-right">65</TableCell>
                  <TableCell className="text-right">124</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>David Kim</TableCell>
                  <TableCell>Sales</TableCell>
                  <TableCell className="text-right">58</TableCell>
                  <TableCell className="text-right">112</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Amanda Reyes</TableCell>
                  <TableCell>Customer Success</TableCell>
                  <TableCell className="text-right">52</TableCell>
                  <TableCell className="text-right">105</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UserEngagement;
