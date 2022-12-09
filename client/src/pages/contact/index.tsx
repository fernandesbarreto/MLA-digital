import React from "react";
import { LogoWhatsapp, BackgroundContact } from "../../assets";
import { ButtonWhatsapp, ContainerContact, ContainerContent, ContainerImageBackground, ContainerTitleSection, ImageBackground, ImageWhatsapp, LinkButtonWhatsapp, Text } from "./styles";

export const Contact: React.FC = () => {
    return (
        <ContainerContact>
            <ContainerImageBackground>
                <ImageBackground src={BackgroundContact}/>
            </ContainerImageBackground>
            
            <ContainerTitleSection>Contato</ContainerTitleSection>
            <ContainerContent>
                <Text>Tem interesse? {'\n'} Entre em contato   {'\n'} conosco!</Text>
                {/* botao */}
                <LinkButtonWhatsapp>
                    <ButtonWhatsapp>
                        <ImageWhatsapp src={LogoWhatsapp}/>
                        WhatsApp
                </ButtonWhatsapp>
                </LinkButtonWhatsapp>
            </ContainerContent>
        </ContainerContact>
    );
}