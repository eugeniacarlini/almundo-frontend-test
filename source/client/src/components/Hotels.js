import React from 'react';
import Hotel from './Hotel';
import Qcat from './Qcat';

export default class Hotels extends React.Component {
    componentWillMount(){
        this.props.fetchHotels();
    }

    render(){
        const hotelState = this.props.mappedHotelState;
        const hotels = hotelState.hotels;

        return(
            <div className="col-md-12">
                {!hotels && hotelState.isFetching &&
                    <p>Cargando hoteles....</p>
                }

                {hotels.length <= 0 && !hotelState.isFetching &&
                    <p>No hay hoteles dispnibles en este momento</p>
                }

                <aside className="col-md-3 col-sm-12">
                    <Qcat />
                </aside>

                {hotels && hotels.length > 0 && !hotelState.isFetching &&
                    <div className="hotels-list col-md-9 col-sm-12">
                        { hotels.map((hotel,i) => <Hotel key={i} info={hotel}/>) }
                    </div>
                }
            </div>
        );
    }
}