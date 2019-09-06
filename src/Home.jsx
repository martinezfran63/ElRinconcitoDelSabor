import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import rinconcito_background from "./images/rinconcito_background_transparent.jpg";
import { Link } from "react-router-dom";



const Content = styled.div`
  background-image: url(${rinconcito_background});
  width: 100%;
  height: 2000px;
  background-color: black;
`;



class Home extends Component {
  render() {
    return (
      <Content>
        <h1>El Rinconcito Del Sabor</h1>
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
      </Content>
    );
  }
}

export default Home;
