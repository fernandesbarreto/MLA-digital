import React from "react";
import { LogoWhatsapp } from '../../assets';
import { ImageWhatsapp, LinkWhasapp } from "./styles";

export const Whatsapp: React.ElementType = () => {
    return(
        <LinkWhasapp href="">
            <ImageWhatsapp src={LogoWhatsapp}/>
        </LinkWhasapp>
    );
}
