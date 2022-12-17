import styled from 'styled-components';

export const General = styled.div`
    height: 850px;
`;

export const Line = styled.img`
    width: 600px;
    margin-bottom: 48px;
    margin-top: 56px;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.h1`
    margin: 0;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 43px;
    background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
export const SubTitle = styled.h4`
    margin-top: 24px;
    margin-bottom: 100px;
    max-width: 658px;
    text-align: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #1C1C1C;
    white-space: pre-line;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 740px;
    gap: 68px;
    justify-content: center;
    overflow: auto;
`;