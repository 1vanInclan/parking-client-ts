import { Link, NavLink } from 'react-router-dom';
import kalyptio from '../../assets/img/kalyptio.png'


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
            <Link 
            className="navbar-brand" 
            to="/"
            >
                <img src={kalyptio} className="logo img-fluid"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    {/* <li className="nav-item"> */}
                        <NavLink 
                        className={ ({ isActive }) =>  `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                        to="/create"
                        >
                        Crear
                        </NavLink>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <NavLink 
                        className={ ({ isActive }) =>  `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                        to="/delete"
                        >
                        Eliminar
                        </NavLink>
                    {/* </li> */}
                </div>
            </div>
        </div>
    </nav>
  )
}




