import { formatTimestampReadable } from '@Lib/utils/date';
import React from 'react';
import type { useEventList } from '@Lib/hooks/event';

type UseEventListResult = ReturnType<typeof useEventList>;
type EventListItem = NonNullable<NonNullable<UseEventListResult['data']>['events']>[number];

interface EventListProps {
  events?: readonly EventListItem[] | null;
  timeZone?: string;
}

const EventList = ({ events, timeZone }: EventListProps) => {
  return (
    <section aria-label="event-list-section">
      <div className="overflow-x-auto rounded border border-gray-200">
        <table className="w-full border-collapse text-left text-base">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-3 py-2 font-medium text-gray-700">
                ID
              </th>
              <th scope="col" className="px-3 py-2 font-medium text-gray-700">
                Type
              </th>
              <th scope="col" className="px-3 py-2 font-medium text-gray-700">
                Create Time
              </th>
            </tr>
          </thead>
          <tbody>
            {events?.map(event => {
              const createTime = formatTimestampReadable(event.createTime, timeZone);
              return (
                <tr key={event.id} className="odd:bg-white even:bg-gray-50 focus-within:bg-blue-50 hover:bg-blue-50">
                  <td className="px-3 py-2 text-gray-900">{event.id}</td>
                  <td className="px-3 py-2 text-gray-900">{event.type}</td>
                  <td className="px-3 py-2 text-gray-900">{createTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* TODO: usePagination hook, Pagination component 추가 필요 */}
    </section>
  );
};

export default EventList;
