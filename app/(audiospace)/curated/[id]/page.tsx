import { notFound } from 'next/navigation';
import { collections, tracks } from '@/config/dummy-data';
import CuratedDetails from '@/components/curated/CuratedDetails';
import TrackList from '@/components/tracks/TrackList';
import TracksCards from '@/components/tracks/TracksCards';
import { Tabs } from '@radix-ui/react-tabs';
import { TabsContent } from '@/components/ui/tabs';
import DynamicNav from '@/components/curated/DynamicNav';

export default async function page({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ sort: string; type: string }>;
}) {
	const { sort, type } = await searchParams;
	const { id } = await params;
	const tabValue = sort === 'popular' ? 'popular' : 'new';
	const isTable = type === 'table';
	const curated = collections.find((a) => {
		return a.id === id;
	});

	if (!curated) {
		notFound();
	}

	const filteredTracks = tracks.filter((t) => t.collection.id === curated.id);
	return (
		<>
			<CuratedDetails curated={curated} />

			<Tabs value={tabValue} className='mt-4 sm:mt-6 grid gap-2 '>
				<DynamicNav type={type} sort={sort} />

				<h1
					className={
						'text-xl md:text-[22px] font-semibold text-primary-foreground mt-4 '
					}
				>
					These tracks have been compiled by Audiomatch
				</h1>
				<TabsContent value='new'>
					{isTable ? (
						<TrackList tracks={filteredTracks} className='p-0' />
					) : (
						<TracksCards tracks={filteredTracks} />
					)}
				</TabsContent>
				<TabsContent value='popular'>
					{isTable ? (
						<TrackList tracks={filteredTracks} className='p-0' />
					) : (
						<TracksCards tracks={filteredTracks} />
					)}
				</TabsContent>
			</Tabs>
		</>
	);
}
