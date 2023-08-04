import './ImageHoverSliderVertical.css'
import { useState } from 'react'
import styled from 'styled-components';
import { IncludeInPrime, PlayAndInfoDetails } from '../index'

const ImgHover = styled.div`
  overflow: hidden; /* Hide any content that overflows from the container */
  border-radius: 8px; /* Rounded corners */
  width: 320px; /* Set the desired width for the container */
  transform-origin: left center;
  transition: transform 0.3s ease;
`;

export default function ImageHoverSliderVertical() {
    const [open, setOpen] = useState(true)
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
                        <IncludeInPrime />
                        <PlayAndInfoDetails />
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
