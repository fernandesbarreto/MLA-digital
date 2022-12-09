import React from "react";
import { LogoWhatsap } from '../../assets';
import { ImageWhatsapp, LinkWhasapp } from "./styles";

export const Whatsapp: React.ElementType = () => {
    return(
        <LinkWhasapp href="">
            <ImageWhatsapp src={LogoWhatsap}/>
        </LinkWhasapp>
    );
}
