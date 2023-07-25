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
            <h1>Home Page</h1>
            <TopSlider />
            <ImageHoverSliderVertical />
            <ImageHoverSliderHorizontal />
            <BackgroundImageSlider />
        </div>
    );
}

export default Home;