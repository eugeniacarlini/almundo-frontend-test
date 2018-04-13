import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../styles/Qcat.css';
import SVGInline from "react-svg-inline"
import search from '../assets/icons/filters/search.svg';
import star from '../assets/icons/filters/star.svg';
import { forEach } from 'lodash';

export default class Qcat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '1',
            value: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleSubmitStars = this.handleSubmitStars.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
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
        let fiveStars = [],
            fourStars = [],
            threeStars = [],
            twoStars = [];

        forEach([1, 2, 3, 4 ,5], function(value) {
            fiveStars.push(<SVGInline  key={`five-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
        });

        forEach([1, 2, 3, 4], function(value) {
            fourStars.push(<SVGInline  key={`four-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
        });

        forEach([1, 2, 3], function(value) {
            threeStars.push(<SVGInline  key={`three-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
        });

        forEach([1, 2], function(value) {
            twoStars.push(<SVGInline  key={`two-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
        });

        return(
            <div className="qcat">
                <div className="qcat__header">
                    Filtros
                </div>
                <PanelGroup
                    accordion
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    id="qcat-panel-group">

                    <Panel eventKey="1">
                        <Panel.Heading>
                            <SVGInline svg={ search } fill="#0679B3" width="15px"/>
                            <Panel.Title toggle>
                                Nombre de hotel
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <form onSubmit={this.handleSubmitName}>
                                <input type="text" value={this.state.value} 
                                        placeholder="Ingrese el nombre del hotel"
                                        onChange={this.handleChange} 
                                        className="name-input"/>
                                <button className="btn name-submit" type="submit">Aceptar</button>
                            </form>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <SVGInline svg={ star } fill="#0679B3" width="15px"/>
                            <Panel.Title toggle>
                                Estrellas
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <form className="stars-form" onSubmit={this.handleSubmitStars}>
                                <label>
                                    <input type="radio" name="stars" value="all" checked onChange={this.handleSubmitStars}/>
                                    <p>Todas las estrellas</p>
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="five_stars" onChange={this.handleSubmitStars}/>
                                    { fiveStars }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="four_stars" onChange={this.handleSubmitStars}/>
                                    { fourStars }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="three_stars" onChange={this.handleSubmitStars}/>
                                    { threeStars }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="two_stars" onChange={this.handleSubmitStars}/>
                                    { twoStars }
                                </label>

                                <label>
                                    <input type="radio" name="stars" value="one_star" onChange={this.handleSubmitStars}/>
                                    <SVGInline svg={ star } fill="#FFBB00" width="12px"/>
                                </label>
                            </form>
                        </Panel.Body>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
}