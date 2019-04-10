import './main.html';
import React from 'react';
import{ render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../client/App.js';
import Lost from '../client/Lost.jsx';
import Menu_One from '../client/Menu_One.jsx';
import Menu_Two from '../client/Menu_Two.jsx';
import Menu_Three from '../client/Menu_Three.jsx';


Meteor.startup(() => {
  render((
    <BrowserRouter>
      <Switch>
          <Route exact path ="/" component={App}/>
          <Route path ="/menu_one" component={Menu_One}/>
          <Route path ="/menu_two" component={Menu_Two}/>
          <Route path ="/menu_three" component={Menu_Three}/>
          <Route component={Lost}/>
      </Switch>
    </BrowserRouter>
  ), document.getElementById('render-target'));
});


