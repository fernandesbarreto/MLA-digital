import styled from 'styled-components';

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 160px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 20px 20px;
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: row;  
    margin-left: 80px;
`;

export const Logo = styled.div`
    width: 248px;
    height: 48px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #1C1C1C;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    margin-top: 56px;
    flex: 1;
`;

export const Links = styled.div`
    margin-top: 65px;
    margin-right: 80px;
    display: flex;
    gap: 56px;
`;

export const HomeB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
`;

export const AboutB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
    `;

export const ProductsB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
    `;

export const FeedbacksB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
    `;

export const SupportB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
`;

export const ContactB = styled.a`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1C1C1C;
    &:hover {
        background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    text-decoration: none;
`;

export const ScrollDiv = styled.div`
    width: 0;
    height: 0;
`;


