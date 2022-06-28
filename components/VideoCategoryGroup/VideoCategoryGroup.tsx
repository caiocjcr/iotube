import { getVideos } from '@/services/youtube-api'
import { FoundCategory } from '@/types'
import { useQuery } from 'react-query'
import ErrorNotice from '../ErrorNotice'
import VideoGroup from '../VideoGroup'

type VideoCategoryGroupProps = {
  category: FoundCategory
}

const VideoCategoryGroup: React.FC<VideoCategoryGroupProps> = ({
  category,
}) => {
  const { data, isLoading, isError } = useQuery(
    `category_${category.id}`,
    () =>
      getVideos({
        chart: 'mostPopular',
        part: 'snippet',
        videoCategoryId: category.id,
      }),
    {
      enabled: !!category.id,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isError) return <ErrorNotice message="Category not found" />

  return (
    <VideoGroup
      title={category.snippet.title}
      videos={data?.items || []}
      loading={isLoading}
    />
  )
}

export default VideoCategoryGroup
