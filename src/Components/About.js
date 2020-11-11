import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var quotes = this.props.data.quotes;
      var author = this.props.data.author;

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="river" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>            

                <p>{bio}</p>
                  <p className="quotes"><span>{`"${quotes}"`}</span><br/>
                  <span id="author">{author}</span>
                  </p>

					   
 
         </div>
      </div>

   </section>
    );
  }
}

export default About;