import useLocalStorage from './useLocalStorage'
import { render, RenderResult } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

type StoredTypes = string | number | Array<unknown> | Record<string, unknown>

type TestingComponentProps<T extends StoredTypes> = {
  localStorageKey: string
  value: T
  onChange?: () => T
}

function TestingComponent<T extends StoredTypes>({
  localStorageKey,
  value,
  onChange,
}: TestingComponentProps<T>) {
  const [state, setState] = useLocalStorage<T>(localStorageKey, value)
  return (
    <>
      <div data-testid="current-value">
        {typeof state === 'string' || typeof state === 'number'
          ? state
          : JSON.stringify(state)}
      </div>
      <button
        data-testid="change-btn"
        onClick={() => (onChange ? setState(onChange()) : null)}
      >
        Change value
      </button>
    </>
  )
}

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  initialValue: string
  localStorageKey: string
  onChange?: () => StoredTypes
}

// Factory method
const makeSut = (params: SutParams): SutTypes => {
  const { initialValue, localStorageKey, onChange } = params

  const sut = render(
    <TestingComponent
      value={initialValue}
      localStorageKey={localStorageKey}
      onChange={onChange}
    />
  )

  return { sut }
}

describe('useLocalStorage', () => {
  it('should initialize with provided value', () => {
    const initialValue = 'initial'
    const localStorageKey = 'test-key'
    const { sut } = makeSut({ initialValue, localStorageKey })
    expect(sut.getByTestId('current-value').textContent).toBe(initialValue)
  })

  it('should get data from localStorage if it has provided key', () => {
    const initialValue = 'initial'
    const storedValue = 'stored'
    const localStorageKey = 'test-key'
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue))
    const { sut } = makeSut({ initialValue, localStorageKey })
    expect(sut.getByTestId('current-value').textContent).toBe(storedValue)
  })

  it('should keep stored data type', () => {
    const initialValue = ''
    const storedValue = [1, 2, 3]
    const localStorageKey = 'test-key'
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue))
    const { sut } = makeSut({ initialValue, localStorageKey })
    expect(sut.getByTestId('current-value').textContent).toBe(
      JSON.stringify(storedValue)
    )
  })

  it('should change value upon setState call', () => {
    const localStorageKey = 'test-key'
    const changedValue = 'changed'
    const onChange = () => changedValue
    const { sut } = makeSut({ initialValue: '', localStorageKey, onChange })
    act(() => {
      sut.getByTestId('change-btn').click()
    })
    const storedItem = localStorage.getItem(localStorageKey)
    expect(JSON.parse(storedItem as string)).toBe(changedValue)
    expect(sut.getByTestId('current-value').textContent).toBe(changedValue)
  })
})
