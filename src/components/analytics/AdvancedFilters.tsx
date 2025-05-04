
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';
import { format } from 'date-fns';

interface AdvancedFiltersProps {
  onFilterChange: (filters: {
    dateRange: { from: Date | undefined; to: Date | undefined };
    department: string;
  }) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ onFilterChange }) => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [department, setDepartment] = useState<string>('all');
  const [isOpen, setIsOpen] = useState(false);
  
  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'product', label: 'Product' },
    { value: 'customer-success', label: 'Customer Success' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'legal', label: 'Legal' },
  ];

  const handleApplyFilters = () => {
    onFilterChange({ dateRange, department });
    setIsOpen(false);
  };

  const clearFilters = () => {
    setDateRange({ from: undefined, to: undefined });
    setDepartment('all');
    onFilterChange({ dateRange: { from: undefined, to: undefined }, department: 'all' });
  };

  const hasActiveFilters = dateRange.from !== undefined || department !== 'all';

  return (
    <div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-purple-200 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
          >
            <Filter className="h-4 w-4 mr-2" />
            {hasActiveFilters ? 'Filters Applied' : 'Filter'}
            {hasActiveFilters && (
              <Badge className="ml-2 bg-primary text-white" variant="default">
                {(dateRange.from ? 1 : 0) + (department !== 'all' ? 1 : 0)}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Date Range</h4>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border"
              initialFocus
            />

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Department</h4>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between pt-2">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
              <Button size="sm" onClick={handleApplyFilters}>Apply Filters</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
      {hasActiveFilters && (
        <div className="mt-2 flex flex-wrap gap-2">
          {dateRange.from && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <span>Date: {format(dateRange.from, 'MMM d, yyyy')}{dateRange.to ? ` - ${format(dateRange.to, 'MMM d, yyyy')}` : ''}</span>
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => {
                  setDateRange({ from: undefined, to: undefined });
                  onFilterChange({ dateRange: { from: undefined, to: undefined }, department });
                }}
              />
            </Badge>
          )}
          {department !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <span>Department: {departments.find(d => d.value === department)?.label}</span>
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => {
                  setDepartment('all');
                  onFilterChange({ dateRange, department: 'all' });
                }}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedFilters;
