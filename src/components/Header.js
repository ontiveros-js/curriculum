import React, {useRef, useEffect} from "react";

const Header = ({ handleAside }) => {
  const { setAsideAppear, asideAppear, closeBtn, setCloseBtn } = handleAside;
  const referenc = useRef(null)

  const handleClick = (e) => {
    setAsideAppear(!asideAppear);
    setCloseBtn(!closeBtn);
  };

  
  useEffect(() => {
    setInterval(() => {

      referenc.current.classList.toggle("animate__pulse")

      if(window.innerWidth <= 359){
        referenc.current.textContent = "Douglas"
      }else{
        referenc.current.textContent = "Douglas Ontiveros"
      }
    }, 2000);
  }, []);

  

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
      <h1 ref={referenc} className="animate__animated">Douglas Ontiveros</h1>
    </header>
  );
};

export default Header;
