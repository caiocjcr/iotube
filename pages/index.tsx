import type { GetServerSideProps, NextPage } from 'next'
import { Home } from '@/screens'
import { GetVideosResponse } from '@/types'
import { getVideos } from '@/services/youtube-api'

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  try {
    const initialData = await getVideos({
      chart: 'mostPopular',
      part: 'snippet',
    })
    return {
      props: {
        error: false,
        initialData,
      },
    }
  } catch (error: unknown) {
    return {
      props: {
        error: true,
        initialData: null,
      },
    }
  }
}

export type HomePageProps =
  | {
      error: false
      initialData: GetVideosResponse
    }
  | {
      error: true
      initialData: null
    }

const HomePage: NextPage<HomePageProps> = (props) => <Home {...props} />

export default HomePage
