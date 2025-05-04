
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import TrendingSearchTerms from './TrendingSearchTerms';
import ContentRecommendations from './ContentRecommendations';
import DepartmentComparison from './DepartmentComparison';
import AdvancedFilters from './AdvancedFilters';

interface SearchInsightsProps {
  timeRange: string;
}

const SearchInsights: React.FC<SearchInsightsProps> = ({ timeRange }) => {
  const [filters, setFilters] = useState({
    dateRange: { from: undefined, to: undefined },
    department: 'all'
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filters applied:', newFilters);
  };

  return (
    <>
      <div className="mb-4">
        <AdvancedFilters onFilterChange={handleFilterChange} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TrendingSearchTerms timeRange={timeRange} />
        <ContentRecommendations timeRange={timeRange} />
      </div>

      <div className="mt-6">
        <DepartmentComparison timeRange={timeRange} />
      </div>
    </>
  );
};

export default SearchInsights;
