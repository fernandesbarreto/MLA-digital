import styled from "styled-components";

export const CardContainer = styled.div`
    margin-left: 10%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 456px;
    width: 832px;
    border-radius: 10px;

    background: #FEFEFE;
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media(max-width: 1280px){
        height: 300px;
        width: 580px;
    }
`;

export const Image = styled.img`
    width: 189px;
    height: 286px;
    /* background: url(foto); */
    border-image: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%) 1;
    border-width: 4px;
    border-style: solid;
    @media(max-width: 1280px){
        height: 188px;
        width: 151px;
        margin-left: 80px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media(max-width: 1280px){
        margin: 80px 0px 0px 40px;
    }
`;

export const Name = styled.h3`
    margin: 0;

    height: 29px;
    width: 434px;

    font-family: 'Lato', 'Times New Roman';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #1C1C1C;
    @media(max-width: 1280px){
        width: 350px;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const Description = styled.p`
    margin: 0;

    width: 434px;
    height: 29px;

    font-family: 'Lato', 'Times New Roman';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: rgba(28, 28, 28, 0.6);
    @media(max-width: 1280px){
        width: 350px;
        font-size: 20px;
        line-height: 24px;
    }

`;

export const TextFeedback = styled.p`
    margin: 0;

    width: 434px;
    height: 183px;

    font-family: Lato;
    font-style: normal;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    text-align: left;

    color: #1C1C1C;
    @media(max-width: 1280px){
        width: 350px;
        font-size: 20px;
        line-height: 20px;
    }
`;
