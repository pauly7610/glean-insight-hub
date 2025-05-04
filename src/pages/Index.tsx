
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to the Glean admin panel
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/analytics">
            <Button>
              <BarChart className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Overview</CardTitle>
            <CardDescription>Key metrics for this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Searches</p>
                <p className="text-2xl font-bold">2,487</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">312</p>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-md">
              <p className="text-sm font-medium">Analytics Insight</p>
              <p className="text-sm text-muted-foreground mt-1">
                Search activity is up 12% compared to last week
              </p>
              <div className="mt-2">
                <Link to="/analytics">
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Usage</CardTitle>
            <CardDescription>Most accessed this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Company Handbook 2024</p>
                  <p className="text-xs text-muted-foreground">Google Drive • PDF</p>
                </div>
                <div className="text-sm text-muted-foreground">432 views</div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Q1 OKRs</p>
                  <p className="text-xs text-muted-foreground">Notion • Document</p>
                </div>
                <div className="text-sm text-muted-foreground">387 views</div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Product Roadmap</p>
                  <p className="text-xs text-muted-foreground">Confluence • Wiki</p>
                </div>
                <div className="text-sm text-muted-foreground">356 views</div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <Link to="/analytics">
                <Button variant="ghost" size="sm" className="w-full">View All Content</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Department Activity</CardTitle>
            <CardDescription>User engagement by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Engineering</p>
                </div>
                <div className="text-sm">87 active / 95 total</div>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Marketing</p>
                </div>
                <div className="text-sm">45 active / 52 total</div>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Sales</p>
                </div>
                <div className="text-sm">63 active / 70 total</div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <Link to="/analytics">
                <Button variant="ghost" size="sm" className="w-full">View All Departments</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
