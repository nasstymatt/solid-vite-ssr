import { Router } from 'solid-app-router'
import { generateHydrationScript, renderToString } from 'solid-js/web'
import App from './App'
import { routes } from './routes'

export function render(url: string) {
  return renderToString(() => (
    <Router url={url}>
      <App />
    </Router>
  ))
}

export const hydrationScript = generateHydrationScript()

export const clientRoutes = routes.map(({ path }) => path)
