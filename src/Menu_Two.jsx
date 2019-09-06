import React, { Component } from 'react';
import nieve from "./images/nieve.mp4";
import paleta_montada from "./images/paleta_montada.mp4";
import { Player } from 'video-react';
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import VideoBg from "reactjs-videobg";


export default class Menu_Two extends Component {
    render(){
        return(

            <body class="Everything">

                <div class="split left">
                <VideoBg poster={rinconcito_logo_small}>
                <VideoBg.Source src={paleta_montada} type="video/mp4" />

                </VideoBg>;
                </div>

                <div class="split right">

                </div>
            </body>
                         
        )
    }


}


