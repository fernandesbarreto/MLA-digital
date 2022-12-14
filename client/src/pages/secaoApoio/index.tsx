import React,{useState, useEffect} from "react"
import axios from 'axios'
import { General, Line, MainText, Negrito, Section2, Section3, Section4, SubText } from './styles';
import {Component_apoio} from '../../components/Apoio'
import { fastMonion, sebraPe, feComercio, cashback, nivel, nivelAgmla, startUp, neoVentures} from '../../assets'

type ProjectPhotos = {
    id: number;
    image: string;
}

const SupportPage: React.ElementType = () => {

    const[Image, setImage] = React.useState<ProjectPhotos[]>([])

    async function LoadImage() {
        const res = await axios.get("http://localhost:3001/project");
        const { data } = res;
        console.log(data);
        setImage(data);
    }

    useEffect(() =>{
        LoadImage();
    },[])

    return (
        <General>
            <Line></Line>
            <MainText>APOIO</MainText>
            <SubText>Contamos com uma forte <Negrito>rede de apoio</Negrito> para consolidar ainda mais nosso trabalho</SubText>
            <Section2>
                {Image?.slice(0,3).map(({image}) => (
                        <Component_apoio img ={image}/>
                ))}
            </Section2>
            <Section3>
                {Image?.slice(3,5).map(({image}) => (
                        <Component_apoio img ={image}/>
                ))}            
            </Section3>
            <Section4>
                {Image?.slice(5,8).map(({image}) => (
                        <Component_apoio img ={image}/>
                ))}  
            </Section4>
        </General>
    )

}

export default SupportPage;