import React from 'react';
import { createHistory, createHashHistory } from 'history';
import Root from './Root';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(function() {
  const rootEl = document.getElementById('content');
  const history =  createHistory();
  ReactDOM.render(<Root history={history} />, rootEl);
});
