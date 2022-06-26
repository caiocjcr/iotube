import type { GetServerSideProps, NextPage } from 'next'
import { Watch } from '@/screens'
import { youtubeApi } from '@/services'
import { GetVideoPayload, GetVideoResponse, VideoWithPlayer } from '@/types'

export const getServerSideProps: GetServerSideProps<WatchPageProps> = async (
  context
) => {
  const { v } = context.query
  const { body } = await youtubeApi.get<GetVideoResponse, GetVideoPayload>({
    url: '/videos',
    params: {
      part: 'snippet,player',
      id: v as string,
    },
  })
  if (!body.items.length) context.res.statusCode = 404
  return {
    props: {
      video: body.items[0],
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
