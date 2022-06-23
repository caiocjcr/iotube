import { VideoSnippet } from '@/components'
import { SearchPageProps } from '@/pages/search'
import { Container, VideoSnippetContainer } from './search.styles'

const SearchPage: React.FC<SearchPageProps> = ({ videos }) => {
  return (
    <Container>
      {videos.map((video) => (
        <VideoSnippetContainer key={video.id.videoId}>
          <VideoSnippet video={video} />
        </VideoSnippetContainer>
      ))}
    </Container>
  )
}

export default SearchPage
