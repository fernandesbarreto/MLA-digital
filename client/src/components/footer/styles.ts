import styled from 'styled-components';

export const Background = styled.div`
    height: 216px;
    width: 100%;
    background-color: #554CB1;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);   
`
export const Center = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
   
`
export const Negrito = styled.span`
    font-weight: 700;
`

export const Logo = styled.div`
    margin-top: 84px;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    font-weight: 700;
    font-size: 40px;
    color: white;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`
export const Column = styled.div`
    flex-direction: column;
    margin-top: 62px;  
`

export const Adress = styled.div`
    width: 158px;
    height: 57px;
    margin-left: 154px;
    font-weight: 400;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    font-size: 16px;
    color: white;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`

export const Contact = styled.div`
    width: 236px;
    height: 57px;
    margin-left: 111px;
    font-weight: 400;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    font-size: 16px;
    color: white;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`

export const Redes = styled.div`
    font-weight: 700;
    font-family: 'Lato', 'Times New Roman', Times, serif;
    width:43px;
    height: 19px;
    margin-left: 110px;
    color:white;
    font-size: 16px;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`
export const Row = styled.div`
    flex-direction: row;
`
export const LinkIg = styled.a``

export const Instagram = styled.img`
    margin-left: 110px;
    margin-top: 19px;
    width: 24px;
    height: 24px;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`
export const LinkFace = styled.a``

export const Facebook = styled.img`
    margin-left: 14px;
    width: 24px;
    height: 24px;
    @media (max-width: 1115px){
        margin-left: auto;
    }
`