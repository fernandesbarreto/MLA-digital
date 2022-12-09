import React from 'react';
import {NavbarContainer, Texts, Logo, Links, HomeB, AboutB, ProductsB, FeedbacksB, SupportB, ContactB} from './styles';

export const Navbar: React.FC = () => {
    return(
    <NavbarContainer>
        <Texts>
            <Logo >MLA DIGITAL</Logo>
            <Links>
                <HomeB href = '#contact'>Home</HomeB>
                <AboutB href = '#about'>Sobre nós</AboutB>
                <ProductsB href = '#products'>Produtos</ProductsB>
                <FeedbacksB href = '#feedbacks'>Feedbacks</FeedbacksB>
                <SupportB href = '#feedbacks'>Apoio</SupportB>
                <ContactB href = '#contacts'>Contato</ContactB>
            </Links>
        </Texts>
    </NavbarContainer>
    );
}