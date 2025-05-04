
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Activity time data type definition
export interface ActivityTimeData {
  timeOfDay: string;
  percentage: number;
}

interface ActivityTimeTableProps {
  activityData: ActivityTimeData[];
}

const ActivityTimeTable: React.FC<ActivityTimeTableProps> = ({ activityData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity by Time of Day</CardTitle>
        <CardDescription>
          When users are most active on the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityData.map((timeSlot) => (
            <div key={timeSlot.timeOfDay} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{timeSlot.timeOfDay}</span>
                <span className="text-sm text-muted-foreground">{timeSlot.percentage}%</span>
              </div>
              <Progress value={timeSlot.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeTable;
