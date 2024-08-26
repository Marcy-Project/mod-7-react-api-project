const NavBar = ({ children }) => {
  return (
    <nav>
      <div className="ui menu">
        <ul>
          {children}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
