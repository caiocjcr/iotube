import {
  InfoWrapper,
  VideoChannel,
  VideoDescription,
  VideoTitle,
} from './videoInfo.styles'

type VideoInfoProps = {
  title: string
  channelTitle: string
  description: string
}

const VideoInfo: React.FC<VideoInfoProps> = ({
  title,
  channelTitle,
  description,
}) => (
  <InfoWrapper>
    <VideoTitle>{title}</VideoTitle>
    <VideoChannel>
      by <b>{channelTitle}</b>
    </VideoChannel>
    <VideoDescription>{description}</VideoDescription>
  </InfoWrapper>
)

export default VideoInfo