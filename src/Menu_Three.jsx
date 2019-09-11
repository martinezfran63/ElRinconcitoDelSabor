import React from 'react';
import escamocha from './images/escamocha_1.jpg'
import fresasconcrema from './images/fresasconcrema.jpg'
import gazpacho from './images/gazpacho_1.jpg'
import Carousel, { Modal, ModalGateway } from 'react-images';
 

const images = [{ src: gazpacho }, { src: fresasconcrema }];

export default class Menu_Three extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;
 
    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}