import React from "react";
import {Container, Texts, Content, Title, Subtitle, Cellphone, Triangle} from './styles';
import {TriangleImg, Smartphone} from '../../assets';
export const HomePage: React.FC = () => (
    <Container>
        <Triangle src = {TriangleImg}/>
        <Content>
            <Texts>
                <Title>Nós distribuímos<br/> seu aplicativo no Nordeste</Title>
                <Subtitle>Transforme seus processos de venda<br/> através da inovação digital</Subtitle>
            </Texts>
            <Cellphone src = {Smartphone}/>
        </Content>
    </Container>
);