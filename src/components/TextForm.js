import './TextForm.css'
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
     
        props.showAlert("converted to Uppercase !!", "success");
        
        
    }
    const handleLowerClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
    
        props.showAlert("converted to Lowercase !!", "success");
        
        
    }
    const handleClearClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        setText("");
       
        props.showAlert("All text cleared !!", "success");
        
    }
    const handleOnChange = (event)=>{
        // console.log("Text is Changing");
        setText(event.target.value); 
    }

    const handleCopy = (event)=>{
      let text = document.getElementById('myBox');
      text.select() ;
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
     
      props.showAlert("All text has been copied tot your clipboard", "success");
      
  }

  const handleSpaces = (event)=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" ")); 
    
    props.showAlert("Extra spaces has been removed", "success");
    
}

    const [Text, setText] = useState("");

  return (
      <>
    <div className="conatiner">
      <div className="mb-3">
        <h1 className={`mb-4 text-${props.mode === 'light'? 'dark' : 'light'}`}>Enter Your Text Here</h1>
        <textarea
          className={`form-control text-${props.mode === 'light'? 'dark' : 'light'}`}
          id="myBox"
          rows="10"
          value={Text}
k          style ={{backgroundColor : `${props.mode === 'light'? 'white' : '#2b420347'}`,
                    border :  `${props.mode === 'light'? '2px solid black' : '2px solid white'}`                    }}
          onChange = {handleOnChange}
        >
        </textarea>
      </div>
      <button disabled ={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpperClick} > Convert to UpperCase </button>
      <button disabled ={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase </button>
      <button disabled ={Text.length===0} className="btn btn-danger mx-1 my-1"  onClick={handleClearClick} >Clear Text</button>
      <button disabled ={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled ={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>   
    <div className={`conatiner my-3 text-${props.mode === 'light'? 'dark' : 'light'}`}>
    <span className = "dark">Your summary of text is </span>
    <span className = "dark-1">{Text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {Text.length - Text.split(" ").length +1} characters.</span>
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
