import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { firebaseApp } from './firebase';
import reducer from './reducers';
import { logUser } from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        browserHistory.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" component={SignIn} history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>
    , document.getElementById('root')
)
