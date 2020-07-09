import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './signup/signup';
import Signin from './signin/signin';
import Top from './top';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Test Screen
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Route exact path="/" component={Top} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </div>
      </BrowserRouter>
    </div>
  )
}
