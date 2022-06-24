import VideoInfo from '@/components/VideoInfo'
import { WatchPageProps } from '@/pages/watch'
import { Container, InfoContainer, VideoContainer } from './watch.styles'

const Watch: React.FC<WatchPageProps> = ({ video }) => {
  return (
    <Container>
      <VideoContainer
        dangerouslySetInnerHTML={{ __html: video.player.embedHtml }}
      />
      <InfoContainer>
        <VideoInfo
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          description={video.snippet.description}
        />
      </InfoContainer>
    </Container>
  )
}

export default Watch
