import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from "./Payment";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders";

const promise = loadStripe("pk_test_51HRmtmLapKk6NhtuVJUsnZRi0sRgRwtyaZwDuojB0wWdWbWzF2GzEp3DSXo8vO5j7EgFt7q4bcKK6irlMrsWvwmZ00s35oJUUk");

function App() {
  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
