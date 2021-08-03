import React from 'react'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router-dom'
import routes, { renderRoutes } from './routes'

function App() {
  return (
    <SnackbarProvider dense maxSnack={5}>
      <Router>{renderRoutes(routes)}</Router>
    </SnackbarProvider>
  )
}

export default App
