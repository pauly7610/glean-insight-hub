
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Download, FileText, FileSpreadsheet, ChartPie } from 'lucide-react';
import { toast } from 'sonner';

interface ReportExporterProps {
  timeRange: string;
  tabId: string;
}

const ReportExporter: React.FC<ReportExporterProps> = ({ timeRange, tabId }) => {
  const [format, setFormat] = useState('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedSections, setSelectedSections] = useState({
    summary: true,
    details: true,
    charts: true,
    rawData: false
  });

  const handleSectionToggle = (section: keyof typeof selectedSections) => {
    setSelectedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleExport = () => {
    setIsExporting(true);
    
    // Simulate export process
    setTimeout(() => {
      console.log(`Exporting ${tabId} data as ${format.toUpperCase()}...`);
      console.log('Selected sections:', selectedSections);
      setIsExporting(false);
      toast.success(`${getFileExtension(format).toUpperCase()} export complete`, {
        description: `Your ${tabId} report has been downloaded`,
      });
    }, 1500);
  };

  const getFileExtension = (format: string) => {
    switch (format) {
      case 'pdf': return 'pdf';
      case 'csv': return 'csv';
      case 'excel': return 'xlsx';
      default: return format;
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'pdf': return <FileText className="h-4 w-4 mr-2" />;
      case 'csv': return <FileSpreadsheet className="h-4 w-4 mr-2" />;
      case 'excel': return <FileSpreadsheet className="h-4 w-4 mr-2" />;
      default: return <ChartPie className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="secondary" 
          size="sm"
          disabled={isExporting}
          className="bg-purple-100 hover:bg-purple-200 text-purple-900 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 transition-colors"
        >
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? 'Exporting...' : 'Export Report'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-4">
          <h4 className="font-medium">Export Report</h4>
          <p className="text-sm text-muted-foreground">
            Select format and contents to export for the {tabId} data from the past {timeRange} days.
          </p>

          <div className="space-y-2">
            <h5 className="text-sm font-medium">Format</h5>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Document</SelectItem>
                <SelectItem value="csv">CSV Spreadsheet</SelectItem>
                <SelectItem value="excel">Excel Spreadsheet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm font-medium">Include</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="summary" 
                  checked={selectedSections.summary} 
                  onCheckedChange={() => handleSectionToggle('summary')}
                />
                <Label htmlFor="summary">Summary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="details" 
                  checked={selectedSections.details} 
                  onCheckedChange={() => handleSectionToggle('details')}
                />
                <Label htmlFor="details">Detailed Metrics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="charts" 
                  checked={selectedSections.charts} 
                  onCheckedChange={() => handleSectionToggle('charts')}
                />
                <Label htmlFor="charts">Charts & Visualizations</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rawData" 
                  checked={selectedSections.rawData} 
                  onCheckedChange={() => handleSectionToggle('rawData')}
                />
                <Label htmlFor="rawData">Raw Data</Label>
              </div>
            </div>
          </div>

          <Button 
            className="w-full flex items-center" 
            onClick={handleExport}
            disabled={isExporting || !Object.values(selectedSections).some(Boolean)}
          >
            {getFormatIcon(format)}
            {isExporting ? 'Processing...' : `Export as ${format.toUpperCase()}`}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReportExporter;
