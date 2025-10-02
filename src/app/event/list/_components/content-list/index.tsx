'use client';

import { useEventList } from '@Lib/hooks/event';
import { useProject } from '@Lib/hooks/project';
import { useState } from 'react';
import { getDateRangeFilter } from '@Lib/utils/date';
import { DateRangeType, CustomDateRange } from '@DataTypes/date';
import SearchFilters from './search-filters';
import EventList from './event-list';

const EventContentList = () => {
  const [projectId, setProjectId] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState<DateRangeType | null>(null);
  const [customDateRangeValue, setCustomDateRangeValue] = useState<CustomDateRange | null>(null);

  const projectResult = useProject(projectId);
  const timeZone = projectResult.data?.project?.timeZone?.id;
  const dateFilter = selectedDateRange
    ? getDateRangeFilter(selectedDateRange, timeZone, customDateRangeValue ?? undefined)
    : '';
  const eventListResult = useEventList(1, '', projectId, dateFilter);

  return (
    <div>
      <SearchFilters
        projectId={projectId}
        setProjectId={setProjectId}
        selectedDateRange={selectedDateRange}
        setSelectedDateRange={setSelectedDateRange}
        setCustomDateRangeValue={setCustomDateRangeValue}
      />
      <EventList events={eventListResult.data?.events ?? []} timeZone={timeZone} />
    </div>
  );
};

export default EventContentList;
