import { ErrorNotice, VideoSnippet } from '@/components'
import { SearchPageProps } from '@/pages/search'
import Link from 'next/link'
import { SearchWrapper, VideoSnippetContainer } from './search.styles'
import { useInfiniteQuery } from 'react-query'
import { searchVideos } from '@/services/youtube-api'
import { FoundVideo, SearchVideosResponse } from '@/types'
import { useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

const SkeletonLoader: React.FC<{ vertical: boolean }> = ({ vertical }) => (
  <>
    <VideoSnippetContainer>
      <VideoSnippet.Skeleton vertical={vertical} />
    </VideoSnippetContainer>
    <VideoSnippetContainer>
      <VideoSnippet.Skeleton vertical={vertical} />
    </VideoSnippetContainer>
    <VideoSnippetContainer>
      <VideoSnippet.Skeleton vertical={vertical} />
    </VideoSnippetContainer>
  </>
)

const SearchPage: React.FC<SearchPageProps> = ({ error, initialSearch }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const {
    query: { q = '' },
  } = useRouter()
  const { data, hasNextPage, fetchNextPage } =
    useInfiniteQuery<SearchVideosResponse>(
      'searchResults',
      ({ pageParam: pageToken = undefined }) =>
        searchVideos({ q: q as string, pageToken, part: 'snippet' }),
      {
        initialData: {
          pages: error ? [] : [initialSearch],
          pageParams: [],
        },
        ...(!error && {
          getNextPageParam: (lastPage) => lastPage.nextPageToken,
          getPreviousPageParam: (lastPage) => lastPage.prevPageToken,
        }),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: !error,
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

  if (error)
    return (
      <SearchWrapper>
        <ErrorNotice />
      </SearchWrapper>
    )

  return (
    <SearchWrapper>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<SkeletonLoader vertical={isMobile} />}
      >
        {videos.map((video) => (
          <VideoSnippetContainer key={video.id.videoId}>
            <Link href={`/watch?v=${video.id.videoId}`} passHref>
              <a>
                <VideoSnippet video={video} />
              </a>
            </Link>
          </VideoSnippetContainer>
        ))}
      </InfiniteScroll>
    </SearchWrapper>
  )
}

export default SearchPage
