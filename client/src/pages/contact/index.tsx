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
                <LinkButtonWhatsapp href="https://api.whatsapp.com/send/?phone=5581993517332&text&type=phone_number&app_absent=0" target="_blank">
                    <ButtonWhatsapp>
                        <ImageWhatsapp src={LogoWhatsapp}/>
                        WhatsApp
                </ButtonWhatsapp>
                </LinkButtonWhatsapp>
            </ContainerContent>
        </ContainerContact>
    );
}