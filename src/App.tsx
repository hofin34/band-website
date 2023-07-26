import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>

    </QueryClientProvider>
  )
}

export default App
