// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'

import ContextProvider from './Provider.js'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
registerServiceWorker()
