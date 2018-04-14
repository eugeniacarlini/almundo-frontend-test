import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../styles/Qcat.css';
import SVGInline from "react-svg-inline"
import search from '../assets/icons/filters/search.svg';
import star from '../assets/icons/filters/star.svg';
import { forEach } from 'lodash';
import Stars from '../utils/Stars';

export default class Qcat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleSubmitStars = this.handleSubmitStars.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmitName(event) {
        event.preventDefault();
    }

    handleSubmitStars(event) {
        event.preventDefault();
    }

    render(){
        return(
            <div className="qcat">
                <div className="qcat__header">
                    Filtros
                </div>
                <Panel id="qcat-panel-name" defaultExpanded>
                    <Panel.Heading>
                        <SVGInline svg={ search } fill="#0679B3" width="15px"/>
                        <Panel.Title toggle>
                            Nombre de hotel
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <form onSubmit={this.handleSubmitName}>
                                <input type="text" value={this.state.value} 
                                        placeholder="Ingrese el nombre del hotel"
                                        onChange={this.handleChange}
                                        name="name"
                                        className="name-input"/>
                                <button className="btn name-submit" type="submit">Aceptar</button>
                            </form>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel id="qcat-panel-stars" defaultExpanded>
                    <Panel.Heading>
                        <SVGInline svg={ star } fill="#0679B3" width="15px"/>
                        <Panel.Title toggle>
                            Estrellas
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <form className="stars-form" onSubmit={this.handleSubmitStars}>
                                <label>
                                    <input type="radio" name="stars" value="all" checked onChange={this.handleSubmitStars}/>
                                    <p>Todas las estrellas</p>
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="five_stars" onChange={this.handleSubmitStars}/>
                                    { Stars["5"] }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="four_stars" onChange={this.handleSubmitStars}/>
                                    { Stars["4"] }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="three_stars" onChange={this.handleSubmitStars}/>
                                    { Stars["3"] }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="two_stars" onChange={this.handleSubmitStars}/>
                                    { Stars["2"] }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="one_star" onChange={this.handleSubmitStars}/>
                                    <SVGInline svg={ star } fill="#FFBB00" width="12px"/>
                                </label>
                            </form>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        );
    }
}