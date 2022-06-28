import { ErrorNotice, VideoCategoryGroup } from '@/components'
import VideoGroup from '@/components/VideoGroup'
import { HomePageProps } from '@/pages'
import { HomeWrapper, NewUserWelcome } from './home.styles'
import { useQuery } from 'react-query'
import { useUserHistory } from '@/contexts'
import { getCategories } from '@/services/youtube-api'

const Home: React.FC<HomePageProps> = ({ initialData, error }) => {
  const { categories } = useUserHistory()
  const { data } = useQuery(
    'userCategories',
    () => getCategories({ id: categories.join(','), part: 'snippet' }),
    { enabled: !!categories.length }
  )

  if (error)
    return (
      <HomeWrapper>
        <ErrorNotice />
      </HomeWrapper>
    )

  return (
    <HomeWrapper>
      <VideoGroup title="Most popular" videos={initialData.items} />
      {data?.items.length ? (
        data.items.map((category, index) => (
          <VideoCategoryGroup
            key={`${index}-category${category.id}`}
            category={category}
          />
        ))
      ) : (
        <NewUserWelcome>
          We don&apos;t know your taste yet. Go watch some videos and come back
          so we can recommend you some of your stuff {`:)`}
        </NewUserWelcome>
      )}
    </HomeWrapper>
  )
}

export default Home
