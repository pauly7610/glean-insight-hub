
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StaleContentItem {
  title: string;
  lastUpdated: string;
  accessCount: number;
  department: string;
  priority: string;
}

interface StaleContentTabProps {
  staleContent: StaleContentItem[];
}

const StaleContentTab: React.FC<StaleContentTabProps> = ({ staleContent }) => {
  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Content Title</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Recent Views</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staleContent.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.lastUpdated}</TableCell>
              <TableCell>{item.accessCount}</TableCell>
              <TableCell>
                <Badge 
                  variant={item.priority === "high" ? "destructive" : "outline"}
                  className={item.priority === "medium" ? "bg-amber-500/20 text-amber-700 border-amber-200" : ""}
                >
                  {item.priority === "high" ? "High priority" : "Medium priority"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Update
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs h-7 text-red-600 hover:text-red-700">
                    Archive
                  </Button>
                </div>
              </TableCell>
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
    </div>
  );
};

export default StaleContentTab;
