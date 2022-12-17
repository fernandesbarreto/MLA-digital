
import styled from "styled-components";

export const Losango_borda=styled.div`
    width: 230.24px;
    height: 230.24px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background-color: rgba(85, 76, 177, 1);
    display: flex;
    align-items: center;
    @media(max-width:1080px){
        width:160px;
        height:160px;
    }
`

export const Losango_img=styled.img`
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    margin-left:5.12px;
    margin-top:5.59px;
    margin-bottom:5.59px;
    width: 220.5px;
    height: 220.5px;
    @media(max-width:1080px){
        width:150px;
        height:150px;
    }
`;
