
import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileSearch, Clock, Users, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

import RelatedContentTab from './recommendations/RelatedContentTab';
import StaleContentTab from './recommendations/StaleContentTab';
import CrossDepartmentTab from './recommendations/CrossDepartmentTab';
import TrendingSearchesTab from './recommendations/TrendingSearchesTab';
import { 
  relatedContentData, 
  staleContentData, 
  crossDeptOpportunitiesData, 
  trendingSearchesData 
} from './recommendations/mockData';

interface AdvancedRecommendationsProps {
  timeRange?: string;
}

const AdvancedRecommendations: React.FC<AdvancedRecommendationsProps> = ({ timeRange = '30' }) => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = React.useState('related');
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  
  // Update tab indicator position based on active tab
  useEffect(() => {
    if (isMobile && tabIndicatorRef.current && tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.querySelector(`[data-value="${activeTab}"]`);
      
      if (activeTabElement) {
        const tabLeft = (activeTabElement as HTMLElement).offsetLeft;
        const tabWidth = (activeTabElement as HTMLElement).offsetWidth;
        
        tabIndicatorRef.current.style.width = `${tabWidth}px`;
        tabIndicatorRef.current.style.transform = `translateX(${tabLeft}px)`;
      }
    }
  }, [activeTab, isMobile]);
  
  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
        <CardTitle>Advanced Recommendations</CardTitle>
        <CardDescription>
          AI-powered insights for content optimization (last {timeRange} days)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs 
          defaultValue="related" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          {isMobile ? (
            <div className="relative" ref={tabsContainerRef}>
              <Carousel
                opts={{
                  align: 'start',
                  loop: false,
                  dragFree: true
                }}
              >
                <CarouselContent className="px-4 py-2">
                  <CarouselItem className="basis-auto pl-2 pr-6">
                    <TabsTrigger 
                      value="related" 
                      onClick={() => setActiveTab('related')}
                      className="data-[state=active]:bg-background flex items-center"
                      data-value="related"
                    >
                      <FileSearch className="h-4 w-4 mr-2" />
                      Related
                    </TabsTrigger>
                  </CarouselItem>
                  <CarouselItem className="basis-auto pl-1 pr-6">
                    <TabsTrigger 
                      value="stale" 
                      onClick={() => setActiveTab('stale')}
                      className="data-[state=active]:bg-background flex items-center"
                      data-value="stale"
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Stale
                    </TabsTrigger>
                  </CarouselItem>
                  <CarouselItem className="basis-auto pl-1 pr-6">
                    <TabsTrigger 
                      value="cross-dept" 
                      onClick={() => setActiveTab('cross-dept')}
                      className="data-[state=active]:bg-background flex items-center"
                      data-value="cross-dept"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Cross-Dept
                    </TabsTrigger>
                  </CarouselItem>
                  <CarouselItem className="basis-auto pl-1 pr-4">
                    <TabsTrigger 
                      value="trending" 
                      onClick={() => setActiveTab('trending')}
                      className="data-[state=active]:bg-background flex items-center"
                      data-value="trending"
                    >
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Trending
                    </TabsTrigger>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="carousel-tab-indicator" ref={tabIndicatorRef} />
            </div>
          ) : (
            <div className="px-6 pt-2 border-b">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="related" className="data-[state=active]:bg-background">
                  <FileSearch className="h-4 w-4 mr-2" />
                  Related Content
                </TabsTrigger>
                <TabsTrigger value="stale" className="data-[state=active]:bg-background">
                  <Clock className="h-4 w-4 mr-2" />
                  Stale Content
                </TabsTrigger>
                <TabsTrigger value="cross-dept" className="data-[state=active]:bg-background">
                  <Users className="h-4 w-4 mr-2" />
                  Cross-Department
                </TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:bg-background">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending Searches
                </TabsTrigger>
              </TabsList>
            </div>
          )}

          <TabsContent value="related" className="animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
            <RelatedContentTab relatedContent={relatedContentData} />
          </TabsContent>
          
          <TabsContent value="stale" className="animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
            <StaleContentTab staleContent={staleContentData} />
          </TabsContent>
          
          <TabsContent value="cross-dept" className="animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
            <CrossDepartmentTab crossDeptOpportunities={crossDeptOpportunitiesData} />
          </TabsContent>
          
          <TabsContent value="trending" className="animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0">
            <TrendingSearchesTab trendingSearches={trendingSearchesData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdvancedRecommendations;
