'use client';

import Select from '@Components/fields/select';
import Button from '@Components/button';
import { useProjectList } from '@Lib/hooks/project';
import { DateRangeType } from '@DataTypes/date';

interface SearchFiltersProps {
  projectId: string;
  setProjectId: (value: string) => void;
  selectedDateRange: DateRangeType | null;
  setSelectedDateRange: (rangeType: DateRangeType | null) => void;
}

const SearchFilters = ({ projectId, setProjectId, selectedDateRange, setSelectedDateRange }: SearchFiltersProps) => {
  const projectListResult = useProjectList();

  const handleDateRange = (rangeType: DateRangeType) => {
    setSelectedDateRange(rangeType);
  };

  return (
    <section aria-label="search-filter-section" onSubmit={e => e.preventDefault()} className="flex gap-6">
      <Select
        optionList={projectListResult.data?.projects ?? []}
        value={projectId}
        setValue={setProjectId}
        labelField="displayName"
        valueField="id"
        className="w-fit"
        placeholder="Project"
      />
      <div className="flex w-full gap-2">
        <Button isSelected={selectedDateRange === 'today'} onClick={() => handleDateRange('today')}>
          Today
        </Button>
        <Button isSelected={selectedDateRange === 'yesterday'} onClick={() => handleDateRange('yesterday')}>
          Yesterday
        </Button>
        <Button isSelected={selectedDateRange === '7d'} onClick={() => handleDateRange('7d')}>
          7D
        </Button>
        <Button isSelected={selectedDateRange === '30d'} onClick={() => handleDateRange('30d')}>
          30D
        </Button>
        <Button isSelected={selectedDateRange === '3m'} onClick={() => handleDateRange('3m')}>
          3M
        </Button>
        <Button isSelected={selectedDateRange === '6m'} onClick={() => handleDateRange('6m')}>
          6M
        </Button>
        <Button isSelected={selectedDateRange === '12m'} onClick={() => handleDateRange('12m')}>
          12M
        </Button>
      </div>
    </section>
  );
};

export default SearchFilters;
