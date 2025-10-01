'use client';

import { useEventList, useProject, useProjectList } from '@Lib/services/project/client';

const EventContentList = () => {
  const projectListResult = useProjectList();
  console.log('🚀 ~ EventContentList ~ projectListResult:', projectListResult);
  const s = useProject('project-1');
  console.log('🚀 ~ EventContentList ~ s:', s);
  const f = useEventList('project-1', 1, '');
  console.log('🚀 ~ EventContentList ~ f:', f);

  return <div>TEST</div>;
};

export default EventContentList;
