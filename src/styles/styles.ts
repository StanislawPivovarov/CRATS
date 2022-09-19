import styled from "styled-components";
import HaussBlack from "../assets/fonts/ALSHauss-Black.woff";
import HaussBold from "../assets/fonts/ALSHauss-Bold.woff";
import HaussMedium from "../assets/fonts/ALSHauss-Medium.woff";

export const AppWrapper = styled.div`
  background-color: #606e7c;
`;

// header

export const Head = styled.div`
  max-height: 90px;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export const Logotype = styled.img`
  padding-left: 20px;
  height: 100%;
`;

export const Navline = styled.nav`
  height: 100%;
  display: flex;
`;

export const Navbar = styled.ul`
  display: inline-flex;
  text-decoration: none;
  list-style-type: none;
  align-items: center;
`;

export const NavbarElements = styled.li`
  padding-left: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-family: ${HaussMedium};
`;

// block main

export const MainPage = styled.div`
  height: 100vh;
  background-color: #606e7c;
`;

export const MainWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  align-items: center;
`;

export const Hello = styled.span`
  color: #fff;
  font-size: 80px;
`;

export const Description = styled.h2`
  width: 100%;
  color: #fff;
  opacity: 0.8;
  font-size: 60px;
`;
export const SloganSide = styled.div`
  width: 50%;
`;
export const FaceSide = styled.div`
  width: 50%;
`;
export const Face = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
`;

export const InstagramIcon = styled.img`
  width: 46px;
`;
export const VKIcon = styled.img`
  width: 46px;
`;
export const GitIcon = styled.img`
  width: 46px;
`;

export const SocialMedia = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
`;

export const WatchProjects = styled.button`
  width: 60%;
  height: 52px;
  font-size: 30px;
  color: #fff;
  border-radius: 50px;
  border: none;
  background-color: #819fa6;
`;

// price card

export const PriceWrapper = styled.div`
  max-width: 80%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

export const NameWrapper = styled.div`
  display: flex;
`;

// portfolio page

export const PortfolioPage = styled.div`
  background-color: #606e7c;
  height: 100vh;
`;

export const PortfolioText = styled.div`
  padding-top: 50px;
  font-size: 60px;
  text-align: center;
  color: #fff;
`;

//project card

export const ProductCard = styled.div`
  background-color: #fff;
  width: 30%;
  height: auto;
  border-radius: 10px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  margin-right: auto;
  margin-left: auto;
`;

export const ProductName = styled.h3`
  text-align: center;
`;

export const ProjectImg = styled.img`
height: 130px;
display: block;
margin-right: auto;
margin-left: auto;
`;

export const ProjectWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;
