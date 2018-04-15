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
            nameValue: '',
            starsValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleSubmitStars = this.handleSubmitStars.bind(this);
    }

    handleChange(event) {
        this.setState({nameValue: event.target.value});
    }
    
    handleSubmitName(event) {
        event.preventDefault();
        this.props.fetchHotels(this.state.nameValue, this.state.starsValue);
    }

    handleSubmitStars(event) {
        this.setState({starsValue: event.target.value});
        this.props.fetchHotels(this.state.nameValue, event.target.value);
    }

    render(){
        return(
            <aside className="col-md-3 col-sm-12">
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
                                    <input type="text" value={this.state.nameValue} 
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
                                <form className="stars-form">
                                    <label>
                                        <input type="radio" name="stars" value="" checked={this.state.starsValue === '' ? true : false} onChange={this.handleSubmitStars}/>
                                        <p>Todas las estrellas</p>
                                    </label>

                                    <label>
                                        <input type="radio" name="stars" value="5" checked={this.state.starsValue === '5' ? true : false} onChange={this.handleSubmitStars}/>
                                        { Stars["5"] }
                                    </label>

                                    <label>
                                        <input type="radio" name="stars" value="4" checked={this.state.starsValue === '4' ? true : false} onChange={this.handleSubmitStars}/>
                                        { Stars["4"] }
                                    </label>

                                    <label>
                                        <input type="radio" name="stars" value="3" checked={this.state.starsValue === '3' ? true : false} onChange={this.handleSubmitStars}/>
                                        { Stars["3"] }
                                    </label>

                                    <label>
                                        <input type="radio" name="stars" value="2" checked={this.state.starsValue === '2' ? true : false} onChange={this.handleSubmitStars}/>
                                        { Stars["2"] }
                                    </label>

                                    <label>
                                        <input type="radio" name="stars" value="1" checked={this.state.starsValue === '1' ? true : false} onChange={this.handleSubmitStars}/>
                                        <SVGInline svg={ star } fill="#FFBB00" width="12px"/>
                                    </label>
                                </form>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </div>
            </aside>
        );
    }
}