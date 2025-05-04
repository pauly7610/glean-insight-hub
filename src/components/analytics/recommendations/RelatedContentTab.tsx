
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RelatedItem {
  title: string;
  accessRate: number;
  department: string;
  actionTaken: boolean;
}

interface RelatedContentGroup {
  sourceContent: string;
  relatedItems: RelatedItem[];
}

interface RelatedContentTabProps {
  relatedContent: RelatedContentGroup[];
}

const RelatedContentTab: React.FC<RelatedContentTabProps> = ({ relatedContent }) => {
  return (
    <div className="space-y-4 p-6">
      {relatedContent.map((item, index) => (
        <div key={index} className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-medium mb-2">{item.sourceContent}</h4>
          <div className="space-y-2">
            {item.relatedItems.map((related, idx) => (
              <div key={idx} className="flex items-center justify-between bg-background p-3 rounded-md">
                <div className="flex-1">
                  <p className="text-sm font-medium">{related.title}</p>
                  <p className="text-xs text-muted-foreground">{related.department}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {related.accessRate}% related
                  </Badge>
                  {related.actionTaken ? (
                    <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Linked
                    </Badge>
                  ) : (
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Link Resources
                    </Button>
                  )}
                </div>
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
    </div>
  );
};

export default RelatedContentTab;
