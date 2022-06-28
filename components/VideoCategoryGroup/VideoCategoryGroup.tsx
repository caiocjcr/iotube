import { FoundCategory } from '@/types'
import VideoGroup from '../VideoGroup'

type VideoCategoryGroupProps = {
  category: FoundCategory
}

const VideoCategoryGroup: React.FC<VideoCategoryGroupProps> = ({
  category,
}) => {
  return <VideoGroup title={category.snippet.title} videos={[]} />
}

export default VideoCategoryGroup
