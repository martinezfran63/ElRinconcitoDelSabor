import React, { Component } from 'react';
import nieve from "./images/nieve.mp4";
import paleta_montada from "./images/paleta_montada.mp4";
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import VideoBg from "reactjs-videobg";
import styled from "styled-components";
import BlackDiv from "./BlackDiv";



export default class Menu_Two extends Component {
    render(){
        return(
            <BlackDiv>
                <video src={paleta_montada} width="1200" height="600" muted="true" autoplay="true" />
                <video src={nieve} width="1200" height="600" muted="true" autoplay="true" />
            </BlackDiv>            
        )
    }


}


