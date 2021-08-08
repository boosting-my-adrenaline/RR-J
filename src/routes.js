import React, { Suspense, lazy } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import LoadingScreen from './containers/extra/loading-screen'
import Layout from './containers/layout'
import Home from './containers/landing'

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <>
                <Layout>
                  {' '}
                  <Component {...props} />
                </Layout>
              </>
            )}
          />
        )
      })}
    </Switch>
  </Suspense>
)

const routes = [
  {
    exact: true,
    path: '/posts',
    component: lazy(() => import('./containers/posts')),
  },
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/loading-screen', component: LoadingScreen },
]

export default routes
