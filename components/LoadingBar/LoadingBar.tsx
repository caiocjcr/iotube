import { useLoadingIndicator } from '@/contexts/loading-indicator'
import classNames from 'classnames'
import { Bar } from './loadingBar.styles'

const LoadingBar: React.FC = () => {
  const { isLoading } = useLoadingIndicator()

  const barClassNames = classNames({
    loading: isLoading,
  })

  return <Bar className={barClassNames} />
}

export default LoadingBar
