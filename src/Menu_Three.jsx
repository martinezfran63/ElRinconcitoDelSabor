import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components'
import fresasconcrema from './images/fresasconcrema.jpg'
import mangopreparado from './images/mangopreparado.jpg'
import bananasconcrema from './images/bananasconcrema.jpg'
import escamocha from './images/escamocha.png'
import rinconcito from './images/rinconcito_background_white.jpg'

const IMAGES =
[{
  src: fresasconcrema,
  thumbnail: fresasconcrema,
},
{
  src: escamocha,
  thumbnail: escamocha,
},
{
  src: bananasconcrema,
  thumbnail: bananasconcrema,
},
{
  src: mangopreparado,
  thumbnail: mangopreparado,
},
{
  src: fresasconcrema,
  thumbnail: fresasconcrema,
},
{
  src: escamocha,
  thumbnail: escamocha,
},
{
  src: bananasconcrema,
  thumbnail: bananasconcrema,
},
{
  src: mangopreparado,
  thumbnail: mangopreparado,
},
{
  src: fresasconcrema,
  thumbnail: fresasconcrema,
},
{
  src: escamocha,
  thumbnail: escamocha,
},
{
  src: bananasconcrema,
  thumbnail: bananasconcrema,
},
{
  src: mangopreparado,
  thumbnail: mangopreparado,
}]
 

const H1 = styled.h1`
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
color: white; 
 font-family: 'Open Sans', sans-serif; 
font-size: 30px; 
font-weight: 300;
 line-height: 32px; 
 margin: 0 0 72px;
  text-align: left;
`
const Content = styled.div`
    //border: 1px solid #000;
    background-color:pink;
    //background-image: url(${rinconcito});
    background-size:cover;
    width: 2000px;
    height: 2000px;
    font-size: 1em;
    //margin: 4em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

const Header = styled.div`
    //border: 1px solid #000;
    background-color:red;
    //background-color: #f8f8f8;
   // background-image: url(${fresasconcrema});
    width: 2000px;
    height: 200px;
`;

export default class Menu_Three extends Component {
    render(){
        return(
            <Content>
              <Header>
                <H1>Frutas Preparadas</H1>
                <H2>Prepared Fruits</H2>
              </Header>
              <div >
              <Gallery enableLightbox={false} margin={2} enableImageSelection={false} images={IMAGES}/>
              </div>
              </Content>            
        )
    }


}
