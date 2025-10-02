'use client';

import { useEventList } from '@Lib/hooks/event';
import { useProject } from '@Lib/hooks/project';
import { useState } from 'react';
import { formatTimestampReadable, getDateRangeFilter } from '@Lib/utils/date';
import { DateRangeType } from '@DataTypes/date';
import SearchFilters from './search-filters';

const EventContentList = () => {
  const [projectId, setProjectId] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState<DateRangeType | null>(null);

  const projectResult = useProject(projectId);
  const timeZone = projectResult.data?.project?.timeZone?.id;
  const dateFilter = selectedDateRange ? getDateRangeFilter(selectedDateRange, timeZone) : '';
  const eventListResult = useEventList(1, '', projectId, dateFilter);

  return (
    <div>
      <SearchFilters
        projectId={projectId}
        setProjectId={setProjectId}
        selectedDateRange={selectedDateRange}
        setSelectedDateRange={setSelectedDateRange}
      />
      <section aria-label="event-list-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Create Time</th>
            </tr>
          </thead>
          <tbody>
            {eventListResult.data?.events?.map(event => {
              const createTime = formatTimestampReadable(event.createTime, timeZone);
              return (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.type}</td>
                  <td>{createTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default EventContentList;
