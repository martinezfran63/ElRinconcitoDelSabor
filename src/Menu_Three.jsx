import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Menu_Three extends Component {
    render(){
        return(
                    <body class="Everything">
                    

                         <div class="ui two column grid">
                            <div class="eigth wide column">
                            <table id = "menu">
                                    <tr>
                                        <td></td>
                                        <th>
                                        <div class="massive ui red horizontal label">Papas</div>
                                        </th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Papas al Gusto
                                            <span> <br/>
                                            Papas de su gusto, carne seca,  camar&oacute;n, cueritos, pepino, cacahuates Japones y salsa especial
                                            </span>
                                        </td>
                                        <td>$6.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Carne Preparada
                                            <span> <br/>
                                            Pepino, j&iacute;cama, l&iacute;mon  salsa
                                        </span>
                                        </td>
                                        <td>$5.49</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Papas Locas (Preparadas a su Gusto)
                                            <span> <br/>
                                            Papas caseras, carne seca, salsa especial
                                        </span>
                                        </td>
                                        <td>$6.70</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td>Papas Nacho
                                            <span> <br/>
                                            Papas caseras, queso, jitomate, crema y salsa especial
                                        </span>
                                        </td>
                                        <td>$5.00</td>
                                     </tr>
                                     <tr>
                                    <td></td>
                                        <td>Nachos
                                            <span> <br/>
                                             Chips, queso y jalape&ntilde;o
                                        </span>
                                        </td>
                                        <td>$6.70</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td>Dorinachos
                                    <span> <br/>
                                    Doritos, elotes, queso derretido, parmesano, jalape&ntilde;os o salsa caser
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr> 
                                    <td></td>
                                    <td>Tostilocos
                                    <span> <br/> Tostitos, cueritos jicama, pepino, mango, repollo, cacahuates Japones, salsa especial ba&ntildeado con queso derretido
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Chilindrina
                                    <span> <br/> Cueritos con repollo, jitomate, aguacate, mayonesa, crema y Sala especial servido con un chicharron
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                            </table>
                            </div>
                            <div class="three wide column">

                            
                            <ReactPlayer url='nieve.mp4' playing id="bgvid" width="160%" height="160%" loop="true"/>

                            </div>
                            
                            <div class="seven wide column">
                            <table id = "menu">
                                <tr>
                                    <td></td>
                                    <th>
                                    <h2 class="massive ui orange horizontal label">Elotes</h2>
                                    </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Elote en Vaso
                                    </td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Elote Chorreado
                                    </td>
                                    <td>$5.49</td>
                                </tr>
                                <tr> 
                                    <td></td>
                                    <td>Esquites
                                    </td>
                                    <td>$6.70</td>
                                    
                                </tr>
                                </table>

                            </div>
                         </div>      
                                              
                        </body>
                        
        )
    }


}