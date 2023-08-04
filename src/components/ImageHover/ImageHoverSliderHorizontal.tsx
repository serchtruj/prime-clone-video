import styled, { keyframes } from 'styled-components';
import { IncludeInPrime, PlayAndInfoDetails } from '../index';
import { useState } from 'react';

const appearFromLeft = keyframes`
  from {
    transform: translate(-150px);
  }
  to {
    transform: translate(0px);
  }
`;

const ImgHorizontalWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transform-origin: left center;
  overflow: hidden;
  border-radius: 10px;
`;


const ImgVerticalWrapper = styled.div`
  transition: all 0.5s ease;
  overflow: hidden;
  transform-origin: left center;
  border-radius: 10px;

  &:hover {
    transform: scaleX(1.8);
  }
`;

const HorizontalImage = styled.img`
  animation: ${appearFromLeft} 0.5s ease;
  height: 500px;
  width: auto;
`;

const VerticalImage = styled.img`
  height: 500px;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0%;
  left: 3%;

  div:nth-child(1),
  h4 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  img {
    position: absolute;
    left: 0px;
    bottom: 100%;
  }
`;

const Container = styled.div`
  margin-right: 30px;
`

export default function ImageHoverSliderHorizontal() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            {open && (
                <ImgHorizontalWrapper onMouseLeave={() => setOpen(false)}>
                    <HorizontalImage
                        src="https://cdn.avpasion.com/wp-content/uploads/2023/06/el-pacto-amazon-prime-video.jpg"
                        alt="el pacto horizontal"
                    />
                    <InfoWrapper>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Venom_2018_logo.png?20210906083139"
                            alt="Venom"
                            width="250px"
                        />
                        <PlayAndInfoDetails playSize="100px" detailsInfoSize="40px" />
                        <IncludeInPrime size="25px" />
                    </InfoWrapper>
                </ImgHorizontalWrapper>
            )}
            {!open && (
                <ImgVerticalWrapper onMouseEnter={() => setOpen(true)}>
                    <VerticalImage
                        src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/4/w1280/nq7NbZtNfIHyL1NXPV1EiG4XQ7u.jpg"
                        alt="el pacto vertical"
                    />
                </ImgVerticalWrapper>
            )}
        </Container>
    );
}