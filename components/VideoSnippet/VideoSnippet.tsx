import { FoundVideo } from '@/types'
import Image from 'next/image'
import {
  InfoWrapper,
  ThumbnailWrapper,
  VideoChannel,
  VideoDescription,
  VideoTitle,
  Wrapper,
} from './videoSnippet.styles'

type VideoSnippetProps = {
  video: FoundVideo
}

const VideoSnippet: React.FC<VideoSnippetProps> = ({ video }) => (
  <Wrapper>
    <ThumbnailWrapper>
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        layout="fill"
      />
    </ThumbnailWrapper>
    <InfoWrapper>
      <VideoTitle>{video.snippet.title}</VideoTitle>
      <VideoChannel>by {video.snippet.channelTitle}</VideoChannel>
      <VideoDescription>{video.snippet.description}</VideoDescription>
    </InfoWrapper>
  </Wrapper>
)

export default VideoSnippet
