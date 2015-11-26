import React from 'react';
import { createHistory, createHashHistory } from 'history';
import Root from './Root';

const rootEl = document.getElementById('root');

const history =  createHistory();

React.render(<Root history={history} />, rootEl);
