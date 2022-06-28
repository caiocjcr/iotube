import VideoGroup from '@/components/VideoGroup'
import { HomePageProps } from '@/pages'
import { HomeWrapper } from './home.styles'

const Home: React.FC<HomePageProps> = ({ initialData, error }) => {
  if (error) return <div>error</div>
  return (
    <HomeWrapper>
      <VideoGroup title="Most popular" videos={initialData.items} />
    </HomeWrapper>
  )
}

export default Home
