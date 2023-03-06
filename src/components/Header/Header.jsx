import { useState } from "react";

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false); 
  const login = true
  //header --scrollDown

  return (
    <header className={`header --scrollUp ${activeMenu && "--active-menu"} ${activeSearch && "--active-search"}`} >
      <div className="lay">
        <div className="row">
          <div className="col-4 header__left">
            <div
              className="com-hamburger"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
            </div>
            <form
              className="com-search"
              onClick={() => setActiveSearch((prev) => !prev)}
            >
              <input
                type="text"
                className="com-search__input"
                placeholder="Buscar"
              />
              <i className="icon-search"></i>
              <input
                type="submit"
                value="Buscar"
                className="--btn --primary com-search__submit"
              />
            </form>
          </div>
          <div className="col-4  header__middle">
            <a href="/" className="header__middle__logo">
              <i className="logo-la-nacion"></i>
            </a>
          </div>
          <div className="col-4 header__right">
            {/* Lo hacemos de esta forma para no agregar clases de mas al header ni al com-usuario, y mediante un if de react dependiendo de x condicional dibujamos la caja correspondiente */}
            {/* Se dibuja cuando  NO esta loguedo */}
            {
              login && (
                <div className="com-usuario">
                  <button className="--btn --highlight hlp-marginRight-35">
                    Suscribite
                  </button>
                  <button className="--btn --secondary">Ingresar</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};
