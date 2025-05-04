
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Users, ArrowRight, ArrowUp } from 'lucide-react';
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
            <h3 className="card-title">Content Usage</h3>
            <p className="card-subtitle">Most accessed this week</p>
          </div>
          
          <div className="content-list">
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Company Handbook 2024</p>
                  <p className="text-xs text-text-secondary">Google Drive • PDF</p>
                </div>
              </div>
              <div className="text-sm text-text-secondary">432 views</div>
            </div>
            
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Q1 OKRs</p>
                  <p className="text-xs text-text-secondary">Notion • Document</p>
                </div>
              </div>
              <div className="text-sm text-text-secondary">387 views</div>
            </div>
            
            <div className="content-item">
              <div className="content-details">
                <div className="content-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Product Roadmap</p>
                  <p className="text-xs text-text-secondary">Confluence • Wiki</p>
                </div>
              </div>
              <div className="text-sm text-text-secondary">356 views</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-mid-gray">
            <Link to="/analytics" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
              View All Content
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Card>
        
        <Card className="custom-card">
          <div className="card-border"></div>
          
          <div className="mb-5">
            <h3 className="card-title">Department Activity</h3>
            <p className="card-subtitle">User engagement by department</p>
          </div>
          
          <div>
            <div className="content-item">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm font-medium text-text-primary">Engineering</p>
              </div>
              <div className="text-sm text-text-primary">87 / 95</div>
            </div>
            
            <div className="content-item">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm font-medium text-text-primary">Marketing</p>
              </div>
              <div className="text-sm text-text-primary">45 / 52</div>
            </div>
            
            <div className="content-item">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm font-medium text-text-primary">Sales</p>
              </div>
              <div className="text-sm text-text-primary">63 / 70</div>
            </div>
            
            <div className="content-item">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm font-medium text-text-primary">Finance</p>
              </div>
              <div className="text-sm text-text-primary">18 / 20</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-mid-gray">
            <Link to="/analytics" className="text-primary text-sm font-medium flex items-center justify-center hover:underline">
              View All Departments
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
