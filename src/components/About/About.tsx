import React from "react";
import styled from 'styled-components';
import {Subtitle} from '../UI/Subtitle';
import { useTranslation } from "react-i18next";
import {AboutImage} from './AboutImage';

const Wrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 80px 0;
    &:after{
        content: '';
        
    }
`
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0; 
    p{
        flex: 1;
        margin: 50px;
        line-height: 1.6;
    }
`



export const AboutSecction: React.FC = () => {
    const {t} = useTranslation();
    
    return(<Wrapper id='about'>
        <Subtitle>{t('menu.about')}</Subtitle>
        <ContentWrapper>
            <AboutImage/>
            <p>{t('aboutDescription')}</p>
        </ContentWrapper>
    </Wrapper>)
}