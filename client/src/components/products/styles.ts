import styled from 'styled-components';

export const Container = styled.div`
    width: 336px;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const Retangulo = styled.div`
    width: 336px;
    height: 167px;
    background: linear-gradient(203.84deg, #554CB1 28.37%, #134BAB 84.68%);
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    items: flex-start;
    justify-content: center;
`;
    
export const Titulo = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FEFEFE;
`;

export const SubTitulo = styled.h2`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FEFEFE;
    margin-top: 16px;
`;