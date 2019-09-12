import styled from "styled-components";
import rinconcito_background from "./images/rinconcito_background_white.jpg";


const RinconctioBackground = styled.div`
  background-image: url(${rinconcito_background});
  //background-color: black;
  border: 1px solid black;
  //margin: 4em;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;

export default RinconctioBackground;
