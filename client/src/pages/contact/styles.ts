import styled from 'styled-components'; 

// Imagem background
export const ContainerImageBackground = styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    
    top: 0;
    left: 0;
    
    z-index: -1;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

// Style section
export const ContainerContact = styled.section`
    background: linear-gradient(224.68deg, rgba(149, 76, 180, 0.5) 5.09%, rgba(85, 76, 177, 0.5) 28.57%);
    
    position: relative;
    
    width: 100vw;
    height: 808px;

    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0 182px 91px;
`;

export const ContainerTitleSection = styled.div`
    position: absolute;
    border-top: 5px solid #4EE8E8;
    width: 600px;
    
    padding-top: 48px;
    margin-top: 56px;

    text-align: center;

    font-family: Lato;
    font-size: 32px;
    font-weight: 800;
    line-height: 38px;
    letter-spacing: 0em;

    color: #FEFEFE;
    text-shadow: 0px 0px 13px rgba(28, 28, 28, 0.2);
`;

export const ContainerContent = styled.div`
    position: absolute;
    left: 81px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 37px;

    padding-top: 200px;
`;

export const Text = styled.p`
    height: 231px;
    width: 494px;
    
    font-family: Lato;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: left;

    color: #FEFEFE;

    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
`;

// Botao
export const LinkButtonWhatsapp = styled.a`
`;

export const ButtonWhatsapp = styled.button`
    outline: none;
    border: none;

    width: 206px;
    height: 74px;
    border-radius: 9.2px;
    background: #FEFEFE;
    box-shadow: 0px 3.70732px 11.122px rgba(0, 0, 0, 0.2);
    border-radius: 9.26829px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 4px;
    padding: 8px 24px 8px 8px;

    font-family: Lato;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #1C1C1C;
`;

export const ImageWhatsapp = styled.img`
    width: 58px;
    height: 58px;
`;
