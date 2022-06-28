import { FoundVideo } from '@/types'
import VideoSnippet from '../VideoSnippet'
import {
  TitleWrapper,
  VideoGroupTitle,
  VideoGroupWrapper,
  VideoSnippetContainer,
} from './videoGroup.styles'
import ScrollContainer from 'react-indiana-drag-scroll'
import Link from 'next/link'

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
            <Link href={`/watch?v=${video.id}`} passHref>
              <a>
                <VideoSnippet video={video} vertical />
              </a>
            </Link>
          </VideoSnippetContainer>
        ))}
      </ScrollContainer>
    </VideoGroupWrapper>
  )
}

export default VideoGroup
