import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import RinconctioBackground from "./RinconctioBackground";
import { Link } from "react-router-dom";


const H1 = styled.h1`
color: white;
`;


class Home extends Component {
  render() {
    return (
      <RinconctioBackground>
        <H1>El Rinconcito Del Sabor</H1>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_one"
        >
          Main Menu
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_two"
        >
          Video Menu
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_three"
        >
          Frutas Preparadas
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_four"
        >
          Frutas Preparadas
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_five"
        >
          Nieves y Raspados
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_six"
        >
          Papas
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/menu_seven"
        >
          Bebidas
        </Button>
      </RinconctioBackground>
    );
  }
}

export default Home;
