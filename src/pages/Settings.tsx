
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const Settings = () => {
  const [saving, setSaving] = useState(false);
  
  const handleSave = (section: string) => {
    setSaving(true);
    // Simulate saving operation
    setTimeout(() => {
      console.log(`Settings saved for ${section}`);
      setSaving(false);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure your Glean environment and preferences
        </p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="connectors">Data Connectors</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>
                  Update your organization details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Acme Corporation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-domain">Company Domain</Label>
                    <Input id="company-domain" defaultValue="acme.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-logo">Company Logo</Label>
                    <Input id="company-logo" type="file" />
                    <p className="text-xs text-muted-foreground">Recommended size: 200x50px</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-size">Company Size</Label>
                    <select 
                      id="company-size" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      defaultValue="100-500"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100-500">100-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave('company')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configure notification preferences for your organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Usage Reports</p>
                    <p className="text-sm text-muted-foreground">
                      Send weekly reports to admins about platform usage
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Content Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Notify when new content sources are added or updated
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications about unusual access patterns
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Product Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about new features and improvements
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave('notifications')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="connectors">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Data Sources</CardTitle>
                <CardDescription>
                  Manage your organization's connected data sources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Google Drive</h4>
                        <p className="text-sm text-muted-foreground">Connected · 1,243 documents indexed</p>
                      </div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Confluence</h4>
                        <p className="text-sm text-muted-foreground">Connected · 567 pages indexed</p>
                      </div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect width="7" height="7" x="14" y="3" rx="1"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Slack</h4>
                        <p className="text-sm text-muted-foreground">Connected · 24 channels indexed</p>
                      </div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Add New Connection</h4>
                        <p className="text-sm text-muted-foreground">Connect another data source</p>
                      </div>
                    </div>
                    <Button variant="outline">Connect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Indexing Schedule</CardTitle>
                <CardDescription>
                  Control when Glean crawls and indexes your content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Indexing Frequency</Label>
                  <select 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="daily"
                  >
                    <option value="hourly">Every hour</option>
                    <option value="daily">Once daily</option>
                    <option value="weekly">Once weekly</option>
                    <option value="custom">Custom schedule</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Time (UTC)</Label>
                  <Input type="time" defaultValue="02:00" />
                  <p className="text-xs text-muted-foreground">Select a time when system usage is lowest</p>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="index-realtime" />
                  <Label htmlFor="index-realtime">Enable real-time indexing for critical documents</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave('indexing')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Branding</CardTitle>
                <CardDescription>
                  Customize the appearance of your Glean instance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input type="color" defaultValue="#9B87F5" className="w-16 h-10" />
                    <Input defaultValue="#9B87F5" className="flex-1" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input type="color" defaultValue="#F3F4F6" className="w-16 h-10" />
                    <Input defaultValue="#F3F4F6" className="flex-1" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Custom CSS</Label>
                  <textarea 
                    className="w-full min-h-[100px] rounded-md border border-input bg-background p-3 text-sm" 
                    placeholder="/* Add your custom CSS here */"
                  ></textarea>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Default</Button>
                <Button onClick={() => handleSave('branding')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Homepage Layout</CardTitle>
                <CardDescription>
                  Configure what users see when they first open Glean
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Homepage View</Label>
                  <select 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="search"
                  >
                    <option value="search">Search Homepage</option>
                    <option value="recent">Recent Documents</option>
                    <option value="pinned">Pinned Resources</option>
                    <option value="custom">Custom Dashboard</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show Recent Searches</p>
                    <p className="text-sm text-muted-foreground">
                      Display user's recent search history on homepage
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show Trending Searches</p>
                    <p className="text-sm text-muted-foreground">
                      Display popular searches across the organization
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave('homepage')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Manage API keys and access control
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <div className="flex space-x-2">
                    <Input 
                      type="password" 
                      value="sk_glean_a1b2c3d4e5f6g7h8i9j0" 
                      readOnly
                      className="flex-1"
                    />
                    <Button variant="outline">Show</Button>
                    <Button variant="outline">Copy</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This key grants full access to your organization's Glean data.
                    Keep it secure and don't share it publicly.
                  </p>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="text-destructive">
                    Regenerate API Key
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
                <CardDescription>
                  Configure how long data is stored in the system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Search History Retention</Label>
                  <select 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="90"
                  >
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                    <option value="180">180 days</option>
                    <option value="365">1 year</option>
                    <option value="forever">Forever</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label>Analytics Data Retention</Label>
                  <select 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="365"
                  >
                    <option value="90">90 days</option>
                    <option value="180">180 days</option>
                    <option value="365">1 year</option>
                    <option value="730">2 years</option>
                    <option value="forever">Forever</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="text-destructive">
                    Delete All Analytics Data
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave('retention')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="text-destructive">
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>
                  Actions that cannot be undone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Reset All Settings</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This will reset all settings to their default values. Connected data sources and indexed content will not be affected.
                  </p>
                  <Button variant="outline" className="text-destructive">
                    Reset All Settings
                  </Button>
                </div>
                
                <div className="border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Delete All Data</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This will permanently delete all indexed content, search history, and analytics data.
                    This action cannot be undone.
                  </p>
                  <Button variant="destructive">
                    Delete All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
