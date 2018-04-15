import React from 'react';
import Hotel from './Hotel';

export default class Hotels extends React.Component {
    componentWillMount(){
        this.props.fetchHotels();
    }

    render(){
        const hotelState = this.props.mappedHotelState;
        const hotels = hotelState.hotels;

        return(
            <div className="col-md-9 col-sm-12">
                {!hotels && hotelState.isFetching &&
                    <p>Cargando hoteles....</p>
                }

                {hotels.length <= 0 && !hotelState.isFetching &&
                    <div className="hotels-list">
                        <p className="zrp-message">No hay hoteles disponibles en este momento</p>
                    </div>
                }

                {hotels && hotels.length > 0 && !hotelState.isFetching &&
                    <div className="hotels-list">
                        { hotels.map((hotel,i) => <Hotel key={i} info={hotel}/>) }
                    </div>
                }
            </div>
        );
    }
}