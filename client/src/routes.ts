import { RouteDefinition } from 'solid-app-router'
import { lazy } from 'solid-js'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/index'))
  },
  {
    path: '/counter',
    component: lazy(() => import('./pages/counter'))
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about'))
  }
]
