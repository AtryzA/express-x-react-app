import React, { useState } from 'react';
import { TextField, Container, Button } from '@material-ui/core'

export default function Signin() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'userID':
        setUserID(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      userID: userID,
      password: password
    }
    signinfetch(JSON.stringify(params, null, ' '));
  }
  
  const signinfetch = (params) => {
    fetch('http://localhost:3000/api/user', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: params}).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="Signup">
      <Container component="main" maxWidth="xs">
        <form className="user" onSubmit={handleSubmit} noValidate>
          <TextField 
            variant="outlined"
            margin="normal"
            fullWidth
            id="userID"
            label="UserID"
            name="userID"
            value={userID}
            onChange={handleChange}
            autoComplete="userID"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign in
          </Button>
        </form>
      </Container>
    </div>
  );
}