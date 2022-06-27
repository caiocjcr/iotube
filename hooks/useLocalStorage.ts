import { Dispatch, SetStateAction, useState } from 'react'

type StorableTypes = string | number | Array<unknown> | Record<string, unknown>

const useLocalStorage = <T extends StorableTypes>(
  localStorageKey: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const stored = localStorage.getItem(localStorageKey)
  const [state, setState] = useState<T>((stored as T) || initialValue)

  return [state, setState]
}

export default useLocalStorage
