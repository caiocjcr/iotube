import { VideoSnippet } from '@/components'
import { SearchPageProps } from '@/pages/search'
import Link from 'next/link'
import { SearchWrapper, VideoSnippetContainer } from './search.styles'

const SearchPage: React.FC<SearchPageProps> = ({ videos }) => {
  return (
    <SearchWrapper>
      {videos.map((video) => (
        <VideoSnippetContainer key={video.id.videoId}>
          <Link href={`/watch?v=${video.id.videoId}`} passHref>
            <a>
              <VideoSnippet video={video} />
            </a>
          </Link>
        </VideoSnippetContainer>
      ))}
    </SearchWrapper>
  )
}

export default SearchPage
