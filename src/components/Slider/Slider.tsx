import styled from "styled-components"
import { IconLookup } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect, ReactNode } from 'react'

const arrowLeftIcon: IconLookup = { prefix: 'fas', iconName: 'arrow-left' }
const arrowRightIcon: IconLookup = { prefix: 'fas', iconName: 'arrow-right' }

interface SliderInnerProps {
    transform?: string;
}

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

export default function Slider({ children }: { children: ReactNode }) {
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

    return (
        <SliderContainer>
            <SvgContainerLeft onClick={handleToLeft}>
                {sliderIndex !== 0 && (
                    <FontAwesomeIcon icon={arrowLeftIcon} />
                )}
            </SvgContainerLeft>
            <SliderInner ref={sliderRef} transform={`translateX(${sliderIndex}%)`}>
                {children}
            </SliderInner>
            <SvgContainerRight onClick={handleToRight}>
                {sliderIndex > -250 && (
                    <FontAwesomeIcon icon={arrowRightIcon} />
                )}
            </SvgContainerRight>
        </SliderContainer>
    );
}
