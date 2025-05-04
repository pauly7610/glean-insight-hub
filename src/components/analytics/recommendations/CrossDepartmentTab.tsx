
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CrossDeptOpportunity {
  content: string;
  primaryDept: string;
  targetDept: string;
  relevance: string;
  relatedSearches: string[];
  actionRequired: string;
}

interface CrossDepartmentTabProps {
  crossDeptOpportunities: CrossDeptOpportunity[];
}

const CrossDepartmentTab: React.FC<CrossDepartmentTabProps> = ({ crossDeptOpportunities }) => {
  return (
    <div className="space-y-4 p-6">
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
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm font-medium text-primary">Recommended action: {item.actionRequired}</p>
            <Button size="sm" className="text-xs h-7">
              Take Action <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
      <div className="text-center pt-2">
        <Link to="/analytics?tab=department-insights" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
          View All Cross-Department Opportunities
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CrossDepartmentTab;
