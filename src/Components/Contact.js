import React from 'react';
import MyForm from "./Form.js"

const Contact = () => {

    

    return (
      <section id="contact">

         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>CONTACT</span></h1>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <MyForm/>
           </div>  
         </div>
   </section>
    );
}

export default Contact;
