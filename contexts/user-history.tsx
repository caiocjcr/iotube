import useLocalStorage from '@/hooks/useLocalStorage'
import { SearchedVideo } from '@/types'
import React, { createContext, useContext } from 'react'

type UserHistoryContextProps = {
  searches: SearchedVideo[]
  pushSearch: (term: string) => void
  deleteSearch: (term: string) => void
}

export const UserHistory = createContext<UserHistoryContextProps>({
  searches: [],
  pushSearch: () => null,
  deleteSearch: () => null,
})

type UserHistoryProviderProps = {
  children: React.ReactNode
}

const UserHistoryProvider: React.FC<UserHistoryProviderProps> = ({
  children,
}) => {
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
    <UserHistory.Provider value={{ searches, pushSearch, deleteSearch }}>
      {children}
    </UserHistory.Provider>
  )
}

export const useUserHistory = (): UserHistoryContextProps => {
  const context = useContext(UserHistory)
  if (context === undefined)
    throw new Error(
      'useUserHistory must be used within a UserHistoryContext Provider'
    )
  return context
}

export default UserHistoryProvider
