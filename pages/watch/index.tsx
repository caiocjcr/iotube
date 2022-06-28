import type { GetServerSideProps, NextPage } from 'next'
import { Watch } from '@/screens'
import { VideoWithPlayer } from '@/types'
import { getVideo } from '@/services/youtube-api'

export const getServerSideProps: GetServerSideProps<WatchPageProps> = async (
  context
) => {
  const { v } = context.query
  const { items } = await getVideo({
    part: 'snippet,player',
    id: v as string,
  })
  if (!items.length) context.res.statusCode = 404
  return {
    props: {
      video: items[0],
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
