import Link from 'next/link'

const Navbar = () => (
    <div classNameName="navegacion">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link href='/'>
    <a className="navbar-brand">Genshin Builds</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href='/personajes'>
            <a className="nav-link" >Personajes</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href='/tierlist'>
            <a className="nav-link" >Tierlist</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href='/builds'>
            <a className="nav-link" >Builds</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href='/eventos'>
            <a className="nav-link" >Eventos</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
)

export default Navbar;