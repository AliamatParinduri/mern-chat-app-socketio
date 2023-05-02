import App from './App'

import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('initial render', () => {
    render(
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    )

    screen.debug()
  })
})
