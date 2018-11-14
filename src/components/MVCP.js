import React from "react";
import {

    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button
} from "react-mdl";

const MVCP = () => (
    <div className="react-projects">
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
                background: 'url(http://thehansindia.com/assets/Brain_4011.jpg) center / cover'
            }}>Healthy Heads</CardTitle>
            <CardText>
            Solving a real world problem in Mental Healthcare using the MVC framework <i>(Handlebars, Node.js, Javascript, Materialize CSS, mySql, Passport & Google Map).</i> Login, and search for a mental health professionaly with a specific specialty, years of experience and many other categories. 
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/Healthy-Heads"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://healthy-heads.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Live Demo</Button>
                </a>
            </CardActions>
            <CardMenu style={{
                color: '#fff'
            }}></CardMenu>
        </Card>

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
                background: 'url(https://www.16bitdad.com/wp-content/uploads/2018/06/snes.jpg) center / cover'
            }}>Game On</CardTitle>
            <CardText>
            Game-on is a web app built using MVC Framework, Materialize CSS, Java Script, Node.js and Firebase. The app is designed for gamers and sports fans alike to get together and enjoy doing things together with like minded people. The app allows for users to either create an event or find an existing event in the area. 
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/game-on"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="http://game-on-broseph.herokuapp.com/index.html"
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

export default MVCP;