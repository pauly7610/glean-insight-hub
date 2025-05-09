
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BarChart } from '@/components/ui/chart';

interface ContentUsageProps {
  timeRange: string;
}

const ContentUsage: React.FC<ContentUsageProps> = ({ timeRange }) => {
  // Mock data for content usage
  const popularContent = [
    { name: "Company Handbook 2024", source: "Google Drive", views: 432, lastAccessed: "2 hours ago", type: "PDF" },
    { name: "Q1 OKRs", source: "Notion", views: 387, lastAccessed: "4 hours ago", type: "Document" },
    { name: "Product Roadmap", source: "Confluence", views: 356, lastAccessed: "1 day ago", type: "Wiki" },
    { name: "Brand Guidelines", source: "Google Drive", views: 298, lastAccessed: "5 hours ago", type: "PDF" },
    { name: "Engineering Best Practices", source: "GitHub", views: 245, lastAccessed: "2 days ago", type: "Wiki" },
    { name: "Customer Persona Research", source: "Miro", views: 231, lastAccessed: "6 hours ago", type: "Board" },
    { name: "Sales Playbook", source: "Google Drive", views: 218, lastAccessed: "3 days ago", type: "Document" },
    { name: "Design System", source: "Figma", views: 203, lastAccessed: "1 day ago", type: "Design" },
    { name: "Quarterly Financial Report", source: "Google Sheets", views: 187, lastAccessed: "12 hours ago", type: "Spreadsheet" },
    { name: "Team Directory", source: "Notion", views: 175, lastAccessed: "8 hours ago", type: "Database" }
  ];

  const underutilizedContent = [
    { name: "Legacy API Documentation", source: "Confluence", lastAccessed: "92 days ago", action: "Archive", type: "Wiki" },
    { name: "2022 Marketing Plan", source: "Google Drive", lastAccessed: "78 days ago", action: "Archive", type: "Document" },
    { name: "Previous Product Specs", source: "Notion", lastAccessed: "63 days ago", action: "Update", type: "Document" },
    { name: "Old Onboarding Materials", source: "Google Drive", lastAccessed: "60 days ago", action: "Update", type: "PDF" },
    { name: "Previous Vendor Contacts", source: "Google Sheets", lastAccessed: "58 days ago", action: "Update", type: "Spreadsheet" },
    { name: "2023 Q1 Research", source: "Miro", lastAccessed: "55 days ago", action: "Archive", type: "Board" },
    { name: "Sunset Feature Documentation", source: "Confluence", lastAccessed: "52 days ago", action: "Archive", type: "Wiki" },
    { name: "Old Process Workflows", source: "Google Drive", lastAccessed: "49 days ago", action: "Update", type: "Document" },
    { name: "Previous Design Mockups", source: "Figma", lastAccessed: "45 days ago", action: "Archive", type: "Design" },
    { name: "Deprecated Code Samples", source: "GitHub", lastAccessed: "42 days ago", action: "Archive", type: "Code" }
  ];

  // Source distribution data - limit to 5 items for better readability
  const sourceData = {
    labels: ['Google Drive', 'Confluence', 'Slack', 'Notion', 'GitHub'],
    datasets: [
      {
        label: 'Content Views',
        data: [35, 25, 15, 12, 8],
        backgroundColor: [
          'rgba(155, 135, 245, 0.8)',
          'rgba(126, 105, 171, 0.8)',
          'rgba(110, 89, 165, 0.8)',
          'rgba(214, 188, 250, 0.8)',
          'rgba(242, 252, 226, 0.8)',
        ],
        borderColor: [
          'rgba(155, 135, 245, 1)',
          'rgba(126, 105, 171, 1)',
          'rgba(110, 89, 165, 1)',
          'rgba(214, 188, 250, 1)',
          'rgba(242, 252, 226, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const getBadgeVariant = (type: string) => {
    const map: Record<string, "default" | "secondary" | "outline"> = {
      "PDF": "default",
      "Document": "secondary",
      "Wiki": "outline",
      "Spreadsheet": "default",
      "Design": "secondary",
      "Code": "outline",
      "Board": "default",
      "Database": "secondary"
    };
    return map[type] || "outline";
  };
  
  const getActionBadgeVariant = (action: string) => {
    return action === "Archive" ? "outline" : "secondary";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/10 dark:to-background">
            <CardTitle>Most Accessed Content</CardTitle>
            <CardDescription>
              Content with highest view counts in the past {timeRange} days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead>Last Accessed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularContent.map((content) => (
                  <TableRow key={content.name} className="hover:bg-muted/40 transition-colors">
                    <TableCell className="font-medium">{content.name}</TableCell>
                    <TableCell>{content.source}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(content.type)} className="hover:opacity-80 transition-opacity">
                        {content.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">{content.views}</TableCell>
                    <TableCell>{content.lastAccessed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/10 dark:to-background">
            <CardTitle>Content by Source</CardTitle>
            <CardDescription>Distribution of content views by platform</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <BarChart data={sourceData} height={300} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/10 dark:to-background">
          <CardTitle>Underutilized Content</CardTitle>
          <CardDescription>
            Documents that haven't been accessed in {timeRange} days or more
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Accessed</TableHead>
                <TableHead>Suggested Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {underutilizedContent.map((content) => (
                <TableRow key={content.name} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-medium">{content.name}</TableCell>
                  <TableCell>{content.source}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(content.type)} className="hover:opacity-80 transition-opacity">
                      {content.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{content.lastAccessed}</TableCell>
                  <TableCell>
                    <Badge variant={getActionBadgeVariant(content.action)} className="hover:bg-muted/70 transition-colors">
                      {content.action}
                    </Badge>
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

export default ContentUsage;
