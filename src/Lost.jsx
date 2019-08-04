import React, { Component } from 'react';
import bear_404 from './images/bear_404.jpg';


export default class Lost extends Component {
    render(){
        return(
        <div class="Lost">
            <h1>Sorry page does not exist</h1>
            <img src={bear_404} className="App-logo" alt="logo" />
        </div>
        )
    }
}