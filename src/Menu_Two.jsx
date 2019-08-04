import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import nieve from "./images/nieve.mp4";
import paleta_montada from "./images/paleta_montada.mp4";


export default class Menu_Two extends Component {
    render(){
        return(

            <body class="Everything">

                <div class="split left">
                <ReactPlayer url={nieve} playing id="bgvid" width="110%" height="110%" loop="true"/>
                </div>

                <div class="split right">
                <ReactPlayer url={paleta_montada} playing id="bgvid" width="110%" height="110%" loop="true"/>
                </div>


            </body>
                         
        )
    }


}


