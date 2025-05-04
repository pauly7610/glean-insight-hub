
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, TrendingUp, Clock, Users, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdvancedRecommendationsProps {
  timeRange?: string;
}

const AdvancedRecommendations: React.FC<AdvancedRecommendationsProps> = ({ timeRange = '30' }) => {
  // Mock data for related content suggestions
  const relatedContent = [
    {
      sourceContent: "Product Roadmap Q2",
      relatedItems: [
        { title: "Q2 OKRs", accessRate: 78, department: "Product" },
        { title: "Engineering Sprint Planning", accessRate: 65, department: "Engineering" }
      ]
    },
    {
      sourceContent: "Sales Training Materials",
      relatedItems: [
        { title: "Customer Objection Handling", accessRate: 82, department: "Sales" },
        { title: "Pricing Strategy", accessRate: 71, department: "Marketing" }
      ]
    },
    {
      sourceContent: "Employee Onboarding Guide",
      relatedItems: [
        { title: "Company Benefits Overview", accessRate: 92, department: "HR" },
        { title: "IT Setup Instructions", accessRate: 88, department: "IT" }
      ]
    }
  ];

  // Mock data for stale content
  const staleContent = [
    { title: "Legacy Product Documentation", lastUpdated: "2023-10-15", accessCount: 3, department: "Product" },
    { title: "Old Marketing Campaign Guidelines", lastUpdated: "2023-08-22", accessCount: 5, department: "Marketing" },
    { title: "Previous Quarter Financial Report", lastUpdated: "2024-01-10", accessCount: 7, department: "Finance" },
    { title: "Outdated Sales Scripts", lastUpdated: "2023-11-05", accessCount: 2, department: "Sales" }
  ];

  // Mock data for cross-departmental opportunities
  const crossDeptOpportunities = [
    { 
      content: "API Documentation", 
      primaryDept: "Engineering", 
      targetDept: "Sales", 
      relevance: "high",
      relatedSearches: ["technical specs", "API capabilities", "integration options"]
    },
    { 
      content: "Customer Persona Research", 
      primaryDept: "Marketing", 
      targetDept: "Product", 
      relevance: "medium",
      relatedSearches: ["user needs", "customer profiles", "market segments"] 
    },
    { 
      content: "Pricing Strategy", 
      primaryDept: "Sales", 
      targetDept: "Customer Success", 
      relevance: "high",
      relatedSearches: ["pricing tiers", "discount policy", "enterprise pricing"] 
    }
  ];

  // Mock data for trending searches
  const trendingSearches = [
    { term: "new product launch", increase: "+325%", lastHours: 24, department: "Marketing" },
    { term: "system outage", increase: "+270%", lastHours: 12, department: "Engineering" },
    { term: "quarterly review template", increase: "+180%", lastHours: 36, department: "All" },
    { term: "employee feedback form", increase: "+135%", lastHours: 48, department: "HR" }
  ];

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
        <CardTitle>Advanced Recommendations</CardTitle>
        <CardDescription>
          AI-powered insights for content optimization (last {timeRange} days)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="related" className="w-full">
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

          {/* Related Content Tab */}
          <TabsContent value="related" className="space-y-4 p-6">
            {relatedContent.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2">{item.sourceContent}</h4>
                <div className="space-y-2">
                  {item.relatedItems.map((related, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-background p-3 rounded-md">
                      <div>
                        <p className="text-sm font-medium">{related.title}</p>
                        <p className="text-xs text-muted-foreground">{related.department}</p>
                      </div>
                      <Badge variant="secondary">
                        {related.accessRate}% related
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center pt-2">
              <Link to="/analytics?tab=content-recommendations" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
                View All Related Content
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </TabsContent>

          {/* Stale Content Tab */}
          <TabsContent value="stale" className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Content Title</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Recent Views</TableHead>
                  <TableHead>Department</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staleContent.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.lastUpdated}</TableCell>
                    <TableCell>{item.accessCount}</TableCell>
                    <TableCell>{item.department}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="text-center pt-4">
              <Link to="/analytics?tab=content-usage" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
                View All Stale Content
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </TabsContent>

          {/* Cross-Department Tab */}
          <TabsContent value="cross-dept" className="space-y-4 p-6">
            {crossDeptOpportunities.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{item.content}</h4>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">{item.primaryDept}</span> → <span className="font-medium">{item.targetDept}</span>
                    </p>
                  </div>
                  <Badge 
                    variant={item.relevance === "high" ? "default" : "outline"}
                    className={item.relevance === "high" ? "bg-green-500" : ""}
                  >
                    {item.relevance === "high" ? "High relevance" : "Medium relevance"}
                  </Badge>
                </div>
                <div className="bg-background p-3 rounded-md mt-2">
                  <p className="text-xs font-medium mb-1">{item.targetDept} department searches for:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.relatedSearches.map((term, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center pt-2">
              <Link to="/analytics?tab=department-insights" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
                View All Cross-Department Opportunities
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </TabsContent>

          {/* Trending Searches Tab */}
          <TabsContent value="trending" className="p-6">
            <div className="space-y-3">
              {trendingSearches.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">"{item.term}"</p>
                    <p className="text-xs text-muted-foreground">
                      {item.department} • Last {item.lastHours} hours
                    </p>
                  </div>
                  <Badge className="bg-amber-500">
                    {item.increase}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <Link to="/analytics?tab=search" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
                View All Trending Searches
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdvancedRecommendations;
