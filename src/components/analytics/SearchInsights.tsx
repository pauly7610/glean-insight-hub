
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';

interface SearchInsightsProps {
  timeRange: string;
}

const SearchInsights: React.FC<SearchInsightsProps> = ({ timeRange }) => {
  // Mock data for search queries
  const topSearches = [
    { term: "onboarding process", count: 145, growth: "+12%" },
    { term: "expense policy", count: 132, growth: "+5%" },
    { term: "quarterly goals", count: 118, growth: "+21%" },
    { term: "benefits enrollment", count: 103, growth: "-8%" },
    { term: "product roadmap", count: 97, growth: "+3%" },
    { term: "hr handbook", count: 89, growth: "+0%" },
    { term: "meeting notes", count: 76, growth: "-4%" },
    { term: "vacation policy", count: 72, growth: "+9%" },
    { term: "security guidelines", count: 68, growth: "+15%" },
    { term: "marketing assets", count: 65, growth: "-2%" }
  ];

  // Mock data for zero result searches
  const zeroResultSearches = [
    { term: "new product launch date", count: 34, users: 12, suggestion: "Create FAQ doc" },
    { term: "company retreat", count: 28, users: 19, suggestion: "Add to company calendar" },
    { term: "performance review template 2024", count: 25, users: 8, suggestion: "Update old template" },
    { term: "competitor analysis tools", count: 22, users: 5, suggestion: "Create resource doc" },
    { term: "brand guidelines v3", count: 19, users: 11, suggestion: "Upload to shared drive" },
    { term: "remote work stipend", count: 17, users: 13, suggestion: "Update policy doc" },
    { term: "project mercury timeline", count: 15, users: 3, suggestion: "Create project space" },
    { term: "annual compliance training", count: 13, users: 9, suggestion: "Schedule and document" },
    { term: "design system components", count: 11, users: 4, suggestion: "Link to design library" },
    { term: "slack channel guidelines", count: 9, users: 7, suggestion: "Create IT documentation" }
  ];

  // Chart data for top searches
  const chartData = {
    labels: topSearches.slice(0, 10).map((search) => search.term),
    datasets: [
      {
        label: 'Search Count',
        data: topSearches.slice(0, 10).map((search) => search.count),
        backgroundColor: 'rgba(155, 135, 245, 0.6)',
        borderColor: 'rgb(155, 135, 245)',
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Top Search Queries</CardTitle>
          <CardDescription>
            Most frequent terms searched across your organization in the past {timeRange} days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <BarChart data={chartData} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Searches</CardTitle>
            <CardDescription>Detailed breakdown of most frequent search terms</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Search Term</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topSearches.map((search) => (
                  <TableRow key={search.term}>
                    <TableCell>{search.term}</TableCell>
                    <TableCell className="text-right">{search.count}</TableCell>
                    <TableCell className="text-right">
                      <span className={search.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {search.growth}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Zero-Result Searches</CardTitle>
            <CardDescription>Queries that return no results, organized by frequency</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Search Term</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                  <TableHead className="text-right">Users</TableHead>
                  <TableHead>Suggested Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {zeroResultSearches.map((search) => (
                  <TableRow key={search.term}>
                    <TableCell>{search.term}</TableCell>
                    <TableCell className="text-right">{search.count}</TableCell>
                    <TableCell className="text-right">{search.users}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal">
                        {search.suggestion}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SearchInsights;
