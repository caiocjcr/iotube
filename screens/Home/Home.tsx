import { VideoSnippet } from '@/components'
import { HomePageProps } from '@/pages'

const Home: React.FC<HomePageProps> = ({ initialData }) => {
  return (
    <div>
      {initialData?.items.map((video, index) => (
        <VideoSnippet
          key={`${index}-video${video.id}`}
          video={video}
          vertical
        />
      ))}
    </div>
  )
}

export default Home
