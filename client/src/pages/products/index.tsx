import { Products } from "../../components";
import axios from "axios";
import React, { useEffect } from "react";
import {General, Line, Container, Texts, Title, SubTitle, Content} from './styles';
import { BlueLine } from "../../assets";

type ProjectProps = {
    id: number;
    title: string;
    subtitle: string;
    link: string;
}

const ProductsSection: React.ElementType = () => {

    const[ProjectInfo, setProjectInfo] = React.useState<ProjectProps[]>([])

    async function loadProjectInfo(){
        const res = await axios.get("http://localhost:3001/product")
        const {data} = res;
        console.log(data);
        setProjectInfo(data);
    }

    useEffect(() => {
        loadProjectInfo();
    },[])

    return(
        <General>
            <Container>
                <Line src = {BlueLine}/>
                <Texts>
                    <Title>PRODUTOS</Title>
                    <SubTitle>Temos o <strong>produto ideal</strong> para cada uma
    das suas demandas!</SubTitle>
                </Texts>
                <Content>
                    {ProjectInfo?.map(({title, subtitle, link} : ProjectProps) => (
                        <Products title = {title} subtitle = {subtitle} link = {link}/>
                    ))}
                </Content>
            </Container>
        </General>
    )
}
export default ProductsSection;