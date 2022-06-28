import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'

type LoadingIndicatorProps = {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

export const LoadingIndicator = createContext<LoadingIndicatorProps>({
  isLoading: false,
  startLoading: () => null,
  stopLoading: () => null,
})

type LoadingIndicatorProviderProps = {
  children: React.ReactNode
  indicateOnPageLoad?: boolean
}

const LoadingIndicatorProvider: React.FC<LoadingIndicatorProviderProps> = ({
  children,
  indicateOnPageLoad,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { events } = useRouter()

  const startLoading = () => setIsLoading(true)

  const stopLoading = () => setIsLoading(false)

  useEffect(() => {
    if (indicateOnPageLoad) {
      events.on('routeChangeStart', startLoading)
      events.on('routeChangeComplete', stopLoading)
      return () => {
        events.off('routeChangeStart', startLoading)
        events.off('routeChangeComplete', stopLoading)
      }
    }
  }, [indicateOnPageLoad, events])

  return (
    <LoadingIndicator.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingIndicator.Provider>
  )
}

export const useLoadingIndicator = (): LoadingIndicatorProps => {
  const context = useContext(LoadingIndicator)
  if (context === undefined)
    throw new Error(
      'useLoadingIndicator must be used within a LoadingIndicatorContext Provider'
    )
  return context
}

export default LoadingIndicatorProvider
