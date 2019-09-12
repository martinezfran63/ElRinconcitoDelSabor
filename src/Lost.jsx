import React, { Component } from 'react';
import RinconctioBackground from "./RinconctioBackground";
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import styled from "styled-components";

const H1 = styled.h1`
color: black;
`;

export default class Lost extends Component {
    render(){
        return(
        <RinconctioBackground>
            <H1>
              Esta página no existe
            </H1>
            <img src={rinconcito_logo_small} className="App-logo" alt="logo" />
        </RinconctioBackground>
        )
    }
}


