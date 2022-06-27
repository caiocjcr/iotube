import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type StorableTypes = string | number | Array<unknown> | Record<string, unknown>

const useLocalStorage = <T extends StorableTypes>(
  localStorageKey: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue)
  const [hasLoadedStoredValue, setHasLoadedStoredValue] =
    useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem(localStorageKey)
    if (stored) setState(JSON.parse(stored))
    setHasLoadedStoredValue(true)
  }, [localStorageKey])

  useEffect(() => {
    // Prevent initial value from overriding currently stored value
    if (hasLoadedStoredValue)
      localStorage.setItem(localStorageKey, JSON.stringify(state))
  }, [state, localStorageKey, hasLoadedStoredValue])

  return [state, setState]
}

export default useLocalStorage
