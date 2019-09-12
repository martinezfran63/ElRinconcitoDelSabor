import React from "react";
import Gallery from "react-photo-gallery";
import fresasconcrema from './images/fresasconcrema.jpg'
import mangopreparado from './images/mangopreparado.jpg'
import bananasconcrema from './images/bananasconcrema.jpg'
import escamocha from './images/escamocha.jpg'
import styled from 'styled-components'

const photos = [
  {
    src: fresasconcrema,
    width: 4,
    height: 3
  },
  {
    src: mangopreparado,
    width: 4,
    height: 3
  },
  {
    src: bananasconcrema,
    width: 4,
    height: 3
  },
  {
    src: escamocha,
    width: 4,
    height: 3
  },
  {
    src: fresasconcrema,
    width: 4,
    height: 3
  },
  {
    src: mangopreparado,
    width: 4,
    height: 3
  },
  {
    src: bananasconcrema,
    width: 4,
    height: 3
  },
  {
    src: escamocha,
    width: 4,
    height: 3
  },
  {
    src: fresasconcrema,
    width: 4,
    height: 3
  },
  {
    src: mangopreparado,
    width: 4,
    height: 3
  },
  {
    src: bananasconcrema,
    width: 4,
    height: 3
  },
  {
    src: escamocha,
    width: 4,
    height: 3
  }
];

const H1 = styled.h1`
margin-top: 8px;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 8px;
color: white; 
font-family: 'Helvetica Neue',
sans-serif; font-size: 120px;
font-weight: bold;
letter-spacing: -1px;
line-height: 1; 
text-align: left;
margin: 10 10 72px;
`
const H2 = styled.h2`
margin-top: 8px;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 8px;
color: white; 
font-family: 'Open Sans', sans-serif; 
font-size: 30px; 
font-weight: 300;
line-height: 32px; 
text-align: left;
`

const Header = styled.div`
//border: 10px solid pink;
margin-top: 8px;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 8px;
background-color:red;
// background-image: url(${fresasconcrema});
height: 200px;
`;

export default class Component extends React.Component {
  render() {
   return (
    <div>
    <Header>
      <H1>Frutas Preparadas</H1>
      <H2>Prepared Fruits</H2>
    </Header>
    <div >
    <Gallery margin={3} photos={photos} />
    </div>
    </div>       
    );
    
  }

}