import { WatchPageProps } from '@/pages/watch'
import { Container } from './watch.styles'

const Watch: React.FC<WatchPageProps> = ({ video }) => {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }}></div>
    </Container>
  )
}

export default Watch
