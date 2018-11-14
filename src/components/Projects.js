import React, {Component} from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button
} from "react-mdl";

class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleTabs() {
        if (this.state.activeTab === 0) {
            return (
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
                            background: 'url(https://freaky-styley-brt2.herokuapp.com/img/LoginImage.png) center / cover'
                        }}>freaky-styley</CardTitle>
                        <CardText>
                        Machine learning image style transfer project using <i>React, ml5, Passport, and MongoDB.</i> Insert your image, pick a style,
                            and your new freaky-styled image!
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/rmaharja/image-style-transfer" target="_blank" rel="noopener noreferrer">
                                <Button colored>Github Repo</Button>
                            </a>
                            <a href="https://freaky-styley-brt2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                        <CardMenu
                            style={{
                            color: '#fff'
                        }}></CardMenu>
                    </Card>

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
                            background: 'url(https://freaky-styley-brt2.herokuapp.com/img/LoginImage.png) center / cover'
                        }}>freaky-styley</CardTitle>
                        <CardText>
                        Machine learning image style transfer project using <i>React, ml5, Passport, and MongoDB.</i> Insert your image, pick a style,
                            and your new freaky-styled image!
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/rmaharja/image-style-transfer" target="_blank" rel="noopener noreferrer">
                                <Button colored>Github Repo</Button>
                            </a>
                            <a href="https://freaky-styley-brt2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                        <CardMenu
                            style={{
                            color: '#fff'
                        }}></CardMenu>
                    </Card>
                </div>

                
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="handlebars-projects">
                    <h1>Handlebars</h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="MongoDB-projects">
                    <h1>MongoDB</h1>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="api-projects">
                    <h1>Using API</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="project-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({activeTab: tabId})}
                    ripple>
                    <Tab>React</Tab>
                    <Tab>Handlebars</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>
                        API</Tab>
                </Tabs>

                <section className="projects-section">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="projects-content">
                                {this.toggleTabs()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>

        )
    }
}

export default Projects;