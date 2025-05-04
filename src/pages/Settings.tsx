
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure your Glean instance</p>
        </div>
      </div>
      
      <Tabs defaultValue="general" className="mt-6">
        <div className="flex mb-6">
          <div className="w-64 mr-6">
            <TabsList className="flex flex-col items-start space-y-1 bg-transparent p-0">
              <TabsTrigger className="w-full justify-start pl-3 data-[state=active]:bg-muted" value="general">General</TabsTrigger>
              <TabsTrigger className="w-full justify-start pl-3 data-[state=active]:bg-muted" value="integrations">Integrations</TabsTrigger>
              <TabsTrigger className="w-full justify-start pl-3 data-[state=active]:bg-muted" value="security">Security & Privacy</TabsTrigger>
              <TabsTrigger className="w-full justify-start pl-3 data-[state=active]:bg-muted" value="customization">Customization</TabsTrigger>
              <TabsTrigger className="w-full justify-start pl-3 data-[state=active]:bg-muted" value="billing">Billing</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1">
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure basic settings for your Glean instance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Company Information</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" defaultValue="Acme Corporation" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company-domain">Domain</Label>
                        <Input id="company-domain" defaultValue="acmecorp.com" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Default Language</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en-US">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="en-GB">English (UK)</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="ja">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Time Zone</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="timezone">Time Zone</Label>
                      <Select defaultValue="America/Los_Angeles">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                          <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="Europe/London">London</SelectItem>
                          <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Content Integrations</CardTitle>
                  <CardDescription>Connect your content sources to Glean</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src="https://cdn.worldvectorlogo.com/logos/google-drive-icon-1.svg" className="h-8 w-8" alt="Google Drive" />
                        <div>
                          <h4 className="font-medium">Google Workspace</h4>
                          <p className="text-sm text-muted-foreground">Access Google Drive, Docs, Sheets and Slides</p>
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" className="h-8 w-8" alt="Slack" />
                        <div>
                          <h4 className="font-medium">Slack</h4>
                          <p className="text-sm text-muted-foreground">Access messages and files from Slack</p>
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src="https://cdn.worldvectorlogo.com/logos/confluence-1.svg" className="h-8 w-8" alt="Confluence" />
                        <div>
                          <h4 className="font-medium">Confluence</h4>
                          <p className="text-sm text-muted-foreground">Access Confluence spaces and pages</p>
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" className="h-8 w-8" alt="GitHub" />
                        <div>
                          <h4 className="font-medium">GitHub</h4>
                          <p className="text-sm text-muted-foreground">Access GitHub repositories and documentation</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" className="h-8 w-8" alt="Notion" />
                        <div>
                          <h4 className="font-medium">Notion</h4>
                          <p className="text-sm text-muted-foreground">Access Notion pages and databases</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" className="mr-2">Configure Sources</Button>
                    <Button>Add Integration</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security & Privacy</CardTitle>
                  <CardDescription>Configure security settings for your Glean instance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Authentication</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="sso" checked={true} />
                        <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Enable SSO for your organization</p>
                    </div>
                    
                    <div className="grid gap-2 mt-2">
                      <Label htmlFor="sso-provider">SSO Provider</Label>
                      <Select defaultValue="okta">
                        <SelectTrigger id="sso-provider">
                          <SelectValue placeholder="Select SSO provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="okta">Okta</SelectItem>
                          <SelectItem value="azure">Azure AD</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="onelogin">OneLogin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Content Access</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="access-control" checked={true} />
                        <Label htmlFor="access-control">Enable Role-Based Access Control</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Restrict content access based on user roles and groups</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Retention</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="data-retention">Search History Retention Period</Label>
                      <Select defaultValue="90">
                        <SelectTrigger id="data-retention">
                          <SelectValue placeholder="Select retention period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="customization">
              <Card>
                <CardHeader>
                  <CardTitle>Customization</CardTitle>
                  <CardDescription>Customize the appearance of your Glean instance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Branding</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="brand-name">Brand Name</Label>
                        <Input id="brand-name" defaultValue="Acme Knowledge" />
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Logo</Label>
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
                            <span className="text-2xl font-bold">A</span>
                          </div>
                          <Button variant="outline" size="sm">Upload Logo</Button>
                        </div>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="primary-color">Primary Color</Label>
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-[#9b87f5]"></div>
                          <Input id="primary-color" defaultValue="#9b87f5" className="w-[180px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">User Interface</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="dark-mode" />
                        <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Allow users to switch to dark mode</p>
                    </div>
                    
                    <div className="grid gap-2 mt-4">
                      <Label htmlFor="default-view">Default Search Results View</Label>
                      <Select defaultValue="list">
                        <SelectTrigger id="default-view">
                          <SelectValue placeholder="Select default view" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="list">List View</SelectItem>
                          <SelectItem value="card">Card View</SelectItem>
                          <SelectItem value="compact">Compact View</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" className="mr-2">Preview</Button>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                  <CardDescription>Manage your billing information and subscription details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Current Plan</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Enterprise Plan</h4>
                          <p className="text-sm text-muted-foreground">Unlimited users, advanced security features, dedicated support</p>
                          <p className="text-sm mt-2">Renewal Date: June 15, 2024</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Method</h3>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 border rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <rect width="32" height="32" rx="4" fill="#EFF1F3"/>
                          <path d="M9 19.2H23V20.8H9V19.2Z" fill="#697586"/>
                          <path d="M23 11.2H9V16H23V11.2Z" fill="#697586"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 09/2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">Change</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Billing Information</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="billing-email">Billing Email</Label>
                      <Input id="billing-email" defaultValue="finance@acmecorp.com" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="company-name-billing">Company Name</Label>
                        <Input id="company-name-billing" defaultValue="Acme Corporation" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tax-id">Tax ID/VAT</Label>
                        <Input id="tax-id" defaultValue="US123456789" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" className="mr-2">View Invoices</Button>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;
