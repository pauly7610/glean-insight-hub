
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Power user data type definition
export interface PowerUserData {
  name: string;
  department: string;
  searches: number;
  contentViews: number;
}

interface PowerUsersTableProps {
  timeRange: string;
  powerUsers: PowerUserData[];
}

const PowerUsersTable: React.FC<PowerUsersTableProps> = ({ timeRange, powerUsers }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Power Users</CardTitle>
        <CardDescription>
          Users with highest engagement in the past {timeRange} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-right">Searches</TableHead>
              <TableHead className="text-right">Content Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {powerUsers.map((user) => (
              <TableRow key={user.name}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell className="text-right">{user.searches}</TableCell>
                <TableCell className="text-right">{user.contentViews}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PowerUsersTable;
