import VideoInfo from '@/components/VideoInfo'
import { WatchPageProps } from '@/pages/watch'
import { WatchWrapper, InfoWrapper, VideoContainer } from './watch.styles'

const Watch: React.FC<WatchPageProps> = ({ video }) => {
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
