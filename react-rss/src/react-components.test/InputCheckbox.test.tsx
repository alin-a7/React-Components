import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import Form from '../pages/FormsPage/components/Form/Form'
import { setupStore } from '../store/store'

describe('InputCheckbox component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const store = setupStore()

    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const input = getByTestId('checkbox') as HTMLInputElement
    input.checked = true
    expect(input).toBeChecked()
  })
})
