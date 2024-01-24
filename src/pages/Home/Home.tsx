import './Home.css';
import {
    TopSlider,
    ImageHoverSliderHorizontal,
    ImageHoverSliderVertical,
    BackgroundImageSlider,
    Slider
} from '../../components';
import styled from 'styled-components';
import axiosTMDB from '../../utils/axiosTMDB';

const imgTransformers = "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2023/06/Transformers-El-despertar-de-las-bestias-5.jpg"
const imgJhonWick = "https://images3.alphacoders.com/103/1033561.jpg"
const imgMegalodon = "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheMeg_CleanSlate/d09c26da-fe91-4e04-aa47-3d0247006f41._UR3840,1440_SX1440_FMjpg_.jpeg"
const imgBarbie = "https://media.vogue.mx/photos/64a85a036f69e15540706299/master/w_4410,h_2103,c_limit/rev-1-BARBIE-TP-0002_High_Res_JPEG.jpeg"

const AllImages = [
    imgTransformers,
    imgBarbie,
    imgJhonWick,
    imgMegalodon
]

const ImageHoverContainer = styled.div`
  background-color: black;
  color: #ffffff;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-bottom: 30px;
`;

const Title = styled.h4`
  font-size: 27px;
  margin-bottom: 17px;
  margin-top: 0pc;
`
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Home() {
    axiosTMDB.get().then((res: any) => console.log(res.json()))
    return (
        <div className="home__container">
            <TopSlider url="https://images5.alphacoders.com/116/thumb-1920-1160553.png" />
            <div className="slider-images-container">
                <h3>Seguir viendo</h3>
                <div className="slider-images-hover">
                    <ImageHoverSliderVertical />
                </div>
            </div>
            <ImageHoverContainer>
                <Title>Amazon prime y exclusivas</Title>
                <ImageWrapper>
                    <ImageHoverSliderHorizontal />
                </ImageWrapper>
            </ImageHoverContainer>
            <BackgroundImageSlider />
            <Slider >
                {AllImages.map(item => <TopSlider url={item} key={item} />)}
            </Slider>
        </div>
    );
}

export default Home;