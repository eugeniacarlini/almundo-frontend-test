import React from 'react';
import '../styles/Hotel.css';
import SVGInline from "react-svg-inline"
import star from '../assets/icons/filters/star.svg';
import amenities from '../utils/Amenitites';

export default class Hotel extends React.Component {
    constructor(props){
        super(props);

        this._getStars = this._getStars.bind(this);
        this._getAmenities = this._getAmenities.bind(this);
    }

    _getStars() {
        let stars = [],
            starsCount = this.props.info.stars;

        for (let i = 0; i < starsCount; i++) {
            stars.push(<SVGInline key={i} svg={ star } fill="#FFBB00" width="15px"/>);
        }

        return stars;
    }

    _getAmenities() {
        let amenitiesHotel = this.props.info.amenities,
            amenitiesHTML = [],
            amenitiesCount = this.props.info.amenities.length;

        for (let i = 0; i < amenitiesCount; i++) {  
            amenitiesHTML.push(
                <SVGInline key={i} svg={ amenities[amenitiesHotel[i]] } fill="#444" width="20px"/>
            );
        }

        return amenitiesHTML;
    }

    render(){
        const hotel = this.props.info;

        return(
            <div className="hotel" id={ hotel.id }>
                <div className="hotel__info">
                    <div className="hotel__image">
                        <figure>
                            <img className="img"
                                src={process.env.PUBLIC_URL + `/img/${hotel.image}`}
                                alt={hotel.name}
                                title={hotel.name}
                            />
                        </figure>
                    </div>
                    <div className="hotel__details">
                        <div className="hotel__name">
                            { hotel.name }
                        </div>
                        <div className="hotel__stars">
                            { this._getStars() }
                        </div>
                        <div className="hotel__amenities">
                            { this._getAmenities() }
                        </div>
                    </div>
                </div>
                <div className="hotel__price">
                    <div className="disclaimer">
                        Precio por noche por habitación
                    </div>
                    <div className="price">
                        <span className="symbol">ARS</span>
                        <span className="amount">{ hotel.price }</span>
                    </div>
                    <button className="btn hotel__button">Ver hotel</button>
                </div>
            </div>
        );
    }
}