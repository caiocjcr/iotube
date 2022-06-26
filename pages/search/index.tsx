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

  try {
    const initialSearch = await searchVideos({ q, part: 'snippet' })
    return {
      props: {
        error: false,
        initialSearch,
      },
    }
  } catch (error: unknown) {
    return {
      props: {
        error: true,
        initialSearch: null,
      },
    }
  }
}

export type SearchPageProps =
  | {
      error: false
      initialSearch: SearchVideosResponse
    }
  | {
      error: true
      initialSearch: null
    }

const SearchPage: NextPage<SearchPageProps> = (props) => {
  return <Search {...props} />
}

export default SearchPage
