import { Router } from 'solid-app-router'
import { hydrate } from 'solid-js/web'
import App from './App'

hydrate(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
)
