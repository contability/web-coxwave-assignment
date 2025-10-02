import { listEvents } from '@buf/alignai_frontend-challenge-datetz.connectrpc_query-es/event/v1/event-EventService_connectquery';
import { useQuery } from '@connectrpc/connect-query';

export const useEventList = (projectId: string, pageSize: number, pageToken: string, filter?: string) => {
  return useQuery(listEvents, { projectId, pageSize, pageToken, filter });
};
