import { Link } from 'react-router-dom'
import data from '../../data/reigon'

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(data).map((island) => (
          <li key={island}>
            <Link to={`/reigon/${island}`}>{island}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
