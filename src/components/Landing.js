import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import Pic from "../images/CircleRohit.jpg";

class Landing extends Component {
    render() {
        return (
            <div
                style={{
                width: "100%",
                margin: "auto"
            }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                            <img
                                src={Pic}
                                alt="profile-pic"
                                id="profile-pic"/>


                        <div className="banner-header">
                            <h1>Full Stack Web Developer</h1>
                            <hr></hr>

                            <p>ReactJS | Javascript | HTML | CSS | Bootstrap | NodeJS | MongoDB | ml5</p>

                            <div className="external-links">

                                {/* Linked In */}
                                <a
                                    href="www.linkedin.com/in/rohit-maharjan-0515"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        className="icon-images"
                                        src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-3.png"
                                        alt="linked-in-icon"/>
                                </a>

                                {/*GitHub  */}
                                <a
                                    href="https://github.com/rmaharja?tab=repositories"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <img
                                        className="icon-images"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dzWpAg002l3ZmMKu07Rhy8m13hI-XKxn_ISxF7-ZHf048PMOlg"
                                        alt="linked-in-icon"/>
                                </a>

                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;