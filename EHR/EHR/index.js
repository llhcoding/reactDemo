/**
 * Created by siriushll on 2016/9/21.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'

import './dist/style.css'

import App from './modules/App'
import Home from './modules/Home'
import EhrSys from './modules/EhrSys'
import CenterContent from './modules/CenterContent'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/ehrSys" component={EhrSys}>
                <Route path="/content" component={CenterContent}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));

