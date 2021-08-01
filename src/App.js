import PostsDirectory from './containers/posts/PostsDirectory'

function App() {
  return (
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
          backgroundColor: 'whitesmoke',
          font: 'small-caps bold 64px/1 courier',
          letterSpacing: 50,
          textAlign: 'center',
        }}
      >
        NAV PANEL
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
        <PostsDirectory />
      </div>
    </div>
  )
}

export default App
