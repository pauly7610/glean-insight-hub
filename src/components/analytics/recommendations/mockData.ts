
// Mock data for recommendation components

export const relatedContentData = [
  {
    sourceContent: "Product Roadmap Q2",
    relatedItems: [
      { title: "Q2 OKRs", accessRate: 78, department: "Product", actionTaken: false },
      { title: "Engineering Sprint Planning", accessRate: 65, department: "Engineering", actionTaken: false }
    ]
  },
  {
    sourceContent: "Sales Training Materials",
    relatedItems: [
      { title: "Customer Objection Handling", accessRate: 82, department: "Sales", actionTaken: true },
      { title: "Pricing Strategy", accessRate: 71, department: "Marketing", actionTaken: false }
    ]
  },
  {
    sourceContent: "Employee Onboarding Guide",
    relatedItems: [
      { title: "Company Benefits Overview", accessRate: 92, department: "HR", actionTaken: false },
      { title: "IT Setup Instructions", accessRate: 88, department: "IT", actionTaken: true }
    ]
  }
];

export const staleContentData = [
  { title: "Legacy Product Documentation", lastUpdated: "2023-10-15", accessCount: 3, department: "Product", priority: "high" },
  { title: "Old Marketing Campaign Guidelines", lastUpdated: "2023-08-22", accessCount: 5, department: "Marketing", priority: "medium" },
  { title: "Previous Quarter Financial Report", lastUpdated: "2024-01-10", accessCount: 7, department: "Finance", priority: "medium" },
  { title: "Outdated Sales Scripts", lastUpdated: "2023-11-05", accessCount: 2, department: "Sales", priority: "high" }
];

export const crossDeptOpportunitiesData = [
  { 
    content: "API Documentation", 
    primaryDept: "Engineering", 
    targetDept: "Sales", 
    relevance: "high",
    relatedSearches: ["technical specs", "API capabilities", "integration options"],
    actionRequired: "Share with Sales team"
  },
  { 
    content: "Customer Persona Research", 
    primaryDept: "Marketing", 
    targetDept: "Product", 
    relevance: "medium",
    relatedSearches: ["user needs", "customer profiles", "market segments"],
    actionRequired: "Use in next product planning" 
  },
  { 
    content: "Pricing Strategy", 
    primaryDept: "Sales", 
    targetDept: "Customer Success", 
    relevance: "high",
    relatedSearches: ["pricing tiers", "discount policy", "enterprise pricing"],
    actionRequired: "Schedule cross-team workshop" 
  }
];

export const trendingSearchesData = [
  { term: "new product launch", increase: "+325%", lastHours: 24, department: "Marketing", actionRequired: "Create FAQ document" },
  { term: "system outage", increase: "+270%", lastHours: 12, department: "Engineering", actionRequired: "Publish status update" },
  { term: "quarterly review template", increase: "+180%", lastHours: 36, department: "All", actionRequired: "Update template" },
  { term: "employee feedback form", increase: "+135%", lastHours: 48, department: "HR", actionRequired: "Create knowledge base article" }
];
