import PostsDirectory from './containers/posts/PostsDirectory'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavDirectory from './containers/nav/NavDirectory'
import SWDirectory from './containers/sw/SWDirectory'

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: 50,
            position: 'sticky',
            backgroundColor: 'whitesmoke',
          }}
        >
          <NavDirectory />
        </div>
        <div
          style={{
            width: '70%',
            minWidth: 600,
            maxWidth: 1200,
            // backgroundColor: 'lightcoral',
            minHeight: 1000,
            alignSelf: 'center',
          }}
        >
          <Switch>
            <Route exact path="/posts">
              <PostsDirectory />
            </Route>
            <Route exact path="/sw">
              <SWDirectory />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
