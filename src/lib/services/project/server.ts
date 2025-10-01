import { createQueryOptions } from '@connectrpc/connect-query';
import { QueryClient } from '@tanstack/react-query';
import { listProjects } from '@buf/alignai_frontend-challenge-datetz.connectrpc_query-es/event/v1/event-EventService_connectquery';
import { connectTransport } from '../connect-transport';

export const prefetchProjectList = async () => {
  const queryClient = new QueryClient();
  const queryOptions = createQueryOptions(listProjects, {}, { transport: connectTransport });
  await queryClient.prefetchQuery(queryOptions);
  return queryClient;
};
