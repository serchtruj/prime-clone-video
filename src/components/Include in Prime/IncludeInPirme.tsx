import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import styled, { css } from 'styled-components';

const AgeRecomended = styled.p`
    background-color: grey;
    font-weight: 700;
    font-size: 20px;
    padding: 2px 5px 2px 5px;
    border-radius: 7px;
`
interface TitleProps {
    size?: string;
}

const Title = styled.h4<TitleProps>`
  font-size: ${(props) => props.size || '20px'};
  padding-left: 15px;
  padding-right: 15px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        font-size: 22px;
    }
`

export default function IncludeInPrime({ size }: { size?: string }) {
    return (
        <Wrapper>
            <FontAwesomeIcon icon={faCheckCircle} />
            <Title size={size}>Se incluye con Prime </Title>
            <AgeRecomended>13+</AgeRecomended>
        </Wrapper>
    )
}