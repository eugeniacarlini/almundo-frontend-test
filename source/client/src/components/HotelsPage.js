import React from 'react';
import HotelsList from '../containers/HotelsList';
import Qcat from '../containers/Qcat';

const HotelPage = (props) => (
    <div className="col-md-12">
        <Qcat />
        <HotelsList />
    </div>
);

export default HotelPage;