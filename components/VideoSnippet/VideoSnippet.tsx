import { FoundVideo } from '@/types'
import Image from 'next/image'
import VideoInfo from '../VideoInfo'
import { ThumbnailContainer, VideoSnippetWrapper } from './videoSnippet.styles'

type VideoSnippetProps = {
  video: FoundVideo
}

const VideoSnippet: React.FC<VideoSnippetProps> = ({ video }) => (
  <VideoSnippetWrapper>
    <ThumbnailContainer>
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        layout="fill"
      />
    </ThumbnailContainer>
    <VideoInfo
      title={video.snippet.title}
      channelTitle={video.snippet.channelTitle}
      description={video.snippet.description}
    />
  </VideoSnippetWrapper>
)

export default VideoSnippet
