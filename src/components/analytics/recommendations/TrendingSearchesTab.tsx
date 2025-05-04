
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrendingSearch {
  term: string;
  increase: string;
  lastHours: number;
  department: string;
  actionRequired: string;
}

interface TrendingSearchesTabProps {
  trendingSearches: TrendingSearch[];
}

const TrendingSearchesTab: React.FC<TrendingSearchesTabProps> = ({ trendingSearches }) => {
  return (
    <div className="p-6">
      <div className="space-y-3">
        {trendingSearches.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium">"{item.term}"</p>
              <p className="text-xs text-muted-foreground">
                {item.department} • Last {item.lastHours} hours
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-500">
                {item.increase}
              </Badge>
              <Button size="sm" variant="outline" className="text-xs h-7">
                {item.actionRequired}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-4">
        <Link to="/analytics?tab=search" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
          View All Trending Searches
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingSearchesTab;
