
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface SearchTerm {
  term: string;
  count: number;
  trend: number; // percentage change
}

interface TrendingSearchTermsProps {
  timeRange: string;
}

const TrendingSearchTerms: React.FC<TrendingSearchTermsProps> = ({ timeRange }) => {
  // Mock data for search terms
  const searchTerms: SearchTerm[] = [
    { term: "onboarding documents", count: 89, trend: 32 },
    { term: "quarterly planning", count: 76, trend: 18 },
    { term: "product roadmap", count: 72, trend: -5 },
    { term: "benefits enrollment", count: 67, trend: 12 },
    { term: "company policy", count: 64, trend: 0 },
    { term: "expense report", count: 58, trend: -8 },
    { term: "team directory", count: 52, trend: 15 },
    { term: "vacation request", count: 49, trend: 7 }
  ];

  const getTrendColor = (trend: number) => {
    if (trend > 0) return "text-green-500";
    if (trend < 0) return "text-red-500";
    return "text-gray-500";
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) return <TrendingUp className="h-3 w-3 mr-1" />;
    if (trend < 0) return <TrendingDown className="h-3 w-3 mr-1" />;
    return <Minus className="h-3 w-3 mr-1" />;
  };

  // Calculate max count for visualization
  const maxCount = Math.max(...searchTerms.map(term => term.count));

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/10 dark:to-background">
        <CardTitle className="flex items-center justify-between">
          <span>Trending Search Terms</span>
          <Badge variant="outline" className="font-normal text-xs">
            Last {timeRange} days
          </Badge>
        </CardTitle>
        <CardDescription>Most common keywords and phrases used in searches</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {searchTerms.map((term) => (
            <div key={term.term} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium text-sm">{term.term}</div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{term.count} searches</span>
                  <span className={`flex items-center text-xs font-medium ${getTrendColor(term.trend)}`}>
                    {getTrendIcon(term.trend)}
                    {term.trend > 0 ? '+' : ''}{term.trend}%
                  </span>
                </div>
              </div>
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary/70 rounded-full transition-all group-hover:bg-primary"
                  style={{ width: `${(term.count / maxCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="text-primary text-sm font-medium flex items-center hover:underline">
            View all search terms
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingSearchTerms;
