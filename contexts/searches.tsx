import useLocalStorage from '@/hooks/useLocalStorage'
import { SearchedVideo } from '@/types'
import React, { createContext, useContext } from 'react'

type SearchesContextProps = {
  searches: SearchedVideo[]
  pushSearch: (term: string) => void
  deleteSearch: (term: string) => void
}

export const Searches = createContext<SearchesContextProps>({
  searches: [],
  pushSearch: () => null,
  deleteSearch: () => null,
})

type SearchesProviderProps = {
  children: React.ReactNode
}

const SearchesProvider: React.FC<SearchesProviderProps> = ({ children }) => {
  const [searches, setSearches] = useLocalStorage<SearchedVideo[]>(
    'iotube-searches',
    []
  )

  const pushSearch = (term: string) => {
    setSearches(
      searches
        .filter((searched) => searched.term !== term)
        .concat([{ term, when: new Date() }])
    )
  }

  const deleteSearch = (term: string) => {
    setSearches(searches.filter((searched) => searched.term !== term))
  }

  return (
    <Searches.Provider value={{ searches, pushSearch, deleteSearch }}>
      {children}
    </Searches.Provider>
  )
}

export const useSearches = (): SearchesContextProps => {
  const context = useContext(Searches)
  if (context === undefined)
    throw new Error(
      'useSearches must be used within a SearchesContext Provider'
    )
  return context
}

export default SearchesProvider
