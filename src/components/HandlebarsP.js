import React from "react";
import {

    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button
} from "react-mdl";

const HandlebarsP = () => (
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
    </div>

)

export default HandlebarsP;