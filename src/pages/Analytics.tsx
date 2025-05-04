
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import SearchInsights from '@/components/analytics/SearchInsights';
import ContentUsage from '@/components/analytics/ContentUsage';
import UserEngagement from '@/components/analytics/UserEngagement';
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader';
import ReportExporter from '@/components/analytics/ReportExporter';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30');
  const [currentTab, setCurrentTab] = useState('search');

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <AnalyticsHeader timeRange={timeRange} setTimeRange={setTimeRange} />
      
      <Tabs 
        defaultValue="search" 
        className="mt-8" 
        onValueChange={(value) => setCurrentTab(value)}
      >
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="search" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">Search Insights</TabsTrigger>
            <TabsTrigger value="content" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">Content Usage</TabsTrigger>
            <TabsTrigger value="users" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">User Engagement</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <ReportExporter timeRange={timeRange} tabId={currentTab} />
          </div>
        </div>
        
        <TabsContent value="search" className="space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
          <SearchInsights timeRange={timeRange} />
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
          <ContentUsage timeRange={timeRange} />
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
          <UserEngagement timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
