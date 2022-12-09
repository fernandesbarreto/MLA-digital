import React, { Component } from "react";
import Slider from "react-slick";
import { LeftArrow, RightArrow } from "../../assets";
import { CardContainer, CarouselContainer, FeedbackContainer, Text, TitleSection } from "./styles";
import axios from 'axios';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={RightArrow} className={className} onClick={onClick} style={{ ...style, display: "flex", height: "69px", width: "34px", marginRight: "-72px"}}/>
    );
}
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={LeftArrow} className={className} onClick={onClick} style={{ ...style, display: "block", height: "69px", width: "34px", marginLeft: "-72px" }}/>
    );
}

export default class Feedback extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots:any) => (
            <div>
              <ul style={{ 
                    margin: "0px", 
                    display: "flex",
                    gap: "24px",
                    justifyContent: "center"

                }}> {dots} </ul>
            </div>
          ),
          customPaging: () => (
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "linear-gradient(203.84deg, #554CB1 28.37%, #134BAB 84.68%)",
                marginTop: "48px"
                
            }}
            ></div>
          )
      };
      
      return (
        <FeedbackContainer>
            <TitleSection>Feedback</TitleSection>
            <Text>Veja um pouco do que quem confiou {'\n'} nos nossos serviços tem a dizer</Text>
            {/* carousel */}
            <CarouselContainer>
                <Slider {...settings}>
                    <CardContainer>1</CardContainer>
                    <CardContainer>2</CardContainer>
                    <CardContainer>3</CardContainer>
                </Slider>
            </CarouselContainer>
        </FeedbackContainer>
      );
    }
  }