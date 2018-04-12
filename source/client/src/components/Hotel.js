import React from 'react';
import '../styles/Hotel.css';
import Star from './Star';

export default class Hotel extends React.Component {
    constructor(props){
        super(props);

        this._getStars = this._getStars.bind(this);
    }

    _getStars() {
        let stars = [],
            starsCount = this.props.info.stars;

        for (let i = 0; i < starsCount; i++) {
            stars.push(<span className='star' key={i}>
                <Star fill="#FFBB00" width="16"/>
            </span>);
        }

        return stars;
    }

    render(){
        const hotel = this.props.info;
        return(
            <div className="hotel" id={ hotel.id }>
                <div className="hotel__info">
                    <div className="hotel__image">
                        <figure>
                            <img src="http://via.placeholder.com/250x170" alt={hotel.name}/>
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
                            { hotel.amenities }
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