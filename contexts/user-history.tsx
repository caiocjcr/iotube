import useLocalStorage from '@/hooks/useLocalStorage'
import { SearchedVideo } from '@/types'
import React, { createContext, useContext } from 'react'

type UserHistoryContextProps = {
  searches: SearchedVideo[]
  categories: number[]
  pushSearch: (term: string) => void
  deleteSearch: (term: string) => void
  pushCategory: (categoryId: number) => void
  deleteCategory: (categoryId: number) => void
}

export const UserHistory = createContext<UserHistoryContextProps>({
  searches: [],
  categories: [],
  pushSearch: () => null,
  deleteSearch: () => null,
  pushCategory: () => null,
  deleteCategory: () => null,
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
  const [categories, setCategories] = useLocalStorage<number[]>(
    'iotube-categories',
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

  const pushCategory = (categoryId: number) => {
    setCategories(Array.from(new Set([...categories, categoryId])))
  }

  const deleteCategory = (categoryId: number) => {
    setCategories(
      categories.filter((storedCategory) => categoryId !== storedCategory)
    )
  }

  return (
    <UserHistory.Provider
      value={{
        searches,
        categories,
        pushSearch,
        deleteSearch,
        pushCategory,
        deleteCategory,
      }}
    >
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
