import React from "react";
import { CardContainer, Description, Image, Name, TextContainer, TextFeedback } from "./style";

type FeedbackProps = {
    picture: string;
    name: string;
    company: string;
    text: string;
}

export const CardFeedback: React.ElementType = ({ picture, name, company, text }:FeedbackProps) => {
    return(
        <CardContainer>
            <Image src={picture}/>
            <TextContainer>
                <Name>{name}</Name>
                <Description>{company}</Description>
                <TextFeedback>{text}</TextFeedback>
            </TextContainer>
        </CardContainer>
    );
}