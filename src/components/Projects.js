import React, {Component} from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,

} from "react-mdl";
import ReactP from "./ReactP";
import HandlebarsP from "./HandlebarsP";

class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleTabs() {
        if (this.state.activeTab === 0) {
            return (
                <div >
                <ReactP />
                </div>                
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div >
                    <HandlebarsP />
]                </div>
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
              <div id="projects-header">
                <Tabs 
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({activeTab: tabId})}
                    ripple>
                    <Tab>React</Tab>
                    <Tab>Handlebars</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>API</Tab>
                </Tabs>
                </div>

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