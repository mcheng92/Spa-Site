
import logo from '../assets/home/logo4.png'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <img src={logo} alt="Logo" style={{ width: '150px', height: '125px'}} />
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/packages" className="nav-link">Packages</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/book-appointment" className="nav-link">Book Appointment</Link>
                    </div>
                </div>    
            </div>
        </nav>
    )
}
export default Header;