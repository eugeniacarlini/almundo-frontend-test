import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';
import logo from '../assets/images/logo-almundo.svg';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navbar className="header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/#0">
                                <img src={logo} alt="Almundo Logo" className="logo"/>
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div className="container app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}