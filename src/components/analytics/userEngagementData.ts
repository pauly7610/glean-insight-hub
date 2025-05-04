
import { DepartmentData } from './DepartmentEngagement';
import { ActivityTimeData } from './ActivityTimeTable';
import { PowerUserData } from './PowerUsersTable';

// Mock data for department engagement
export const getDepartmentData = (): DepartmentData[] => [
  { 
    department: "Engineering", 
    activeUsers: 87, 
    totalUsers: 95, 
    searchesPerUser: 12.4, 
    contentViewsPerUser: 28.7, 
    change: "+8%", 
    isPositive: true 
  },
  { 
    department: "Marketing", 
    activeUsers: 45, 
    totalUsers: 52, 
    searchesPerUser: 9.2, 
    contentViewsPerUser: 22.3, 
    change: "+15%", 
    isPositive: true 
  },
  { 
    department: "Sales", 
    activeUsers: 63, 
    totalUsers: 70, 
    searchesPerUser: 7.8, 
    contentViewsPerUser: 18.5, 
    change: "-3%", 
    isPositive: false 
  },
  { 
    department: "Product", 
    activeUsers: 42, 
    totalUsers: 45, 
    searchesPerUser: 14.7, 
    contentViewsPerUser: 32.1, 
    change: "+12%", 
    isPositive: true 
  },
  { 
    department: "Customer Success", 
    activeUsers: 38, 
    totalUsers: 42, 
    searchesPerUser: 10.3, 
    contentViewsPerUser: 24.8, 
    change: "+5%", 
    isPositive: true 
  },
  { 
    department: "Human Resources", 
    activeUsers: 12, 
    totalUsers: 15, 
    searchesPerUser: 6.5, 
    contentViewsPerUser: 15.2, 
    change: "-2%", 
    isPositive: false 
  },
  { 
    department: "Finance", 
    activeUsers: 18, 
    totalUsers: 22, 
    searchesPerUser: 5.8, 
    contentViewsPerUser: 13.7, 
    change: "+4%", 
    isPositive: true 
  },
  { 
    department: "Legal", 
    activeUsers: 7, 
    totalUsers: 8, 
    searchesPerUser: 8.3, 
    contentViewsPerUser: 19.4, 
    change: "+0%", 
    isPositive: true 
  }
];

// Mock data for user activity by time of day
export const getActivityTimeData = (): ActivityTimeData[] => [
  { timeOfDay: "Early Morning (5am-8am)", percentage: 8 },
  { timeOfDay: "Morning (8am-11am)", percentage: 28 },
  { timeOfDay: "Midday (11am-2pm)", percentage: 18 },
  { timeOfDay: "Afternoon (2pm-5pm)", percentage: 25 },
  { timeOfDay: "Evening (5pm-8pm)", percentage: 15 },
  { timeOfDay: "Night (8pm-5am)", percentage: 6 }
];

// Mock data for power users
export const getPowerUserData = (): PowerUserData[] => [
  {
    name: "Sarah Johnson",
    department: "Engineering",
    searches: 87,
    contentViews: 142
  },
  {
    name: "Michael Chen",
    department: "Product",
    searches: 76,
    contentViews: 138
  },
  {
    name: "Jessica Liu",
    department: "Marketing",
    searches: 65,
    contentViews: 124
  },
  {
    name: "David Kim",
    department: "Sales",
    searches: 58,
    contentViews: 112
  },
  {
    name: "Amanda Reyes",
    department: "Customer Success",
    searches: 52,
    contentViews: 105
  }
];
