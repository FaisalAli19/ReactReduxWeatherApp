import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//Combine Reducers Here
import Reducers from 'reducers';

const store = createStore(Reducers, compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
