import { VideoSnippet } from '@/components'
import { SearchPageProps } from '@/pages/search'
import Link from 'next/link'
import { SearchWrapper, VideoSnippetContainer } from './search.styles'
import { useInfiniteQuery } from 'react-query'
import { searchVideos } from '@/services/youtubeApi'
import { FoundVideo, SearchVideosResponse } from '@/types'
import { useMemo } from 'react'

const SearchPage: React.FC<SearchPageProps> = (initialSearch) => {
  const { data } = useInfiniteQuery<SearchVideosResponse>(
    'searchResults',
    ({ pageParam: pageToken = undefined }) =>
      searchVideos({ q: '', pageToken }),
    {
      initialData: {
        pages: [initialSearch],
        pageParams: [],
      },
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
      getPreviousPageParam: (lastPage) => lastPage.prevPageToken,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  )

  const videos = useMemo(
    () =>
      data?.pages.reduce(
        (prev: FoundVideo[], current) => [...prev, ...current.items],
        []
      ) ?? [],
    [data]
  )

  return (
    <SearchWrapper>
      {videos.map((video) => (
        <VideoSnippetContainer key={video.id.videoId}>
          <Link href={`/watch?v=${video.id.videoId}`} passHref>
            <a>
              <VideoSnippet video={video} />
            </a>
          </Link>
        </VideoSnippetContainer>
      ))}
    </SearchWrapper>
  )
}

export default SearchPage
