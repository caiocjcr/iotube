import theme from '@/styles/theme'
import { FoundVideo } from '@/types'
import classNames from 'classnames'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'
import VideoInfo from '../VideoInfo'
import { ThumbnailContainer, VideoSnippetWrapper } from './videoSnippet.styles'

type VideoSnippetProps = {
  video: FoundVideo
  vertical?: boolean
}

type VideoSnippetSkeletonProps = {
  vertical?: boolean
}

type VideoSnippetComponent = React.FC<VideoSnippetProps> & {
  Skeleton: React.FC<VideoSnippetSkeletonProps>
}

const VideoSnippet: VideoSnippetComponent = ({ video, vertical = false }) => {
  const wrapperClassNames = classNames({
    vertical,
  })

  return (
    <VideoSnippetWrapper className={wrapperClassNames}>
      <ThumbnailContainer className="thumbnail-container">
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
        className="video-info"
      />
    </VideoSnippetWrapper>
  )
}

VideoSnippet.Skeleton = ({ vertical }) =>
  vertical ? (
    <ContentLoader
      speed={1}
      width={360}
      height={370}
      viewBox="0 0 360 370"
      backgroundColor={theme.skeletonBackground}
      foregroundColor={theme.skeletonForeground}
    >
      <rect x="0" y="0" rx="0" ry="0" width="360" height="202" />
      <rect x="8" y="210" rx="0" ry="0" width="300" height="16" />
      <rect x="8" y="230" rx="0" ry="0" width="280" height="16" />
      <rect x="8" y="256" rx="0" ry="0" width="128" height="12" />
      <rect x="8" y="291" rx="0" ry="0" width="300" height="8" />
      <rect x="8" y="303" rx="0" ry="0" width="300" height="8" />
      <rect x="8" y="315" rx="0" ry="0" width="210" height="8" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={1}
      width={680}
      height={202}
      viewBox="0 0 680 202"
      backgroundColor={theme.skeletonBackground}
      foregroundColor={theme.skeletonForeground}
    >
      <rect x="0" y="0" rx="0" ry="0" width="360" height="202" />
      <rect x="371" y="0" rx="0" ry="0" width="300" height="16" />
      <rect x="371" y="20" rx="0" ry="0" width="280" height="16" />
      <rect x="371" y="86" rx="0" ry="0" width="128" height="12" />
      <rect x="371" y="136" rx="0" ry="0" width="300" height="8" />
      <rect x="371" y="148" rx="0" ry="0" width="300" height="8" />
      <rect x="371" y="160" rx="0" ry="0" width="210" height="8" />
    </ContentLoader>
  )

VideoSnippet.Skeleton.displayName = 'VideoSnippetSkeleton'

export default VideoSnippet
