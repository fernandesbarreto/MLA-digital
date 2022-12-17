import React from "react";
import { LogoWhatsapp } from '../../assets';
import { ImageWhatsapp, LinkWhasapp } from "./styles";

export const Whatsapp: React.ElementType = () => {
    return(
        <LinkWhasapp href="https://api.whatsapp.com/send/?phone=5581993517332&text&type=phone_number&app_absent=0">
            <ImageWhatsapp src={LogoWhatsapp}/>
        </LinkWhasapp>
    );
}
