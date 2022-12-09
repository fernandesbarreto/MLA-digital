import React from "react"
import {Losango_borda, Losango_img} from './styles';

type Card_apoio = {
    img: string;
}

export const Component_apoio: React.ElementType = ({img}: Card_apoio) =>{
    return(
        <Losango_borda>
                <Losango_img src={img}/>
        </Losango_borda>
    )
}
