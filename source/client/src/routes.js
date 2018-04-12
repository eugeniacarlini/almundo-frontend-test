import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Hotels from './containers/Hotels';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Hotels} />
    </Route>
);