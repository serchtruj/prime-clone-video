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
            <ImageHoverSliderVertical />
            <ImageHoverSliderHorizontal />
            <BackgroundImageSlider />
        </div>
    );
}

export default Home;