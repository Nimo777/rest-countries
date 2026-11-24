function Navbar({ isDarkMode, setIsDarkMode }) {
return (
    <header className="navbar">
    <div className="container navbar-content">
        <h1 className="logo">Where in the world?</h1>

        <button type="button" className="toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            <ion-icon name={isDarkMode ? "sunny-outline" : "moon-outline"}></ion-icon>

            <span className="toggle-text">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>

        </button>
    </div>
    </header>
    );
}

export default Navbar;