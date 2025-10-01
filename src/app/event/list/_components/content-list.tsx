'use client';

import { useProjectList } from '@Lib/services/project/client';

const EventContentList = () => {
  const result = useProjectList();
  console.log(result);

  return <div>TEST</div>;
};

export default EventContentList;
