import { FoundVideo } from '@/types'
import VideoSnippet from '../VideoSnippet'
import {
  TitleWrapper,
  VideoGroupTitle,
  VideoGroupWrapper,
  VideoSnippetContainer,
} from './videoGroup.styles'
import ScrollContainer from 'react-indiana-drag-scroll'

type VideoGroupProps = {
  title: string
  videos: FoundVideo[]
}

const VideoGroup: React.FC<VideoGroupProps> = ({ title, videos }) => {
  return (
    <VideoGroupWrapper>
      <TitleWrapper>
        <VideoGroupTitle>{title}</VideoGroupTitle>
      </TitleWrapper>
      <ScrollContainer className="video-carousel" nativeMobileScroll>
        {videos.map((video, index) => (
          <VideoSnippetContainer key={`${index}_video${video.id}`}>
            <VideoSnippet video={video} vertical />
          </VideoSnippetContainer>
        ))}
      </ScrollContainer>
    </VideoGroupWrapper>
  )
}

export default VideoGroup
