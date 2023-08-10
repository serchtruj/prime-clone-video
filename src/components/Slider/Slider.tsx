import styled from "styled-components"
import { IconLookup } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { TopSlider } from '../index'

const arrowLeftIcon: IconLookup = { prefix: 'fas', iconName: 'arrow-left' }
const arrowRightIcon: IconLookup = { prefix: 'fas', iconName: 'arrow-right' }

interface SliderInnerProps {
    transform?: string;
}

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

const SliderContainer = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: 70px 93% 70px;
    position: relative;
`

const SliderInner = styled.div<SliderInnerProps>`
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transform: ${props => props.transform || '0%'}
    transition: transform 0.3s ease;
    position: relative; 
`

const svStyles = `
    display: flex;
    align-items: center;
    cursor: pointer;
    background: black;
    color: white;
    height: 100%;
    width: 100%;
    
    svg {
        font-size: 35px;
        transition: all 0.3s ease;
    }

    svg:hover {
        transform: scale(1.2)
    }
`

const SvgContainerLeft = styled.div`
    ${svStyles}
    justify-content: flex-end;
    z-index: 1;
`

const SvgContainerRight = styled.div`
    ${svStyles}
    justify-content: flex-start;
    z-index: 1;
`

export default function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slideWidth = 100;

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = "transform 0.5s ease";
            sliderRef.current.style.transform = `translateX(${sliderIndex}%)`;
        }
    }, [sliderIndex]);

    const handleToRight = () => {
        if (sliderIndex > -250) {
            setSliderIndex(prev => prev - slideWidth);
        }
    };

    const handleToLeft = () => {
        if (sliderIndex < 0) {
            setSliderIndex(prev => prev + slideWidth);
        }
    };
    console.log(sliderIndex)
    return (
        <SliderContainer>
            <SvgContainerLeft onClick={handleToLeft}>
                {sliderIndex !== 0 && (
                    <FontAwesomeIcon icon={arrowLeftIcon} />
                )}
            </SvgContainerLeft>
            <SliderInner ref={sliderRef} transform={`translateX(${sliderIndex}%)`}>
                {AllImages.map(item => <TopSlider url={item} key={item} />)}
            </SliderInner>
            <SvgContainerRight onClick={handleToRight}>
                {sliderIndex > -250 && (
                    <FontAwesomeIcon icon={arrowRightIcon} />
                )}
            </SvgContainerRight>
        </SliderContainer>
    );
}

