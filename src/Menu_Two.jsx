import React, { Component } from 'react';
import rinconcitovideo from "./images/El-Rinconcito-del-Sabor.mp4";


export default class Menu_Two extends Component {
    render(){
        return(
            <div>
                <video src={rinconcitovideo} width="1200" height="600" muted="true" autoplay="true" />
            </div>            
        )
    }


}


