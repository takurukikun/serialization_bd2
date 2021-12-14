import React from 'react'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import history from './services/history'
import 'react-toastify/dist/ReactToastify.css'

function App(): JSX.Element {
  return (
    <Router history={history}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <Routes />
      </BrowserRouter>
    </Router>
  )
}

export default App
