import React from "react";
import face from "../../assets/images/face.png";
import Header from "../Header/index";
import {
  MainPage,
  MainWrapper,
  SloganSide,
  FaceSide,
  Face,
  InstagramIcon,
  VKIcon,
  GitIcon,
  SocialMedia,
  Hello,
  Description,
  WatchProjects,
} from "../../styles/styles";
import insta from "../../assets/images/instagram.svg";
import vk from "../../assets/images/vk.svg";
import git from "../../assets/images/gitlab.svg";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <MainPage className="main-page">
      <Header />
      <MainWrapper className="wrapper">
        <SloganSide className="left-side">
          <Hello>
            <Typewriter
              options={{
                strings: "Hi, Im Stas.",
                autoStart: true,
                loop: true,
              }}
            />
          </Hello>
          <Description>Front-end developer</Description>

          <WatchProjects>Посмотри мои проекты</WatchProjects>
        </SloganSide>
        <FaceSide className="right-side">
          <Face src={face}></Face>
          <SocialMedia className="social-medias">
            <a href="https://www.instagram.com/me_stanislaw/">
              <InstagramIcon src={insta}></InstagramIcon>
            </a>
            <a href="https://www.vk.com/stanislav_pivovarov/">
              <VKIcon src={vk}></VKIcon>
            </a>
            <a href="https://github.com/StanislawPivovarov">
              <GitIcon src={git}></GitIcon>
            </a>
          </SocialMedia>
        </FaceSide>
      </MainWrapper>
    </MainPage>
  );
}

export default Main;
