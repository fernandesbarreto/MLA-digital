import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 850px;
    @media(max-width: 1280px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Triangle = styled.img`
    position: absolute;
    width: 471.67px;
    height: 1247.7px;
    left: 180px;
    top: -800px;
    background: linear-gradient(203.84deg, #554CB1 28.37%, #134BAB 84.68%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: rotate(60.47deg);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 279px;
    @media(min-width: 1920px) {
        gap: 20%;
    }
    @media(max-width: 1280px){
        flex-wrap: wrap;
        width: 80%;
    }
`;

export const Texts = styled.div`
    width: 758px;
    @media(max-width: 1280px){
        margin: 0 auto;
        align-self: center;
        justify-self: center;
    }
`;

export const Title = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: #1C1C1C;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    @media(max-width:1280px){
        font-size:40px;
        line-height:52px;
        text-align:center;
    }
`;

export const Subtitle = styled.h4`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #1C1C1C;
    @media(max-width:1280px){
        font-size:24px;
        text-align:center;
    }
`;

export const Cellphone = styled.img`
    width: 537.81px;
    height: 461px;
    @media(max-width: 1280px){
        width: 268.9px;
        height: 230.5px;
    }
`;


