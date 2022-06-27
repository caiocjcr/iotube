import { Dispatch, SetStateAction, useState } from 'react'

const useLocalStorage = <T>(
  localStorageKey: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue)

  return [state, setState]
}

export default useLocalStorage
