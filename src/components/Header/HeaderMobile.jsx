const HeaderMobile = () => {
  //const [login, setLogin] = useState(false);
  const login = false;

  return (
    <header className="header-mobile">
      <div className="lay">
        <div className="row">
          <div className="col-6">
            <a href="/" className="header-mobile__logo">
              <i className="logo-la-nacion"></i>
            </a>
          </div>
          {login && (
            <div className="col-6 hlp-text-right">
              {/** Si el ususario no esta logueado o esta logueado sin suscrip */}
              <a href="/">Suscribite</a>
              {/** Si el ususario esta logueado conn suscrip debe ir vacio el div */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
