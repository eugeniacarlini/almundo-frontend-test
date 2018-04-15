import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HotelPage from './components/HotelsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HotelPage} />
    </Route>
);