import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import Form from '../pages/FormsPage/components/Form'
import { setupStore } from '../store/store'

describe('InputRadio component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const store = setupStore()

    const { getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const input = getByLabelText('male') as HTMLInputElement
    input.checked = true
    expect(input).toBeChecked()
  })
})
