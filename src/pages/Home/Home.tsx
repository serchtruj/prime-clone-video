import './Home.css';
import {
    TopSlider,
    ImageHoverSliderHorizontal,
    ImageHoverSliderVertical,
    BackgroundImageSlider
} from '../../components';

function Home() {
    return (
        <div className="home__container">
            <TopSlider />
            <div className="slider-images-container">
                <h3>Seguir viendo</h3>
                <div className="slider-images-hover">
                    <ImageHoverSliderVertical />
                </div>
            </div>

            <div>
                <h3>Amazon prime y exclusivas</h3>
                <ImageHoverSliderHorizontal />
            </div>
            <BackgroundImageSlider />
        </div>
    );
}

export default Home;