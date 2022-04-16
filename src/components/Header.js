import React from "react";

const Header = ({ handleAside }) => {
  const { setAsideAppear, asideAppear, closeBtn, setCloseBtn } = handleAside;

  const handleClick = (e) => {
    setAsideAppear(!asideAppear);
    setCloseBtn(!closeBtn);
  };

  return (
    <header className="header">
      <button
        onClick={handleClick}
        className={
          closeBtn
            ? "btn hamburger hamburger--collapse is-active"
            : "btn hamburger hamburger--collapse"
        }
        type="button"
      >
        <span onClick={handleClick} className="hamburger-box">
          <span onClick={handleClick} className="hamburger-inner"></span>
        </span>
      </button>
      <h1>Douglas Ontiveros</h1>
    </header>
  );
};

export default Header;
