import { Divider } from "antd";
import React from "react";
import {PriceWrapper, NameWrapper} from "../../styles/styles"
interface PriceProps{
    name: string;
    description: string;
    price: number;
}

function Prices(props: PriceProps) {
    return(
 <PriceWrapper>
    
    <h2 className="name">{props.name}</h2>
    <NameWrapper>
    <h5 className="description">{props.description}</h5>
    <h2 className="price">{props.price}₽</h2>
    </NameWrapper>
    <Divider></Divider>
  </PriceWrapper>
    );
 
}

export default Prices;
