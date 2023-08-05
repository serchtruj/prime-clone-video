import styled from 'styled-components'

const Button = styled.button`
    width: 175px;
    transition: all 0.3s ease;
    font-size: 21px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    border: 0px;
    background-color: #ffffff;
    height: 50px;

    &:hover {
        transform: scale(1.1);
    }
`

export default function InfoButton({ title }: { title: string }) {
    return <Button >{title}</Button>
}