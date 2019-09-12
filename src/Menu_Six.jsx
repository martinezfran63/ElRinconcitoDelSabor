import React from "react";
import Gallery from "react-photo-gallery";
import fresasconcrema from './images/fresasconcrema.jpg'
import styled from 'styled-components'
import nachos from './images/nachos.jpg'
import dorinachos from './images/dorinachos.jpg'


const photos = [
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: dorinachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: dorinachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: dorinachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: dorinachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  },
  {
    src: dorinachos,
    width: 4,
    height: 3
  },
  {
    src: nachos,
    width: 4,
    height: 3
  }
];

const H1 = styled.h1`
margin-top: 8px;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 8px;
color: red; 
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
color: red; 
font-family: 'Open Sans', sans-serif; 
font-size: 30px; 
font-weight: 300;
line-height: 32px; 
text-align: left;
`
const Header = styled.div`
    //border: 1px solid #000;
    background-color: white;
    //background-color: white:
   // background-image: url(${fresasconcrema});
    width: 2000px;
    height: 200px;
`;

export default class Component extends React.Component {
  render() {
   return (
    <div>
    <Header>
      <H1>Papas</H1>
      <H2>Chips</H2>
    </Header>
    <div >
    <Gallery margin={3} photos={photos} />
    </div>
    </div>       
    );
    
  }

}