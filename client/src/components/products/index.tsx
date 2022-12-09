import React from 'react';
import axios from 'axios';
import {Container, Link, Retangulo, Titulo, SubTitulo} from './styles';
type CardProps = {
    title: string;
    subtitle: string;
    link: string;
}
export const Products: React.ElementType = ({title, subtitle, link}: CardProps) => {
    return(
        <Container>
            <Link href = {link}>
                <Retangulo>
                    <Titulo>{title}</Titulo>
                    <SubTitulo>{subtitle}</SubTitulo>
                </Retangulo>
            </Link>
        </Container>
    );
}