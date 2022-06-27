import useLocalStorage from './useLocalStorage'
import { render } from '@testing-library/react'

type StoredTypes = string | number | Array<unknown> | Record<string, unknown>

type TestingComponentProps<T extends StoredTypes> = {
  localStorageKey: string
  value: T
}

function TestingComponent<T extends StoredTypes>({
  localStorageKey,
  value,
}: TestingComponentProps<T>) {
  const [state] = useLocalStorage<T>(localStorageKey, value)
  return (
    <div data-testid="current-value">
      {typeof state === 'string' || typeof state === 'number'
        ? state
        : JSON.stringify(state)}
    </div>
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
})