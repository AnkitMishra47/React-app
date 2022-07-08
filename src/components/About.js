import React from "react";

export default function About(props) {

 
  


  return (
    <div className="container " >
      <h1 className={`my-3 text-${props.mode==='light'?'dark' : 'light'}`}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`}>
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About Text Utils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Text Utils</strong> Text utils gives you a way to analyze your text quickly and efficiently.
        Be it word count or character count or anyother text stats which will be aaded soon. 
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Free To Use</strong> Text Utils is a free characters counting web application which basically counts the characters and and word count statistics and word count. Text Utils report the number of word and characters to the users. Thuns this is suitable for writing text while keeping the word limit in check.
        User can also manipulates the text in various ways like they can copy text, clearing the text and convert it to differnt cases.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong> Browser Compatibility</strong> This utility works in every web browser Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook blogs, excel and word text,
         essays etc. 
      </div>
    </div>
  </div>
</div>
      </div>  
  );
}
