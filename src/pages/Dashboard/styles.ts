import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;

  .fill {
    background-color: ${(props) => props.theme.colors.purple500};
    flex: 1;
  }
`;
