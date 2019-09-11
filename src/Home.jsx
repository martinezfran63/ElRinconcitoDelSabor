import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import rinconcito_background from "./images/rinconcito_background_transparent.jpg";
import { Link } from "react-router-dom";
import BlackDiv from "./BlackDiv";

const H1 = styled.h1`
color: white;
`;


const Content = styled.div`
  background-image: url(${rinconcito_background});
  width: 100%;
  height: 2000px;
  background-color: black;
`;



class Home extends Component {
  render() {
    return (
      <BlackDiv>
        <H1>El Rinconcito Del Sabor</H1>
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
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_five"
        >
          Menu Five
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_six"
        >
          Menu Six
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_seven"
        >
          Menu 7
        </Button>
      </BlackDiv>
    );
  }
}

export default Home;
