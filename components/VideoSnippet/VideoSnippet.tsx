import { FoundVideo } from '@/types'
import Image from 'next/image'
import VideoInfo from '../VideoInfo'
import { ThumbnailWrapper, Wrapper } from './videoSnippet.styles'

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
    <VideoInfo
      title={video.snippet.title}
      channelTitle={video.snippet.channelTitle}
      description={video.snippet.description}
    />
  </Wrapper>
)

export default VideoSnippet
