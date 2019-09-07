import React, { Component } from 'react';
import BlackDiv from "./BlackDiv";
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const H1 = styled.h1`
color: white;
`;



export default class Lost extends Component {
    render(){
        return(
        <BlackDiv>
            <H1>Sorry page does not exist</H1>
            <img src={rinconcito_logo_small} className="App-logo" alt="logo" />

            <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_one"
        >
          Menu One
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_two"
        >
          Menu Two
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_three"
        >
          Menu Three
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_four"
        >
          Menu Four
        </Button>



        </BlackDiv>
        )
    }
}


