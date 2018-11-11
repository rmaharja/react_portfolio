import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import {Link} from "react-router-dom";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Rohit's Portfolio" className="header"scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Rohit's Portfolio">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Main/>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
