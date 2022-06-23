import type { GetServerSideProps, NextPage } from 'next'
import { Search } from '@/screens'
import { youtubeApi } from '@/services'
import { FoundVideo, PageInfo, SearchVideosResponse } from '@/types'

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  const { q } = context.query
  const { data } = await youtubeApi.get<SearchVideosResponse>('/search', {
    params: {
      part: 'snippet',
      q,
      maxResults: 10,
    },
  })
  return {
    props: {
      videos: data.items,
      nextPageToken: data.nextPageToken,
      pageInfo: data.pageInfo,
    },
  }
}

export type SearchPageProps = {
  nextPageToken: string
  pageInfo: PageInfo
  videos: FoundVideo[]
}

const SearchPage: NextPage<SearchPageProps> = (props) => {
  return <Search {...props} />
}

export default SearchPage
