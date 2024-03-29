import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: 340px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.dark};
    border-radius: 30px;
    padding: 15px 0;
    color: ${({theme}) => theme.colors.dark};
    cursor: pointer;
    font-size: ${({theme})=> theme.fontSizes.xs};
    letter-spacing: 2px;
    transition: ease-in-out .3s;
    margin: 15px;
    
    &:after{
        content: ''
    }
    &:hover{
        border-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.primary};
    }
`
