import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import { store } from "./stores/store";
import "./App.css";
import { Skill } from "./Pages/Skill/Skill";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Portfolio } from "./Pages/Portfolio/Portfolio";

const App = observer(() => {
  const bgc = {
    background: store.theme ? "#fff" : "#000",
    transition: "1s all",
  };
  const changeH1 = (e: any) => {
    if (device == false) {
      store.theme
        ? (e.target.style.textShadow =
            "0 0 0px #00000061, 0 0 0px #00000061, 0 0 0px #00000061, 0 0 0px #00000061")
        : (e.target.style.textShadow =
            "0 0 0px #ffffff34, 0 0 0px #ffffff34, 0 0 0px #ffffff34, 0 0 0px #ffffff34");
    }
  };
  const changeBackh1 = (e: any) => {
    if (device == false) {
      store.theme
        ? (e.target.style.textShadow = "")
        : (e.target.style.textShadow = "");
    }
  };
  const [skill, setSkill]: any = useState();
  const [portfolio, setPortfolio]: any = useState();
  const [contacts, setContacts]: any = useState();
  const [lock, setLock]: any = useState(true);
  const [load, setLoad]: any = useState(false);
  let device =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    );
  const LoadPage = () => {};

  function Enter(e: any) {
    if (e.code == "Space") {
      document.querySelector(".enter")?.classList.add("enter__active");
      document.querySelector(".hint")?.classList.add("enter__active");
      document.querySelector(".app")?.classList.add("active");
      setTimeout(() => {
        document.querySelector(".enter")?.remove();
        document.querySelector(".hint")?.remove();
        setSkill(true);
        setPortfolio(false);
        setContacts(false);
        setLock(false);
      }, 1500);
    } else {
      document.querySelector(".enter")?.classList.add("enter__error");
      setTimeout(() => {
        document.querySelector(".enter")?.classList.remove("enter__error");
      }, 500);
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", (e: any) => Enter(e));

    if (device && load == false) {
      document.querySelector(".enter")?.remove();
      document.querySelector(".hint")?.remove();

      document.querySelector(".app")?.classList.add("active");
      setTimeout(() => {
        setSkill(true);
        setPortfolio(false);
        setContacts(false);
        setLock(false);
      }, 1500);
    } else {
    }
    setLoad(true);
  }, []);

  return (
    <>
      <section style={bgc}>
        <div className="app">
          <h1
            onMouseOver={(e: any) => changeH1(e)}
            onMouseOut={(e: any) => changeBackh1(e)}
            onClick={() => store.changeTheme()}
          >
            Apollinem's Studio
          </h1>
          <div className="app__content">
            <h2
              onClick={() => {
                setSkill(!skill);
                setPortfolio(false);
                setContacts(false);
              }}
            >
              Skills
            </h2>
            <h2
              onClick={() => {
                setPortfolio(!portfolio);
                setSkill(false);
                setContacts(false);
              }}
            >
              Portfolio
            </h2>
            <h2
              onClick={() => {
                setContacts(!contacts);
                setPortfolio(false);
                setSkill(false);
              }}
            >
              Contacts
            </h2>
          </div>
          <p className="enter">Press Space to start</p>
          <p className="hint">
            if you want to change the theme of the site, then click on the title
          </p>
        </div>
        {skill && !lock ? <Skill /> : null}
        {portfolio && !lock ? <Portfolio /> : null}
        {contacts && !lock ? <Contacts /> : null}
      </section>
    </>
  );
});

export default App;
