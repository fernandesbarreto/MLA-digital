import React from "react";
import { General, Line, AboutUs, MainText, Section2, Description, Negrito, Photo, Square } from "./styles";
import { FotoTelefone, Quadrado } from "../../assets";

export const SectionAboutUs: React.FC = () => {
    return(
        <General>
            <Line></Line>
            <AboutUs>SOBRE NÓS</AboutUs>
            <MainText>Olá! Somos a <Negrito>MLA Digital</Negrito>, uma startup pernambucana de tecnologia</MainText>
            <Section2>
                <Description>
                Nós somos uma Retailtech Distribuidora de soluções tecnológicas inovadoras para varejo. Temos como foco comercializar seu aplicativo através de <Negrito>tendências digitais</Negrito> como cashback, visando <Negrito>escalonar marcas</Negrito>, aumentar faturamento, fidelizar seus clientes e atrair novos.
                </Description>
                <Photo src={FotoTelefone}/>
                <Square src={Quadrado}/>
            </Section2>
        </General>
    );
}