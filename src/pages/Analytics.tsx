
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Filter } from 'lucide-react';
import SearchInsights from '@/components/analytics/SearchInsights';
import ContentUsage from '@/components/analytics/ContentUsage';
import UserEngagement from '@/components/analytics/UserEngagement';
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = (tabId: string) => {
    setIsExporting(true);
    
    // Simulate export process
    setTimeout(() => {
      console.log(`Exporting ${tabId} data as CSV...`);
      setIsExporting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <AnalyticsHeader timeRange={timeRange} setTimeRange={setTimeRange} />
      
      <Tabs defaultValue="search" className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="search" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">Search Insights</TabsTrigger>
            <TabsTrigger value="content" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">Content Usage</TabsTrigger>
            <TabsTrigger value="users" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">User Engagement</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button 
              onClick={() => handleExport('current-tab')} 
              variant="secondary" 
              size="sm"
              disabled={isExporting}
              className="bg-purple-100 hover:bg-purple-200 text-purple-900 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              {isExporting ? 'Exporting...' : 'Export CSV'}
            </Button>
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
