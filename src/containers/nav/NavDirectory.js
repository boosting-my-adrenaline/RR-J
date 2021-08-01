import { Link } from 'react-router-dom'

function NavDirectory() {
  return (
    <div
      style={{
        font: 'italic small-caps bold 32px cursive ',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 20,
        paddingRight: 50,
        color: 'lightcoral',
      }}
    >
      <Link
        to="/posts"
        style={{
          color: 'lightcoral',
        }}
      >
        posts
      </Link>
      <Link
        to="/sw"
        style={{
          color: 'lightcoral',
        }}
      >
        sw
      </Link>
    </div>
  )
}

export default NavDirectory
