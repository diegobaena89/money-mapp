import styled from "styled-components";

export const Sidebar = styled.nav`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  background-color: ${(props) => props.theme.colors.purple500};
  color: ${(props) => props.theme.colors.white};

  }
`;
