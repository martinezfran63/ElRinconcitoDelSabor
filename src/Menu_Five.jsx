import React from "react";
import Gallery from "react-photo-gallery";
import fresasconcrema from './images/fresasconcrema.jpg'
import bananasplit from './images/bananasplit.jpg'
import styled from 'styled-components'
import raspados from './images/raspados.jpg'


const photos = [
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
    width: 4,
    height: 3
  },
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
    width: 4,
    height: 3
  },
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
    width: 4,
    height: 3
  },
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
    width: 4,
    height: 3
  },
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
    width: 4,
    height: 3
  },
  {
    src: bananasplit,
    width: 4,
    height: 3
  },
  {
    src: raspados,
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
    //border: 1px solid #000;
    background-color:#fd02b1;
    //background-color: #f8f8f8;
   // background-image: url(${fresasconcrema});
    width: 2000px;
    height: 200px;
`;

export default class Component extends React.Component {
  render() {
   return (
    <div>
    <Header>
      <H1>Nieves y Raspados</H1>
      <H2>Ice Cream & Mexican Snow Cone</H2>
    </Header>
    <div >
    <Gallery margin={3} photos={photos} />
    </div>
    </div>       
    );
    
  }

}