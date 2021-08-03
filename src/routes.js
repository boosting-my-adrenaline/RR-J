import React, { Suspense, lazy } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Layout from './containers/layout'

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<h2>loading screen...</h2>}>
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
    exatch: true,
    path: '/posts',
    component: lazy(() => import('./containers/posts')),
  },
]

export default routes
