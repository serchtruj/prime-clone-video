import styled from 'styled-components'
import { InfoButton, ImageHoverSliderVertical } from '../index'

const IMG_URL = "https://m.media-amazon.com/images/S/sonata-images-prod/ROW_TVOD_HOME_CINEMA_MX_v3/6dd41804-d3af-432a-b257-659604d004e5._SX1035_FMpng_.png"
const Container = styled.div`
    height: 800px;
    background-color: #000000;
    color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 2fr 1fr 1fr;
    text-align: left;
`
const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
`

const InfoWrapper = styled.div`
    grid-row-start: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ImgTitle = styled.img`
    width: 550px;
`
const ImgSliderWrapper = styled.div`
    grid-row-start: 5;
    margin-bottom: 10px;
    height: 200px;
`
const HoverSlider = styled.div`

`;

export default function BackgroundImageSlider() {
    return (
        <Container>
            <InfoWrapper>
                <ImgTitle src={IMG_URL} alt={IMG_URL} />
                <Description>
                    Ya puedes comprar o rentar los últimos
                    lanzamientos directos del cine desde la comodidad de tu casa.
                </Description>
                <InfoButton title="Explorar mas" />
            </InfoWrapper>
            <ImgSliderWrapper>
                <HoverSlider>
                    <ImageHoverSliderVertical />
                </HoverSlider>
            </ImgSliderWrapper>
        </Container>
    )
}
