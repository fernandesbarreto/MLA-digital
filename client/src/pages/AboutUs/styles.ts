import styled from "styled-components";


export const General = styled.div`
    width: 100%;
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
   
`

export const Line = styled.div`
    width: 600px;
    height: 5px;
    margin-top: 56px;
    background-color: rgba(78, 232, 232, 1);
    @media (max-width: 1080px){
        width: 100%;
        margin-left: auto;
    } 
`

export const AboutUs = styled.div`
    width: 220px;
    height: 38px;
    margin-top: 48px;;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    background: linear-gradient(180deg, #954CB4 27.6%, #554CB1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    text-align: center;
    @media (max-width: 1080px){
        width: 100%;
        margin-left: auto;
    }
    
`

export const MainText = styled.div`
    margin-top: 24px;
    width: 728px;
    height: 96px;
    font-size: 40px;
    font-weight: 700px;
    color: rgba(28, 28, 28, 1);
    font-family: 'Lato', 'Times New Roman', Times, serif;
    text-align: center;
    @media (max-width: 1080px){
        width: 100%;
        margin-left: auto;
    }
`
export const Negrito = styled.span`
    font-weight: 800;
`

export const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width:1080px){
        display: flex;
        flex-direction: column;
    }
`

export const Description = styled.div`
    margin-left: 273px;
    margin-top: 174px;
    width: 460px;
    height: 203px;
    font-weight: 400;
    font-size: 24px;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    @media (max-width: 1180px){
        width: 100%;
        margin-left: auto;
    }
`

export const Photo = styled.img`
    margin-left: 119px;
    margin-top: -48px;
    z-index: 2;
    @media (max-width: 600px){
        display: none;
    }
`

export const Square = styled.img`
    position: absolute;
    left: 63%;
    top: 185px;
    z-index : 0;
    @media (max-width:1081px){
        margin-left: 1090px;
    }
`