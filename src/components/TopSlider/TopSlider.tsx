import { IncludeInPrime, PlayAndInfoDetails } from '../index';
import styled from 'styled-components'

interface ContainerUrlProps {
    url: string;
}

const Container = styled.div<ContainerUrlProps>`
    height: 650px;
    background-size: cover;
    min-width: 100%;
    background-image: linear-gradient(to right,
            rgba(0, 0, 0, 1) 0%,
            /* 90% opaque black at the leftmost position */
            rgba(0, 0, 0, 0.9) 40%,
            /* 70% opaque black at 40% distance from the left */
            rgba(0, 0, 0, 0.5) 60%,
            /* 60% opaque black at 60% distance from the left */
            rgba(0, 0, 0, 0.2) 100%
            /* 40% opaque black at the rightmost position */
        ),
        url(${props => props.url || ""});
    display: grid;
    grid-template-columns: 70px 1fr 2fr;
    grid-template-rows: 100px 1fr;
    position: relative;
`

const SliderInfoWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    display: grid;
    grid-template-rows: 330px 125px;
    position: relative;

    h3 {
        justify-self: flex-start;
    }
`

const InfoWrapper = styled.div`
    padding-left: 1rem;
    color: white;
    display: grid;
    grid-template-rows: 75px 190px 60px;
    position: relative;
    /* Add this to create a new stacking context */
    z-index: 1;
`

export default function TopSlider({ url }: ContainerUrlProps) {
    return (
        <Container url={url}>
            <SliderInfoWrapper>
                <InfoWrapper>
                    <h3>#6 en Mexico</h3>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Venom_2018_logo.png?20210906083139"
                        alt="Venom"
                        width="250px"
                    />
                    <IncludeInPrime size="25px" />
                </InfoWrapper>
                <PlayAndInfoDetails playSize='100px' detailsInfoSize='40px' />
            </SliderInfoWrapper>
        </Container>
    )
}
