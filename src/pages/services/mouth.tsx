import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>Usta</h1>
    </Wrapper>
  );
};

export default IndexPage;
