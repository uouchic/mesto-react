import headerLogo from "../images/logo.svg";

function Headers() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
    </header>
  );
}

export default Headers;
