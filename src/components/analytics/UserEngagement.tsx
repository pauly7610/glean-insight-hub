
import React from 'react';
import DepartmentEngagement from './DepartmentEngagement';
import ActivityTimeTable from './ActivityTimeTable';
import PowerUsersTable from './PowerUsersTable';
import { getDepartmentData, getActivityTimeData, getPowerUserData } from './userEngagementData';

interface UserEngagementProps {
  timeRange: string;
}

const UserEngagement: React.FC<UserEngagementProps> = ({ timeRange }) => {
  const departmentData = getDepartmentData();
  const activityTimeData = getActivityTimeData();
  const powerUserData = getPowerUserData();

  return (
    <>
      <DepartmentEngagement 
        timeRange={timeRange} 
        departmentData={departmentData} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityTimeTable activityData={activityTimeData} />
        <PowerUsersTable 
          timeRange={timeRange}
          powerUsers={powerUserData}
        />
      </div>
    </>
  );
};

export default UserEngagement;
