import './ImageHoverSliderVertical.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types'
import { useState } from 'react'
import styled from 'styled-components';

const plusIcon: IconLookup = { prefix: 'fas', iconName: 'plus' }
const infoIcon: IconLookup = { prefix: 'fas', iconName: 'info-circle' }

const ImgHover = styled.div`
  overflow: hidden; /* Hide any content that overflows from the container */
  border-radius: 8px; /* Rounded corners */
  width: 320px; /* Set the desired width for the container */
  transform-origin: left center;
  transition: transform 0.3s ease;
`;


export default function ImageHoverSliderVertical() {
    const [open, setOpen] = useState(false)
    const styles = {
        transform: "scaleX(1.2) scaleY(1.2)",
        zIndex: 3
    }

    return (
        <div className="image-info-container">
            <ImgHover
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                style={open ? styles : {}}
            >
                <img
                    src="https://i.ytimg.com/vi/9AVt5oyzMbw/maxresdefault.jpg"
                    alt=""
                    width="320px"
                />
            </ImgHover>
            {open && (
                <div
                    className="movie-info"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <div className='info-container'>
                        <div className='info-is-included'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h4>Se incluye con Prime </h4>
                        </div>
                        <div className="info-play">
                            <FontAwesomeIcon icon={faPlayCircle} />
                            <p>Reanudar T1 E19</p>
                            <FontAwesomeIcon icon={plusIcon} />
                            <FontAwesomeIcon icon={infoIcon} />
                        </div>
                        <h4 className='title-movie'>Joven Sheldon: La serie</h4>
                        <div className='info-year-age'>
                            <h4>2018</h4>
                            <p>13+</p>
                        </div>
                        <p className='info-description'>Temporada 1 . EL JOVEN SHELDON es una comedia
                            sobre Sheldon Cooper, un niño de 9 años que descubre que no e...
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
