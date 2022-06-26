import type { GetServerSideProps, NextPage } from 'next'
import { Search } from '@/screens'
import { SearchVideosResponse } from '@/types'
import { searchVideos } from '@/services/youtube-api'

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  const { q } = context.query

  if (!q) throw new Error('No query provided')
  if (typeof q !== 'string') throw new Error('Invalid query')

  const data = await searchVideos({ q, part: 'snippet' })
  return {
    props: {
      ...data,
    },
  }
}

export type SearchPageProps = SearchVideosResponse

const SearchPage: NextPage<SearchPageProps> = (props) => {
  return <Search {...props} />
}

export default SearchPage
