import './Navbar.css';
import logo from '../images/logo192.png'

function Navbar({darkTheme, toggleTheme}) {
    return (
        <header>
            <div className="logo">
                <img src={logo} className="logo-image" alt="logo" />
                <h2>React facts</h2>
            </div>
            <div className="extra-title">
                <h3 className="light-position">Light</h3>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={darkTheme}
                        onChange={toggleTheme}
                    />
                    <span className="slider round"></span>
                </label>
                <h3 className="dark-position">Dark</h3>
            </div>
        </header>
    );
}

export default Navbar;
