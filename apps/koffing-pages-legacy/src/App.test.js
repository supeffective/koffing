import React from 'react'
import { render } from '@testing-library/react'
import ThemedApp from './components/ThemedApp'

test('renders the prettify button', () => {
  const { getByText } = render(<ThemedApp />)
  const testedElement = getByText(/Prettify/i)
  expect(testedElement).toBeInTheDocument()
})
