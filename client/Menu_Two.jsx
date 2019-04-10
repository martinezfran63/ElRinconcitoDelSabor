import React, { Component } from 'react';
import { Header, Button, Grid, Image, Embed, GridColumn, Video } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

export default class Menu_Two extends Component {
    render(){
        return(

            <body class="Everything">

                <div class="split left">
                <ReactPlayer url='amazing contraption.mp4' playing id="bgvid" width="110%" height="110%"/>
                </div>

                <div class="split right">
                <ReactPlayer url='amazing contraption.mp4' playing id="bgvid" width="110%" height="110%"/>
                </div>


            </body>
                         
        )
    }


}


