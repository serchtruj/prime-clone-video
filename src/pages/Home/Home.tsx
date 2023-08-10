import './Home.css';
import {
    TopSlider,
    ImageHoverSliderHorizontal,
    ImageHoverSliderVertical,
    BackgroundImageSlider,
    Slider
} from '../../components';
import styled from 'styled-components';

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
            <Slider />
        </div>
    );
}

export default Home;