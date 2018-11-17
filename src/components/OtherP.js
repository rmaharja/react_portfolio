import React from "react";
import {

    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button
} from "react-mdl";

const OtherP = () => (
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
                background: 'url(http://www.thehansindia.com/assets/RoadRun_3750.jpg) center / cover'
            }}>Find Your Pace </CardTitle>
            <CardText>
            Find your Pace (FYP) was built by runners, for runners using HTML, JavaScript, jQuery, and JSON, DarkSky API, and Google Maps Geocoding API.  Find Your Pace adjusts your pace for each run based on the weather at the time of the runs.
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/run-pace-predictor/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://rmaharja.github.io/run-pace-predictor/"
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
                color: 'blue',
                height: '176px',
                background: 'url(https://techflourish.com/images/large-clipart-american-flag-letters-14.jpg) center / cover'
            }}>Word Guess Game </CardTitle>
            <CardText>
            Fun "Make America Smart again" themed Word-guess game using <i>HTML, CSS, and Javascript.</i> 
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/Word-Guess-Game"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://rmaharja.github.io/Word-Guess-Game/"
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
                color: 'white',
                height: '176px',
                background: 'url(https://bobowenblog.files.wordpress.com/2014/07/matrix_whoa.jpg) center / cover'
            }}>Fun With Giphy </CardTitle>
            <CardText>
            Having fun with Giphy API and jQuery.  Search your favorite Giphs and watch them fill your screen.  Click on the giphs to make them come to life!
            </CardText>
            <CardActions border>
                <a
                    href="https://github.com/rmaharja/GiphyAPI"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button colored>Github Repo</Button>
                </a>
                <a
                    href="https://rmaharja.github.io/GiphyAPI/"
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

export default OtherP;