import React, { Component } from 'react';
import nieve from "./images/nieve.mp4";
import paleta_montada from "./images/paleta_montada.mp4";
import { Player } from 'video-react';
import rinconcito_logo_small from './images/rinconcito_logo_small.png'


export default class Menu_Two extends Component {
    render(){
        return(

            <body class="Everything">

                <div class="split left">
                <Player
                    playsInline
                    videoHeight
                    muted
                    autoPlay
                    poster={rinconcito_logo_small}
                    src={nieve}/>
                </div>

                <div class="split right">
                <Player
                    playsInline
                    muted
                    autoPlay
                    poster={rinconcito_logo_small}
                    src={paleta_montada}/>
                </div>
            </body>
                         
        )
    }


}


