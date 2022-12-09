import styled from 'styled-components'; 

export const FeedbackContainer = styled.div`
  position: relative;

  /* width: 1440px; */
  height: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FEFEFE;
`;

export const TitleSection = styled.div`
  position: absolute;

  width: 600px;
  text-align: center;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-top: 56px;
  padding-top: 48px;

  color: rgba(149, 76, 180, 1); //colocar gradient

  border-top: 5px solid #4EE8E8;
`;

export const Text = styled.p`
  position: absolute;

  margin: 0;

  width: 655px;
  font-family: 'Lato';
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  font-weight: 500;

  color: #1C1C1C;

  margin-top: 171px;
  margin-bottom: 80px;
`;

export const CarouselContainer = styled.div`
  position: absolute;

  margin-top: 374px;

  width: 1047px;
`;