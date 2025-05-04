
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, ArrowUpRight, TrendingUp, TrendingDown, AlertTriangle, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AIPoweredInsightsProps {
  timeRange: string;
}

type InsightType = 'trend' | 'anomaly' | 'opportunity';

interface Insight {
  id: string;
  title: string;
  description: string;
  type: InsightType;
  importance: 'high' | 'medium' | 'low';
  metric?: string;
  change?: number;
  department?: string;
  timestamp: string;
}

const AIPoweredInsights: React.FC<AIPoweredInsightsProps> = ({ timeRange }) => {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Mock insights data - in a real app, this would come from an API
  const [insights, setInsights] = useState<Insight[]>([
    {
      id: '1',
      title: 'Search volume spike in Engineering',
      description: 'Engineering department shows 35% increase in search activity compared to last week, primarily for API documentation.',
      type: 'trend',
      importance: 'high',
      metric: 'Search Volume',
      change: 35,
      department: 'Engineering',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      title: 'Potential knowledge gap detected',
      description: 'Multiple searches related to "onboarding procedures" returned no results across Sales department.',
      type: 'anomaly',
      importance: 'high',
      department: 'Sales',
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      title: 'Product roadmap content underutilized',
      description: 'Recently updated product roadmap documentation has low visibility despite high search relevance.',
      type: 'opportunity',
      importance: 'medium',
      department: 'Product',
      timestamp: '1 day ago'
    },
    {
      id: '4',
      title: 'Content engagement drop',
      description: 'Finance department shows 28% decrease in content engagement over past 7 days.',
      type: 'anomaly',
      importance: 'medium',
      metric: 'Content Engagement',
      change: -28,
      department: 'Finance',
      timestamp: '2 days ago'
    },
    {
      id: '5',
      title: 'Search efficiency improvement',
      description: 'Average time to find information decreased by 15% after recent knowledge base restructuring.',
      type: 'trend',
      importance: 'medium',
      metric: 'Search Efficiency',
      change: 15,
      timestamp: '3 days ago'
    }
  ]);

  const getInsightIcon = (type: InsightType) => {
    switch (type) {
      case 'trend':
        return <LineChart className="h-5 w-5 text-blue-500" />;
      case 'anomaly':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'opportunity':
        return <ArrowUpRight className="h-5 w-5 text-green-500" />;
      default:
        return <BrainCircuit className="h-5 w-5 text-primary" />;
    }
  };

  const getChangeIcon = (change?: number) => {
    if (!change) return null;
    return change > 0 ? 
      <TrendingUp className="h-4 w-4 mr-1 text-green-500" /> : 
      <TrendingDown className="h-4 w-4 mr-1 text-red-500" />;
  };
  
  const getBadgeVariant = (importance: string) => {
    switch (importance) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const handleRefreshInsights = () => {
    setIsRefreshing(true);
    
    // Simulate API call to refresh insights
    setTimeout(() => {
      // In a real app, we would fetch fresh insights from the backend
      toast({
        title: "Insights refreshed",
        description: "AI has analyzed your latest data and updated insights",
      });
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-violet-50 to-white dark:from-violet-950/20 dark:to-background flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <CardTitle>AI-Powered Insights</CardTitle>
            </div>
            <CardDescription className="mt-1.5">
              Automatically generated insights based on your data from the past {timeRange} days
            </CardDescription>
          </div>
          <Button 
            variant="outline"
            size="sm"
            className="gap-2 whitespace-nowrap" 
            onClick={handleRefreshInsights}
            disabled={isRefreshing}
          >
            <BrainCircuit className="h-4 w-4" />
            {isRefreshing ? 'Analyzing data...' : 'Refresh Insights'}
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-5">
            {insights.map((insight) => (
              <div 
                key={insight.id}
                className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getInsightIcon(insight.type)}
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">{insight.title}</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {insight.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                        {insight.department && (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>Department:</span>
                            <span className="font-medium text-text-primary">{insight.department}</span>
                          </div>
                        )}
                        
                        {insight.metric && (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>Metric:</span>
                            <span className="font-medium text-text-primary">{insight.metric}</span>
                          </div>
                        )}
                        
                        {insight.change !== undefined && (
                          <div className={`flex items-center gap-1 ${insight.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            <span>Change:</span>
                            <div className="font-medium flex items-center">
                              {getChangeIcon(insight.change)}
                              {Math.abs(insight.change)}%
                            </div>
                          </div>
                        )}
                        
                        <div className="ml-auto text-muted-foreground">
                          {insight.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant={getBadgeVariant(insight.importance)} className="whitespace-nowrap">
                    {insight.importance.charAt(0).toUpperCase() + insight.importance.slice(1)} Priority
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPoweredInsights;
