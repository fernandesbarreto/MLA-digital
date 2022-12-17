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
    @media (max-width: 1280px){
        width: 80%;
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
    @media (max-width: 1280px){
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
    @media (max-width: 1280px){
        width: 70%;
        font-size: 32px;
    }
`
export const Negrito = styled.span`
    font-weight: 800;
`

export const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1280px){
        display: flex;
        flex-direction: column;
        align-items:center;
    }
`

export const Description = styled.div`
    margin-top: 174px;
    width: 460px;
    height: 203px;
    font-weight: 400;
    font-size: 24px;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    @media (max-width: 1280px){
        width: 60%;
        text-align: center;
        margin: 0 auto;
        margin-top: 36px;
        font-size: 20px;
    }
`

export const Photo = styled.img`
    margin-left: 119px;
    margin-top: -48px;
    z-index: 2;
    @media(max-width: 1280px){
        height: 250px;
        width: 250px;
        object-fit: cover;
        align-self: center;
        margin: 0 auto;
    }
`

export const Square = styled.img`
    position: absolute;
    left: 63%;
    top: 185px;
    z-index : 0;
    @media (max-width:1280px){  
        display: none;
    }
`