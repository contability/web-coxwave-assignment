'use client';

import Select from '@Components/fields/select';
import { useEventList } from '@Lib/hooks/event';
import { useProject, useProjectList } from '@Lib/hooks/project';
import { useState } from 'react';

const EventContentList = () => {
  const [projectId, setProjectId] = useState('');
  const projectListResult = useProjectList();
  console.log('🚀 ~ EventContentList ~ projectListResult:', projectListResult);
  const projectResult = useProject('project-1');
  const eventListResult = useEventList(
    'project-1',
    1,
    '',
    'create_time >= "2024-12-19T23:54:54.281195Z" AND create_time < "2024-12-20T23:54:54.281195Z"',
  );

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <Select
          optionList={projectListResult.data?.projects ?? []}
          value={projectId}
          setValue={setProjectId}
          labelField="displayName"
          valueField="id"
        />
      </form>
    </div>
  );
};

export default EventContentList;
