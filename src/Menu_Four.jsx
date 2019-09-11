import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import escamocha from './images/escamocha_1.jpg'
import fresasconcrema from './images/fresasconcrema.jpg'
import gazpacho from './images/gazpacho_1.jpg'

const images = [{ src: gazpacho }, { src: fresasconcrema }];

export default class Component extends React.Component {
  render() {
   return (
      <ModalGateway>
        <Carousel views={images} />


      </ModalGateway>
    );
    
  }



 


}