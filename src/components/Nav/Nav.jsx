const Nav = () => {
  return (
    <nav className="com-nav-mobile">
      <div className="row">
        <a href="/" className="col-2 item-foo">
          <i className="icon-home"></i>
          <p>Home</p>
        </a>
        <a href="/" className="col-4 item-foo">
          <i className="icon-club"></i>
          <p>
            {" "}
            <nobr>Club LA NACION</nobr>
          </p>
        </a>
        <a href="/" className="col-3 item-foo">
          <i className="icon-comment"></i>
          <p>Mi cuenta</p>
        </a>
        <button className="col-2 item-foo">
          <i className="icon-menu"></i>
          <p>Menú</p>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
