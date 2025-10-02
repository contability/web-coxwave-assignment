import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import EventContentList from './_components/content-list';
import { prefetchProjectList } from '@Lib/services/project';

const EventListPage = async () => {
  const queryClient = await prefetchProjectList();

  return (
    <main className="mx-auto max-w-6xl p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EventContentList />
      </HydrationBoundary>
    </main>
  );
};

export default EventListPage;
