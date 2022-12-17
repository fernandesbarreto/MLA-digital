import styled from 'styled-components';

export const General = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
    @media(max-width:1280px){
        height: 850px;
    }
`

export const Line = styled.div`
    width: 600px;
    height: 5px;
    background-color: rgba(78, 232, 232, 1);
    margin-top: 56px;
`

export const MainText = styled.div`
    width: 106px;
    height: 38px;
    font-size: 32px;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    color: rgba(149, 76, 180, 1);
    margin-top: 48px;
    font-weight: 800;
`

export const SubText = styled.div`
    width: 785px;
    height: 96px;
    font-weight: 500;
    text-align: center;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    font-size: 32px;
    margin-top: 24px;
    margin-bottom: 32px;
    @media(max-width:1280px){
        width: 65%;
        font-size:28px;
    }
`

export const Negrito = styled.span`
    font-weight: 800;
`

export const Section2= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    width: 100%;
`
export const Section3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin-top: -90px;
    @media(max-width:1080px){
        margin-top:-60px;
    }
`

export const Section4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: row;
    gap:50px;
    margin-top: -90px;
    @media(max-width:1080px){
        margin-top:-60px;
    }
`