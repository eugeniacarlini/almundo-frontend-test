import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';
import SVGInline from "react-svg-inline"
import logo from '../assets/images/logo-almundo.svg';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar className="header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="brand-logo" href="/#0">
                                <SVGInline svg={ logo }/>
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