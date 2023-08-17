import React from "react";
import styled from 'styled-components';

interface SubtitleProps {
    children: React.ReactNode;
}

const StyledSubtitle = styled.span`
    font-size: ${({theme}) => theme.fontSizes.s};
    color: ${({theme}) => theme.colors.dark};
    text-transform: uppercase;
    &:after{
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${({theme}) => theme.colors.primary};
        margin-top: 4px;
    }
`;

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return (
        <StyledSubtitle>
            {children}
        </StyledSubtitle>
    );
};
