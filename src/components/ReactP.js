import React from "react";
import {

    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button
} from "react-mdl";
import FreakyPic from "../images/freakyhome.png";

const ReactP = () => (
    <div className="react-projects">
{/* freaky-styley:  */}
        <Card
            shadow={5}
            style={{
            width: '700px',
            margin: 'auto',
            marginBottom: '20px',
            padding: '10px'
        }}>
            <CardTitle
                style={{
                color: 'whitesmoke',
                height: '176px',
                background: `url(${FreakyPic}) center / cover`
            }}>freaky-styley</CardTitle>
            <CardText>
            Machine learning image style transfer project using <i>React, ml5, Passport, and MongoDB. </i>Insert your image, pick a style, and share your new freaky-styled image! 
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/image-style-transfer"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://freaky-styley-brt2.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Live Demo</Button>
                </a>
            </CardActions>
            <CardMenu style={{
                color: '#fff'
            }}></CardMenu>
        </Card>
{/* Image Click game:  */}
        <Card
            shadow={5}
            style={{
            width: '700px',
            margin: 'auto',
            marginBottom: '10px',
            padding: '10px'
        }}>
            <CardTitle
                style={{
                color: 'whitesmoke',
                height: '176px',
                background: 'url(https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/563cf3b4e4b0cb0c3bcbb61f/564cc5aee4b0cbfa0c1d1f7c/1455921954347/?format=1000w) center / cover'
            }}>React Memory Game</CardTitle>
            <CardText>
                <p>Fun  Memory game created using React, using Materialize CSS as the primary CSS framework. The game uses twelve images of our favorite characters from our favorite cartoon shows including a Sponge who lives under the sea and a cowardly dog named Courage.
                </p>
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/react_image_click_game"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://rmaharja.github.io/react_image_click_game/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Live Demo</Button>
                </a>
            </CardActions>
            <CardMenu style={{
                color: '#fff'
            }}></CardMenu>
        </Card>
    </div>

)

export default ReactP;