import VideoInfo from '@/components/VideoInfo'
import { useUserHistory } from '@/contexts'
import { WatchPageProps } from '@/pages/watch'
import { useEffect } from 'react'
import { WatchWrapper, InfoWrapper, VideoContainer } from './watch.styles'

const Watch: React.FC<WatchPageProps> = ({ video }) => {
  const { pushCategory } = useUserHistory()

  useEffect(() => {
    if (video.snippet.categoryId) pushCategory(video.snippet.categoryId)
  }, [])

  return (
    <WatchWrapper>
      <VideoContainer
        dangerouslySetInnerHTML={{ __html: video.player.embedHtml }}
      />
      <InfoWrapper>
        <VideoInfo
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          description={video.snippet.description}
        />
      </InfoWrapper>
    </WatchWrapper>
  )
}

export default Watch
