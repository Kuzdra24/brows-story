import styled, { keyframes } from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 80px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 50px;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  max-width: 400px;
  padding: 0 50px;
  @media (max-width: 512px) {
    padding: 0;
  }
`;

const IconsAnimation = keyframes`
    from {
        opacity: 0;
        left: -10px;
    }
    to {
        opacity: 1;
        left: 0;
    }
`;

const Social = styled.div`
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;
    margin: 10px 0;
    position: relative;
    animation: ${IconsAnimation} .6s ease-in-out forwards;
    img {
      margin-left: 10px;
    }
  }
  &:after {
    content: "";
    display: block;
    height: 120%;
    width: 120px;
    background-color: ${({ theme }) => theme.colors.secondary}90;
    z-index: -1;
    position: absolute;
    right: 0;
    top: -10%;
  }
`;

const MobileSocial = styled.div`
  position: relative;
  margin: 60px 0;
  background-color: ${({ theme }) => theme.colors.secondary}90;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    margin: 10px 0;
    position: relative;
    animation: ${IconsAnimation} 1s ease-in-out forwards;
    img {
      margin-left: 10px;
    }
  }
`;

export { Wrapper, ContentWrapper, Description, Social, MobileSocial };
