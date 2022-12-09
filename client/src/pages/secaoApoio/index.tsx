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

    const[Image, setImage] = useState<ProjectPhotos>()

    async function LoadImage() {
        const res = await axios.get("http://localhost:3001/project");
        const { data } = res;
        console.log(data[0]);
        setImage(data[0]);
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
                <Component_apoio img={neoVentures}/>
                <Component_apoio img={startUp}/>
                <Component_apoio img={nivel}/>
            </Section2>
            <Section3>
                <Component_apoio img={sebraPe}/>
                <Component_apoio img={fastMonion}/>
            </Section3>
            <Section4>
                <Component_apoio img={nivelAgmla}/>
                <Component_apoio img={cashback}/>
                <Component_apoio img={feComercio}/>
            </Section4>
        </General>

    )

}

export default SupportPage;