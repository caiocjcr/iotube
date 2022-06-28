import React, { createContext, useContext, useState } from 'react'

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
}

const LoadingIndicatorProvider: React.FC<LoadingIndicatorProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const startLoading = () => setIsLoading(true)

  const stopLoading = () => setIsLoading(false)

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
