import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Header, Button, Container } from 'semantic-ui-react';



export default class App extends Component {
  render(){
      return (
        <Container  className='Main_Page'>

        <div class="ui blue inverted segment">
          <h1 class="ui center  aligned orange  header">El Rinconcito del Sabor</h1>
          <h2 class="ui center  aligned orange  header">1108 Main St, <br/> Longmont, CO 80501</h2>
        </div>

        <Button.Group vertical>

          <Link to='/menu_one' style={{ textDecoration: 'none' }} >
              <button class="massive ui orange button">
              Menu Uno
              </button>
          </Link>

          <Link to='/menu_two' style={{ textDecoration: 'none' }} >
              <button class="massive ui purple button">
              Menu Two
              </button>
          </Link>


          <Link to='/menu_three' style={{ textDecoration: 'none' }} >
              <button class="massive ui red button">
              Menu Tres
              </button>
          </Link>
            
          </Button.Group>

        

        
        

        </Container>
     )
  }
}