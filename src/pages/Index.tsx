import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Users, ArrowRight, ArrowUp, BrainCircuit, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">
            Welcome to the Glean admin panel
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/analytics">
            <Button className="btn-primary">
              <BarChart className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="custom-card">
          <div className="card-border"></div>
          
          <div className="mb-5">
            <h3 className="card-title">Weekly Overview</h3>
            <p className="card-subtitle">Key metrics for this week</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-text-secondary">Total Searches</p>
              <p className="text-2xl font-bold text-text-primary">2,487</p>
              <div className="stat-trend up">
                <ArrowUp className="h-3 w-3 mr-1" />
                12%
              </div>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Active Users</p>
              <p className="text-2xl font-bold text-text-primary">312</p>
              <div className="stat-trend up">
                <ArrowUp className="h-3 w-3 mr-1" />
                8%
              </div>
            </div>
          </div>
          
          <div className="bg-light-gray p-4 rounded-md mt-6">
            <p className="text-sm font-medium text-text-primary">Analytics Insight</p>
            <p className="text-sm text-text-secondary mt-1">
              Search activity is up 12% compared to last week
            </p>
            <div className="mt-2">
              <Link to="/analytics" className="text-primary text-xs font-medium inline-flex items-center hover:underline">
                View Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </Card>
        
        <Card className="custom-card">
          <div className="card-border"></div>
          
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h3 className="card-title">AI-Powered Insights</h3>
            </div>
            <p className="card-subtitle">Automatically detected patterns and anomalies</p>
          </div>
          
          <div className="content-list">
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon bg-primary/10 text-primary rounded-full p-1">
                  <ArrowUp className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Search volume spike</p>
                  <p className="text-xs text-text-secondary">Engineering (35% increase)</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                New
              </Badge>
            </div>
            
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon bg-amber-500/10 text-amber-500 rounded-full p-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Knowledge gap detected</p>
                  <p className="text-xs text-text-secondary">Sales (Onboarding procedures)</p>
                </div>
              </div>
              <Badge variant="destructive">
                High Priority
              </Badge>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-mid-gray">
            <Link to="/analytics?tab=ai-insights" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
              View All AI Insights
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Card>
        
        <Card className="custom-card">
          <div className="card-border"></div>
          
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <FileSearch className="h-5 w-5 text-primary" />
              <h3 className="card-title">Content Gap Analysis</h3>
            </div>
            <p className="card-subtitle">Top searches with missing content</p>
          </div>
          
          <div className="content-list">
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">onboarding process sales team</p>
                  <p className="text-xs text-text-secondary">78 searches • Trending</p>
                </div>
              </div>
              <div className="text-xs text-green-600 font-medium">Create New</div>
            </div>
            
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">quarterly tax filing procedure</p>
                  <p className="text-xs text-text-secondary">65 searches • Trending</p>
                </div>
              </div>
              <div className="text-xs text-blue-600 font-medium">Update</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-mid-gray">
            <Link to="/analytics?tab=content-gaps" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
              View All Content Gaps
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
