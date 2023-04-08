import { render, fireEvent } from '@testing-library/react'

import { OPTIONS } from '../pages/FormsPage/components/Form/components/constant'
import Form from '../pages/FormsPage/components/Form'

describe('InputSelect component', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('must be changed select value', () => {
    const { getByTestId } = render(<Form setCardArray={() => null} />)
    const input = getByTestId("select") as HTMLSelectElement
    fireEvent.change(input, { target: { value: OPTIONS[1].value } })
    expect(input.value).toBe(OPTIONS[1].value)
  })

})
