import React from 'react';
import  {render}  from 'react-dom'
import App from './src/react/component/App'
//import {Link, BrowserRouter as Router, Route} from 'react-router-dom'

import  { store } from './src/react/store/index'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)