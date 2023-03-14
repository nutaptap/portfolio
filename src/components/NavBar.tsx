function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>
            <a target="_blank">CV</a>
          </li>
        </ul>
        <div>
          <ul className="nav-languages">
            <li>en</li>
            <li>es</li>
            <li>ca</li>
          </ul>
          <button type="button">CONTACT</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
