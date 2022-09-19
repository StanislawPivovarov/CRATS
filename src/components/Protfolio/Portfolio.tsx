import React from "react";
import { PortfolioPage, PortfolioText, ProjectWrapper} from "../../styles/styles";
import ProjectCard from "../../assets/cards/ProjectCard";
import ProstoDeti from "../../assets/images/projects/prostodeti.png";
import Giniyatov from "../../assets/images/projects/giniyatov.jpg"
import Photovarov from "../../assets/images/projects/photovarov.svg"
function Portflio() {
  return (
    <PortfolioPage>
      <PortfolioText>Мои проекты</PortfolioText>
      <ProjectWrapper>
        <ProjectCard
          name="Просто дети"
          image={ProstoDeti}
          description="Разработка лендинга для детского
        сада “Просто дети”"
          start="December 17, 1995"
          end="December 20, 1995"
          tech="HTML, CSS, Bootstrap, Gulp, FancyBox 2, JavaScript"
        />
        <ProjectCard
          name="Giniyatov tea & coffee"
          image={Giniyatov}
          description="Разработка интернет-магазина сети кофеен “Giniyatov”"
          start="Сентябрь, 2022"
          end="Проект в разработке"
          tech="React, styled-components, PostgreSQL, TypeScript"
        />
        <ProjectCard
          name="photovarov.web"
          image={Photovarov}
          description="Разработка персонального веб-сайта для моего проекта"
          start="Сентябрь, 2022"
          end="Сентябрь, 2022"
          tech="React, styled-components, TypewritterJS v.2, TypeScript"
        />
        
      </ProjectWrapper>
    </PortfolioPage>
  );
}

export default Portflio;
