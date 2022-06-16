import { observer } from "mobx-react-lite";
import React, {useState} from "react";
import { store } from "./stores/store";
import "./App.css"
import { Skill } from "./Pages/Skill/Skill";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Portfolio } from "./Pages/Portfolio/Portfolio";


const App = observer(() => {
  const bgc = {
    background: store.theme ? "#fff" : "#000",
    transition: "1s all"
  }
  const changeH1 = (e:any) => {
    store.theme ?
    e.target.style.textShadow="0 0 0px #00000061, 0 0 0px #00000061, 0 0 0px #00000061, 0 0 0px #00000061" :
    e.target.style.textShadow="0 0 0px #ffffff34, 0 0 0px #ffffff34, 0 0 0px #ffffff34, 0 0 0px #ffffff34" 
  }
  const changeBackh1 = (e:any) => {
    store.theme ?
    e.target.style.textShadow="" :
    e.target.style.textShadow="" 
  }
  const [skill, setSkill]:any = useState()
  const [portfolio, setPortfolio]:any = useState()
  const [contacts, setContacts]:any = useState()
 
  return (
    <>
     <section style={bgc}>
       <div className="app">
         <h1 onMouseOver={(e:any) => changeH1(e)} onMouseOut={(e:any) => changeBackh1(e)} onClick={() =>store.changeTheme()}>Apollinem's Studio</h1>
         <div className="app__content">
           <p  onClick={() => {setSkill(!skill); setPortfolio(false); setContacts(false)}}>Skills</p>
           <p  onClick={() => {setPortfolio(!portfolio); setSkill(false); setContacts(false)}}>Portfolio</p>
           <p  onClick={() => {setContacts(!contacts); setPortfolio(false); setSkill(false);}}>Contacts</p>
         </div>
       </div>
       {skill ? <Skill />  : null }
       {portfolio ? <Portfolio />   : null }
       {contacts ? <Contacts />  : null }
       

     </section>
    </>
  );
});

export default App;
