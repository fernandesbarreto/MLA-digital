import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import { LeftArrow, RightArrow } from "../../assets";
import { CarouselContainer, FeedbackContainer, Text, TitleSection } from "./styles";
import { CardFeedback } from "../../components"
import axios from 'axios';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={RightArrow} className={className} onClick={onClick} style={{ ...style, display: "flex", height: "69px", width: "34px", marginRight: "-72px" }}/>
    );
}
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={LeftArrow} className={className} onClick={onClick} style={{ ...style, display: "block", height: "69px", width: "34px", marginLeft: "-72px" }}/>
    );
}
// props card Feedback
type FeedbackProps = {
  picture: string;
  name: string;
  company: string;
  text: string;
}

const Feedback = () => {
  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackProps[]>([]);

      async function loadFeedbackInfo() {
        const res = await axios.get('http://localhost:3001/feedback');
        const { data } = res;
        console.log(data);
        setFeedbackInfo(data);
      }
      
      useEffect(() => {
        loadFeedbackInfo();
      }, [])

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
            <TitleSection>FEEDBACK</TitleSection>
            <Text>Veja um pouco do que quem confiou {'\n'} nos nossos serviços tem a dizer</Text>
            {/* carousel */}
            <CarouselContainer>
                <Slider {...settings}>
                  {feedbackInfo?.map(({ picture, name, company, text}: FeedbackProps) => (
                      <CardFeedback picture={picture} name={name} company={company} text={text}/>
                    ))
                  }
                </Slider>
            </CarouselContainer>
        </FeedbackContainer>
      );
    
  }

export default Feedback;