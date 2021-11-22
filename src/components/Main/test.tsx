import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render component correctly', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
