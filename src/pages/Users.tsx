
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter, Download, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', department: 'Engineering', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
    { id: 2, name: 'Michael Chen', email: 'michael.chen@company.com', department: 'Product', role: 'Member', status: 'Active', lastActive: '10 minutes ago' },
    { id: 3, name: 'Jessica Liu', email: 'jessica.liu@company.com', department: 'Marketing', role: 'Member', status: 'Active', lastActive: '1 day ago' },
    { id: 4, name: 'David Kim', email: 'david.kim@company.com', department: 'Sales', role: 'Member', status: 'Inactive', lastActive: '5 days ago' },
    { id: 5, name: 'Amanda Reyes', email: 'amanda.reyes@company.com', department: 'Customer Success', role: 'Admin', status: 'Active', lastActive: '3 hours ago' },
    { id: 6, name: 'Robert Johnson', email: 'robert.johnson@company.com', department: 'Engineering', role: 'Member', status: 'Active', lastActive: '45 minutes ago' },
    { id: 7, name: 'Emily Wang', email: 'emily.wang@company.com', department: 'Marketing', role: 'Member', status: 'Active', lastActive: '2 days ago' },
    { id: 8, name: 'James Wilson', email: 'james.wilson@company.com', department: 'Finance', role: 'Member', status: 'Inactive', lastActive: '10 days ago' },
    { id: 9, name: 'Sofia Rodriguez', email: 'sofia.rodriguez@company.com', department: 'Legal', role: 'Member', status: 'Active', lastActive: '4 hours ago' },
    { id: 10, name: 'William Taylor', email: 'william.taylor@company.com', department: 'Engineering', role: 'Member', status: 'Active', lastActive: '30 minutes ago' },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const invitations = [
    { email: 'andrew.smith@company.com', department: 'Engineering', role: 'Member', sentDate: '2024-05-01', status: 'Pending' },
    { email: 'kelly.zhang@company.com', department: 'Product', role: 'Admin', sentDate: '2024-05-02', status: 'Pending' },
    { email: 'thomas.garcia@company.com', department: 'Sales', role: 'Member', sentDate: '2024-05-03', status: 'Expired' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Users & Groups</h1>
          <p className="text-muted-foreground mt-1">Manage users and their access to Glean</p>
        </div>
        <Button>Invite Users</Button>
      </div>
      
      <Tabs defaultValue="users" className="mt-6">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="invitations">Invitations</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="users">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>All Users</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search users..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastActive}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Deactivate User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invitations">
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Manage invitations that have been sent to new users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invitations.map((invite) => (
                    <TableRow key={invite.email}>
                      <TableCell className="font-medium">{invite.email}</TableCell>
                      <TableCell>{invite.department}</TableCell>
                      <TableCell>{invite.role}</TableCell>
                      <TableCell>{invite.sentDate}</TableCell>
                      <TableCell>
                        <Badge variant={invite.status === 'Pending' ? 'outline' : 'secondary'}>
                          {invite.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Resend
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Groups</CardTitle>
                  <CardDescription>Organize users into groups for easier permission management</CardDescription>
                </div>
                <Button size="sm">Create Group</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Engineering</TableCell>
                    <TableCell>All engineering team members</TableCell>
                    <TableCell>38 users</TableCell>
                    <TableCell>Mar 14, 2024</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Product</TableCell>
                    <TableCell>Product managers and designers</TableCell>
                    <TableCell>24 users</TableCell>
                    <TableCell>Mar 15, 2024</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sales</TableCell>
                    <TableCell>Sales and account management</TableCell>
                    <TableCell>42 users</TableCell>
                    <TableCell>Mar 10, 2024</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Users;
