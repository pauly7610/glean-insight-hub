
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
          <TabsList className="bg-muted/50">
            <TabsTrigger value="search">Search Insights</TabsTrigger>
            <TabsTrigger value="content">Content Usage</TabsTrigger>
            <TabsTrigger value="users">User Engagement</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button 
              onClick={() => handleExport('current-tab')} 
              variant="secondary" 
              size="sm"
              disabled={isExporting}
            >
              <Download className="h-4 w-4 mr-2" />
              {isExporting ? 'Exporting...' : 'Export CSV'}
            </Button>
          </div>
        </div>
        
        <TabsContent value="search" className="space-y-6">
          <SearchInsights timeRange={timeRange} />
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6">
          <ContentUsage timeRange={timeRange} />
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6">
          <UserEngagement timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
