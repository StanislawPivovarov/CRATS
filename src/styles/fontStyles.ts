import { createGlobalStyle } from "styled-components";
import HaussBlack from "../assets/fonts/ALSHauss-Black.woff";
import HaussBold from "../assets/fonts/ALSHauss-Bold.woff";
import HaussMedium from "../assets/fonts/ALSHauss-Medium.woff";

const FontStyles = createGlobalStyle`
    @font-face{
        font-family: 'HaussBold';
        src: url(${HaussBold}) format ('woff');
    }
    @font-face{
        font-family: 'HaussBlack';
        src: url(${HaussBlack}) format ('woff');
    }
    @font-faсe{
        font-family: 'HaussMedium';
        src: url(${HaussMedium}) format ('woff');
    }
`;

export default FontStyles;
