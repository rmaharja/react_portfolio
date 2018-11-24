import React, {Component} from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,

} from "react-mdl";
import ReactP from "./ReactP";
import MVCP from "./MVCP";
import OtherP from "./OtherP";

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
                    <MVCP />
]                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="other-projects">
                  <OtherP />
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="github-link">
                                    <a href="https://github.com/rmaharja?tab=repositories"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <img
                                        className="icon-images"
                                        id="github-tab-image"
                                        src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"
                                        alt="linked-in-icon"/>
                                </a>                
                                <p>
                                  <h3>< a href="https://github.com/rmaharja?tab=repositories"
                                      rel="noopener noreferrer"> Check out the rest of the (moderately cool projects) in the Repo
                                      </a></h3>
                                      </p>
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
                    <Tab>MVC</Tab>
                    <Tab> Really Cool Projects</Tab>
                    <Tab>Github</Tab>
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