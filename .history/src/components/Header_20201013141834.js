import NavBar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="search"></div>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
