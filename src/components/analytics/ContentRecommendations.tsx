
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Bookmark, Users, TrendingUp } from 'lucide-react';

interface ContentRecommendation {
  title: string;
  type: 'document' | 'article' | 'video' | 'guide';
  relevanceScore: number;
  department: string;
  viewsThisWeek: number;
  trend: number;
}

interface ContentRecommendationsProps {
  timeRange: string;
}

const ContentRecommendations: React.FC<ContentRecommendationsProps> = ({ timeRange }) => {
  // Mock data for content recommendations
  const recommendations: ContentRecommendation[] = [
    {
      title: "Employee Onboarding Guide",
      type: "document",
      relevanceScore: 92,
      department: "Human Resources",
      viewsThisWeek: 187,
      trend: 24
    },
    {
      title: "Product Roadmap Q2",
      type: "document",
      relevanceScore: 87,
      department: "Product",
      viewsThisWeek: 156,
      trend: 12
    },
    {
      title: "Sales Training Materials",
      type: "guide",
      relevanceScore: 85,
      department: "Sales",
      viewsThisWeek: 143,
      trend: 8
    },
    {
      title: "Engineering Best Practices",
      type: "article",
      relevanceScore: 83,
      department: "Engineering",
      viewsThisWeek: 128,
      trend: 16
    },
    {
      title: "Marketing Campaign Calendar",
      type: "document",
      relevanceScore: 78,
      department: "Marketing",
      viewsThisWeek: 112,
      trend: -3
    }
  ];

  const getIconByType = (type: string) => {
    switch (type) {
      case 'document':
        return <Book className="h-4 w-4" />;
      case 'article':
        return <Bookmark className="h-4 w-4" />;
      case 'video':
        return <TrendingUp className="h-4 w-4" />;
      case 'guide':
        return <Users className="h-4 w-4" />;
      default:
        return <Book className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
        <CardTitle className="flex items-center justify-between">
          <span>Recommended Content</span>
          <Badge variant="outline" className="font-normal text-xs">
            Based on user behavior
          </Badge>
        </CardTitle>
        <CardDescription>
          Content suggestions based on user activity trends from the last {timeRange} days
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.title} className="flex items-start justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {getIconByType(item.type)}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <span>{item.department}</span>
                    <span className="mx-1.5">•</span>
                    <span className="flex items-center">
                      <span>{item.viewsThisWeek} views</span>
                      {item.trend !== 0 && (
                        <span className={`ml-2 text-xs flex items-center ${item.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          <TrendingUp className={`h-3 w-3 mr-0.5 ${item.trend < 0 ? 'rotate-180' : ''}`} />
                          {Math.abs(item.trend)}%
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                {item.relevanceScore}% match
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentRecommendations;
