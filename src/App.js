import React, { Component } from 'react';
import Maps from './components/Maps';
import * as firebase from 'firebase';
import 'firebase/database';


class App extends Component {
  constructor(){
    super()
    this.state = {
      lat: 0,
      lng: 0
    }

    const config = {
      apiKey: "AIzaSyACB3itJUIH8tajjNehSO89yqRohtNpw-0",
      authDomain: "test-ba8c4.firebaseapp.com",
      databaseURL: "https://test-ba8c4.firebaseio.com",
      projectId: "test-ba8c4",
      storageBucket: "test-ba8c4.appspot.com",
      messagingSenderId: "926314593300"
    };
    const app = firebase.initializeApp( config );

    console.log(app)
    console.log(firebase)

    const database = firebase.database();
    firebase.database().ref('users/' + 22).set({
      username: "einar",
      email: "einar@",
      lat: this.state.lat,
      lng: this.state.lng
    });
  }

  componentDidMount(){
    navigator.geolocation.watchPosition(p =>{
      
      this.setState({
        lat: p.coords.latitude,
        lng: p.coords.longitude
      })
      console.log(p)
    })
  }


  render() {
    return (
      <div className="App">
      {this.state.lat === 0 ? null :
        <Maps 
          lat = {this.state.lat}
          lng = {this.state.lng}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
        }
      </div>
    );
  }
}

export default App;

