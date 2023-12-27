import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const Button = styled.button`
    background-color: white;
    padding: 10px;
    border: none;
    box-shadow: 3px 3px 5px #EFEFEF;
    cursor: pointer;

    &:hover{
        background-color: #EFEFEF;
    }
`