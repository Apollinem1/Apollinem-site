import React from 'react'
import { store } from "../stores/store";
import "./Progress.css"


export  const ProgressBar = (props:any) => {
    const { bgcolor, completed=0 } = props;
    const [value, setValue]:any = React.useState(0);
    const [width, setWidth]:any = React.useState(0);

    const [ timerActive, setTimerActive ] = React.useState(true);

    React.useEffect(():void => {
    if (value < completed && timerActive) {
        setTimeout(setValue, 10, value + 1);
        setTimeout(setWidth, 10, width + 1);
       
    } 
    }, [value, width]);

    
    
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: store.theme ? "#000" : "#fff",
      borderRadius: 50,
      margin: 50,
      padding: "4px"
    }
  
    const fillerStyles = {
      height: '100%',
      width: "100%",
      maxWidth: `${width}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: "center" as "center",
      transition: 'width 2s ease',
      transitionDelay: "0.2s"
      
    }
  
    const labelStyles = {
      color: 'white',
      fontWeight: 'bold',
      fontSize: "18px"
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles} > 
          <span style={labelStyles}>{`${value}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;