import useLocalStorage from './useLocalStorage'
import { render } from '@testing-library/react'
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

describe('useLocalStorage', () => {
  it('should initialize with provided value', () => {
    const initialValue = 'initial'
    const renderResult = render(
      <TestingComponent localStorageKey="key" value={initialValue} />
    )
    expect(renderResult.getByTestId('current-value').textContent).toBe(
      initialValue
    )
  })

  it('should get data from localStorage if it has provided key', () => {
    const initialValue = 'initial'
    const storedValue = 'stored'
    const localStorageKey = 'test-key'
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue))
    const renderResult = render(
      <TestingComponent
        localStorageKey={localStorageKey}
        value={initialValue}
      />
    )
    expect(renderResult.getByTestId('current-value').textContent).toBe(
      storedValue
    )
  })

  it('should keep stored data type', () => {
    const initialValue = ''
    const storedValue = [1, 2, 3]
    const localStorageKey = 'test-key'
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue))
    const renderResult = render(
      <TestingComponent
        localStorageKey={localStorageKey}
        value={initialValue}
      />
    )
    expect(renderResult.getByTestId('current-value').textContent).toBe(
      JSON.stringify(storedValue)
    )
  })

  it('should change value upon setState call', () => {
    const localStorageKey = 'test-key'
    const changedValue = 'changed'
    const renderResult = render(
      <TestingComponent
        localStorageKey={localStorageKey}
        value={''}
        onChange={() => changedValue}
      />
    )
    act(() => {
      renderResult.getByTestId('change-btn').click()
    })
    const storedItem = localStorage.getItem(localStorageKey)
    expect(JSON.parse(storedItem as string)).toBe(changedValue)
    expect(renderResult.getByTestId('current-value').textContent).toBe(
      changedValue
    )
  })
})
