import React, { Component } from 'react';
import { Header, Button, Grid, Image, Embed, Divider } from 'semantic-ui-react';

export default class Menu_One extends Component {
    render(){
        return(
                    <body class="Everything">
                        <div class= "right_logo">
                            <Image src='rinconcito_logo_small.png' />
                        </div>

                        <div class="ui three column grid">
                            <div class="seven wide column">
                            <table id = "menu">
                                <tr>
                                    <td></td>
                                    <th>
                                    <div class="massive ui red horizontal label">Frutas</div>
                                    </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>C&oacute;ctel de Fruta
                                        <span> <br/>Pepino, j&iacute;cama, sand&iacute;a, mel&oacute;n, mango, pi&ntilde;a, papaya, chile y lim&oacute;n
                                        </span>
                                    </td>
                                    <td>$6.00</td>
                                    <td></td>
                                    <td>Postre Amore
                                    <span> <br/> Angel cake, crema, yogurt y fruta
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Carne Preparada:
                                        <span> <br/> Pepino, j&iacute;cama, lim&oacute;n y salsa
                                    </span>
                                    </td>
                                    <td>$5.49</td>
                                    <td></td>
                                    <td>Fresas con Crema
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Vaso Loco
                                        <span> <br/>Preparelo a su gusto con fruta, gomitas, chamoy y mas
                                        </span>
                                    </td>
                                    <td>$6.70</td>
                                    <td></td>
                                    <td>Bananas con Crema
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pepihuates
                                        <span> <br/>Pepino, Cacahuates Japones, j&iacute;cama, lim&oacute;n
                                        </span> 
                                    </td>
                                    <td>$5.00</td>
                                    <td></td>
                                    <td>Fresas Cubiertas en Chocolate
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Bi&oacute;nico
                                    <span> <br/> Mel&oacute;n, papaya, pl&aacute;tano, manzana, fresa, yogurt y granola
                                    </span>
                                    </td>
                                    <td>$6.70</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Escamocha
                                    <span> <br/> Sand&iacute;a, mel&oacute;n, papaya, pl&aacute;tano, manzana, fresa, nieve nuez, coco y crema dulce 
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr> 
                                    <td></td>
                                    <td>Fruta con Miel
                                    <span> <br/> Pl&aacute;tano, manzana, fresa, mel&oacute;n, papaya, queso cottage, miel y nuez
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                    <td></td>
                                    <td>Raspados
                                        <span> <br/>(Sabores Variados)
                                        </span>
                                    </td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Gaspacho
                                    <span> <br/> Toronja, naranja, sand&iacute;a, mel&oacute;n, papaya, p&iacute;na y mango
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                    <td></td>
                                    <td>Diablito con Gruta
                                    </td>
                                    <td>$5.49</td>
                                </tr>
                                </table>
                            </div>
                            <div class="four wide column">
                            <table id = "menu">
                                <tr>
                                    <td></td>
                                    <th>
                                    <div class="massive ui orange horizontal label">Bebidas</div>
                                    </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Clamato Preparado
                                        <span> <br/>Clamato con salsa especial servido con camar&oacute;n y carne seca (se puede agregar Vitamina B-12 o Ginseng)
                                        </span>
                                    </td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Michelitas
                                        <span> <br/>Agua mineral preparado con clamato
                                    </span>
                                    </td>
                                    <td>$5.49</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Mojitos
                                        <span> <br/>De Pi&ntilde;a, mango, naranja, fresa con mora azul o kiwi con mora azul
                                        </span>
                                    </td>
                                    <td>$6.70</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Caipirinha
                                        <span> <br/>Limonada Brasilena
                                        </span> 
                                    </td>
                                    <td>$5.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Sangria Preparada
                                    </td>
                                    <td>$6.70</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Green Tea
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                <tr> 
                                    <td></td>
                                    <td>Chai Tea Latte
                                    <span> <br/> (calient / frio)
                                    </span>
                                    </td>
                                    <td>$5.40</td>
                                </tr>
                                </table>
                            </div>    
                            <div class="two wide column">
                            <table id = "menu">
                                <tr>
                                <td></td>
                                <th>
                                <div class="massive ui purple horizontal label">Nieves</div>
                                </th>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Banana Split
                                </td>
                                <td>$6.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Sundae
                                    <span> <br/>
                                    Dos bolitas de nieve, galleta y M&M, chocolate o fresa syrup
                                </span>
                                </td>
                                <td>$5.49</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Cazuelita de Nieve
                                </td>
                                <td>$6.70</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Malteadas
                                </td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Chocobanan
                                </td>
                                <td>$6.70</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Paletas de Leche
                                </td>
                                <td>$5.40</td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td>Nieves
                                </td>
                                <td>$5.40</td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td>Esquimales
                                </td>
                                <td>$5.40</td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td>Mangoneada
                                </td>
                                <td>$5.40</td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td>Chamango
                                </td>
                                <td>$5.40</td>
                            </tr>
                            </table>
                            

                            </div>
                        </div>        
                                           
                        </body>
                        
        )
    }


}