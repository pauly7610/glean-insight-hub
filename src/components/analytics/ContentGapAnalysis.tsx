
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileSearch, Filter, Bookmark, ArrowRight, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContentGapAnalysisProps {
  timeRange: string;
}

interface ContentGap {
  id: string;
  searchTerm: string;
  searchVolume: number;
  searchesPastWeek: number;
  trending: boolean;
  department: string;
  suggestedAction: 'create' | 'update' | 'curate';
  priority: 'high' | 'medium' | 'low';
}

const ContentGapAnalysis: React.FC<ContentGapAnalysisProps> = ({ timeRange }) => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  
  // Mock data for content gaps
  const allContentGaps: ContentGap[] = [
    {
      id: '1',
      searchTerm: 'onboarding process sales team',
      searchVolume: 78,
      searchesPastWeek: 24,
      trending: true,
      department: 'Sales',
      suggestedAction: 'create',
      priority: 'high'
    },
    {
      id: '2',
      searchTerm: 'quarterly tax filing procedure',
      searchVolume: 65,
      searchesPastWeek: 18,
      trending: true,
      department: 'Finance',
      suggestedAction: 'update',
      priority: 'high'
    },
    {
      id: '3',
      searchTerm: 'customer service escalation matrix',
      searchVolume: 54,
      searchesPastWeek: 12,
      trending: false,
      department: 'Customer Support',
      suggestedAction: 'create',
      priority: 'medium'
    },
    {
      id: '4',
      searchTerm: 'product roadmap 2025',
      searchVolume: 86,
      searchesPastWeek: 32,
      trending: true,
      department: 'Product',
      suggestedAction: 'create',
      priority: 'high'
    },
    {
      id: '5',
      searchTerm: 'expense report approval workflow',
      searchVolume: 42,
      searchesPastWeek: 14,
      trending: false,
      department: 'Finance',
      suggestedAction: 'update',
      priority: 'medium'
    },
    {
      id: '6',
      searchTerm: 'engineering code review guidelines',
      searchVolume: 63,
      searchesPastWeek: 21,
      trending: true,
      department: 'Engineering',
      suggestedAction: 'update',
      priority: 'high'
    },
    {
      id: '7',
      searchTerm: 'marketing campaign tracking template',
      searchVolume: 49,
      searchesPastWeek: 15,
      trending: false,
      department: 'Marketing',
      suggestedAction: 'create',
      priority: 'medium'
    },
    {
      id: '8',
      searchTerm: 'remote work security policy',
      searchVolume: 72,
      searchesPastWeek: 28,
      trending: true,
      department: 'IT',
      suggestedAction: 'curate',
      priority: 'high'
    },
    {
      id: '9',
      searchTerm: 'benefits enrollment guide 2025',
      searchVolume: 39,
      searchesPastWeek: 12,
      trending: false,
      department: 'HR',
      suggestedAction: 'update',
      priority: 'medium'
    }
  ];
  
  // Filter by department
  const contentGaps = departmentFilter === 'all'
    ? allContentGaps
    : allContentGaps.filter(gap => gap.department === departmentFilter);
  
  // Unique departments for filter
  const departments = ['all', ...Array.from(new Set(allContentGaps.map(gap => gap.department)))];
  
  // Get priority badge styling
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge>Medium Priority</Badge>;
      case 'low':
        return <Badge variant="secondary">Low Priority</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  // Get action badge and icon
  const getActionBadge = (action: string) => {
    switch (action) {
      case 'create':
        return (
          <div className="flex items-center gap-1.5">
            <Plus className="h-3.5 w-3.5 text-green-600" />
            <span className="text-sm text-green-600">Create New</span>
          </div>
        );
      case 'update':
        return (
          <div className="flex items-center gap-1.5">
            <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-sm text-blue-600">Update Existing</span>
          </div>
        );
      case 'curate':
        return (
          <div className="flex items-center gap-1.5">
            <Bookmark className="h-3.5 w-3.5 text-amber-600" />
            <span className="text-sm text-amber-600">Curate Content</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/20 dark:to-background flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FileSearch className="h-5 w-5 text-primary" />
              <CardTitle>Content Gap Analysis</CardTitle>
            </div>
            <CardDescription className="mt-1.5">
              Searches with no relevant results from the past {timeRange} days
            </CardDescription>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Search Term</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Search Volume</TableHead>
                <TableHead>Suggested Action</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentGaps.map((gap) => (
                <TableRow key={gap.id} className="group">
                  <TableCell className="font-medium">
                    <div className="flex items-start gap-2">
                      {gap.searchTerm}
                      {gap.trending && (
                        <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
                          Trending
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                      {gap.department}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{gap.searchVolume} total</div>
                      <div className="text-xs text-muted-foreground">
                        {gap.searchesPastWeek} in past week
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getActionBadge(gap.suggestedAction)}
                  </TableCell>
                  <TableCell>
                    {getPriorityBadge(gap.priority)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentGapAnalysis;
