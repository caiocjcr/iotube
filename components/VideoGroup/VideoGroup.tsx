import { FoundVideo } from '@/types'
import VideoSnippet from '../VideoSnippet'
import {
  TitleWrapper,
  VideoGroupTitle,
  VideoGroupWrapper,
  VideoList,
  VideoSnippetContainer,
} from './videoGroup.styles'

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
      <VideoList>
        {videos.map((video, index) => (
          <VideoSnippetContainer key={`${index}_video${video.id}`}>
            <VideoSnippet video={video} vertical />
          </VideoSnippetContainer>
        ))}
      </VideoList>
    </VideoGroupWrapper>
  )
}

export default VideoGroup
