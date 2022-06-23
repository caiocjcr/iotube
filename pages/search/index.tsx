import type { GetServerSideProps, NextPage } from 'next'
import { youtubeApi } from '../../services'
import { FoundVideo, PageInfo, SearchVideosResponse } from '../../types'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q } = context.query
  const { data: videoSearchResults } =
    await youtubeApi.get<SearchVideosResponse>('/search', {
      params: {
        part: 'snippet',
        q,
        maxResults: 10,
      },
    })
  return {
    props: { videoSearchResults },
  }
}

type SearchPageProps = {
  nextPageToken: string
  pageInfo: PageInfo
  videos: FoundVideo
}

const Search: NextPage<SearchPageProps> = () => {
  return <div>search page</div>
}

export default Search
