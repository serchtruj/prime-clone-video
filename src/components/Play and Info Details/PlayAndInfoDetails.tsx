import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const plusIcon: IconLookup = { prefix: 'fas', iconName: 'plus' }
const infoIcon: IconLookup = { prefix: 'fas', iconName: 'info-circle' }

interface SvgDetailsProps {
    fontSize?: string;
}

interface SvgPlayProps {
    fontSize?: string;
}

interface PlayAndInfoProps {
    playSize?: string;
    detailsInfoSize?: string;
}

const PlayInfoContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: 10px;
`
const SvgPlayContainer = styled.div<SvgPlayProps>`
    svg {
        font-size: ${(props) => props.fontSize || '50px'};
        margin-right: 20px;
        cursor: pointer;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
`

const Title = styled.h4`
    font-size: 27px;
    font-weight: 700;
    margin-right: 30px;
`

const SvgDetailsInfoContainer = styled.div<SvgDetailsProps>`
    svg {
        font-size: ${props => props.fontSize || '20px'};
        margin-left: 15px;
        background-color: grey;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: white;
            color: grey;  
        }
    }
`

export default function PlayAndInfoDetails({ playSize, detailsInfoSize }: PlayAndInfoProps) {
    return (
        <PlayInfoContainer>
            <SvgPlayContainer fontSize={playSize}>
                <FontAwesomeIcon icon={faPlayCircle} />
            </SvgPlayContainer>
            <Title>Reproducir</Title>
            <SvgDetailsInfoContainer fontSize={detailsInfoSize}>
                <FontAwesomeIcon icon={plusIcon} />
            </SvgDetailsInfoContainer>
            <SvgDetailsInfoContainer fontSize={detailsInfoSize}>
                <FontAwesomeIcon icon={infoIcon} />
            </SvgDetailsInfoContainer>
        </PlayInfoContainer>
    )
}