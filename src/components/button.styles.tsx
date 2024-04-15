import { styled } from 'styled-components';

export const Button = styled.button`
    display: block;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    background-color: #f0f0f0;

    &:hover {
        cursor: pointer;
        background-color: #bfbfbf;
    }
`;
