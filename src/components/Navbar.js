import './Navbar.css';
import logo from '../images/logo192.png'

function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src={logo} className="logo-image" alt="logo" />
                <h2>React facts</h2>
            </div>
            <div className="extra-title">
                <h3>React Course - Project 1</h3>
            </div>
        </header>
    );
}

export default Navbar;
