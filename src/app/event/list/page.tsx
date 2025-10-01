import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import EventContentList from './_components/content-list';
import { prefetchProjectList } from '@Lib/services/project/server';

const EventListPage = async () => {
  const queryClient = await prefetchProjectList();

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EventContentList />
      </HydrationBoundary>
    </main>
  );
};

export default EventListPage;
