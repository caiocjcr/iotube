import type { GetServerSideProps, NextPage } from 'next'
import { Watch } from '@/screens'
import { youtubeApi } from '@/services'
import { GetVideoResponse, VideoWithPlayer } from '@/types'

export const getServerSideProps: GetServerSideProps<WatchPageProps> = async (
  context
) => {
  const { v } = context.query
  const { data } = await youtubeApi.get<GetVideoResponse>('/videos', {
    params: {
      part: 'snippet,player',
      id: v,
    },
  })
  if (!data.items.length) context.res.statusCode = 404
  return {
    props: {
      video: data.items[0],
    },
  }
}

export type WatchPageProps = {
  video: VideoWithPlayer
}

const WatchPage: NextPage<WatchPageProps> = (props) => {
  return <Watch {...props} />
}

export default WatchPage
