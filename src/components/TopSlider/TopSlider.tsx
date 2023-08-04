import './TopSlider.css'
import { IncludeInPrime, PlayAndInfoDetails } from '../index';

export default function TopSlider() {
    return (
        <div className="top-slider-container">
            <div className='slider-info-container'>
                <div className="slider-info">
                    <h3>#6 en Mexico</h3>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Venom_2018_logo.png?20210906083139"
                        alt="Venom"
                        width="250px"
                    />
                    <IncludeInPrime size="25px" />
                </div>
                <PlayAndInfoDetails playSize='100px' detailsInfoSize='40px' />
            </div>
        </div>
    )
}
