import styled from "styled-components";

export const GraphsContainer = styled.main`
  width: 80%;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};

  .heading {
    color: ${(props) => props.theme.colors.gray700};
  }

  .paragraph {
    color: ${(props) => props.theme.colors.gray700};
  }
`;
