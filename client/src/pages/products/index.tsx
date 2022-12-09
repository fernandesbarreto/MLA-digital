import { Products } from "../../components";
import axios from "axios";
import React, { useEffect } from "react";
import {Line, Container, Texts, Title, SubTitle, Content} from './styles';
import { BlueLine } from "../../assets";

type ProjectProps = {
    id: number;
    title: string;
    subtitle: string;
    link: string;
}

const ProductsSection: React.ElementType = () => {
    const[ProjectInfo, setProjectInfo] = React.useState<ProjectProps>()

    async function loadProjectInfo(){
        const res = await axios.get("http://localhost:3001/product")
        const {data} = res;
        console.log(data[0]);
        setProjectInfo(data[0]);
    }

    useEffect(() => {
        loadProjectInfo();
    },[])

    return(
        <Container>
            <Line src = {BlueLine}/>
            <Texts>
                <Title>PRODUTOS</Title>
                <SubTitle>Temos o <strong>produto ideal</strong> para cada uma
das suas demandas!</SubTitle>
            </Texts>
            <Content>
                <Products title = "Aplicativo Nível&#10;O Verdadeiro Cashback" subtitle = "Licença anual" link = "/"/>
                <Products title = "Aplicativo Nível&#10;O Delivery Sem Taxas" subtitle = "Licença anual" link = "/"/>
                <Products title = "Aplicativo Epadoca" subtitle = "Para padarias&#10;venderem mais" link = "/"/>
                <Products title = "Aplicativo Notifiki" subtitle = "O Bot de Whatsapp&#10;para varejistas e serviços" link = "/"/>
            </Content>
        </Container>
    )
}
export default ProductsSection;