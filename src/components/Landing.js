import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import  Rohit from "../images/Rohit.jpg";

class Landing extends Component {
  render(){
    return(
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="http://res.cloudinary.com/cloudrohit/image/upload/r_30/a_270/v1541513598/plrht0u1u7l2eejmvdxf.png" 
            alt="profile-pic" id="profile-pic"/>
            
            <div className="banner-header">
            <h1>Full Stack Web Developer</h1>
            <hr></hr>

            <p>ReactJS | Javascript | HTML | CSS | Bootstrap | NodeJS | MongoDB</p>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;