import React from "react";
import { Background, Logo, Adress, Column, Contact, Redes, LinkIg, Row, LinkFace, Facebook, Instagram, Center, Negrito} from "./styles";
import { LogoInstagram, LogoFacebook } from '../../assets';

export const Footer: React.ElementType= () =>{
    return(
        <Background>
            <Center>
                <Logo>MLA DIGITAL</Logo>
                    <Column>
                        <Adress><Negrito>Endereço</Negrito> <br /><br /> Cais do Apolo, 455 <br /><br /> Recife, PE, 50030-230</Adress>        
                    </Column>
                    <Column>
                        <Contact><Negrito>Contato</Negrito> <br /><br /> +55 (81) 99381-0678 <br /><br /> zapmla81993810678@gmail.com</Contact>
                    </Column>
                    <Column>
                        <Redes>Redes</Redes>
                        <Row>
                            <LinkIg href="https://www.instagram.com/agmladigital" target="_blank">
                                <Instagram src={LogoInstagram}/>
                            </LinkIg>
                            <LinkFace href="https://www.facebook.com/mladigital" target="_blank">
                                <Facebook src={LogoFacebook}/>
                            </LinkFace>
                        </Row>
                    </Column>   
            </Center>           
        </Background>
    );
}