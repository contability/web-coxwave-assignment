'use client';

import { useQuery } from '@connectrpc/connect-query';
import {
  listProjects,
  getProject,
  listEvents,
} from '@buf/alignai_frontend-challenge-datetz.connectrpc_query-es/event/v1/event-EventService_connectquery';

export const useProjectList = () => {
  return useQuery(listProjects, {}, { refetchOnWindowFocus: false });
};

export const useProject = (projectId: string) => {
  return useQuery(getProject, { id: projectId }, { refetchOnWindowFocus: false });
};

export const useEventList = (projectId: string, pageSize: number, pageToken: string) => {
  return useQuery(listEvents, { projectId, pageSize, pageToken });
};
