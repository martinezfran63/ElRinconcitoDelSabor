import React, { Component } from 'react';
import nieve from "./images/nieve.mp4";
import paleta_montada from "./images/paleta_montada.mp4";



export default class Menu_Two extends Component {
    render(){
        return(
            <div>
                <video src={paleta_montada} width="1200" height="600" muted="true" autoplay="true" />
                <video src={nieve} width="1200" height="600" muted="true" autoplay="true" />
            </div>            
        )
    }


}


