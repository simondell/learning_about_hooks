import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('Shows a counter', () => {
  const { getByText } = render(<App />)
  const counter = getByText(/\d clicks/i)

  expect(counter).toBeInTheDocument()
})

test('Shows a button', () => {
  const { getByText } = render(<App />)
  const button = getByText(/Click me!/i)

  expect(button).toBeInTheDocument()
})

test('Clicking the button updates the counter', () => {
  const tree: any = render(<App />)
  const button = tree.getByText(/Click me!/)

  const clicks: number[] = [1, 2, 3, 4, 5]
  clicks.forEach((click: number): void => {
  	fireEvent.click(button)

  	const counter = tree.getByText(new RegExp(`${click} clicks`))
  	expect(counter).toBeInTheDocument()
  })
})
