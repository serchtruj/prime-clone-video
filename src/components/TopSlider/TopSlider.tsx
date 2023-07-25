import './TopSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types'

const plusIcon: IconLookup = { prefix: 'fas', iconName: 'plus' }
const infoIcon: IconLookup = { prefix: 'fas', iconName: 'info-circle' }

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
                    <div className='slider-include-prime'>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h4>Se incluye con Prime </h4>
                        <p>13+</p>
                    </div>
                </div>
                <div className="slider-btns">
                    <FontAwesomeIcon icon={faPlayCircle} />
                    <p>Reproducir</p>
                    <FontAwesomeIcon icon={plusIcon} />
                    <FontAwesomeIcon icon={infoIcon} />
                </div>
            </div>
        </div>
    )
}
