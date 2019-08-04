import React, { Component } from 'react';
import { Header, Button, Grid, Image, Embed, GridColumn, Video } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

export default class Menu_Two extends Component {
    render(){
        return(

            <body class="Everything">

                <div class="split left">
                <ReactPlayer url='nieve.mp4' playing id="bgvid" width="110%" height="110%" loop="true"/>
                </div>

                <div class="split right">
                <ReactPlayer url='paleta_montada.mp4' playing id="bgvid" width="110%" height="110%" loop="true"/>
                </div>


            </body>
                         
        )
    }


}


