import React from "react";

import { ProductCard, ProductWrapper, ProductName, ProjectImg} from "../../../styles/styles";

interface CardProps {
  name: string;
  description: string;
  image: string;
  start: string;
  end: string;
  tech: string;
}

function ProjectCard(props: CardProps) {
  return (
    <ProductCard>
      <ProductWrapper>
        <ProductName>{props.name}</ProductName>
        <ProjectImg src={props.image}></ProjectImg> 
        <p>{props.description}</p>
        <p>Дата начала работы: {props.start}</p>
        <p>Дата релиза: {props.end}</p>
        <p>Технологии: {props.tech}</p>
      </ProductWrapper>
      
    </ProductCard>
  );
}

export default ProjectCard;
