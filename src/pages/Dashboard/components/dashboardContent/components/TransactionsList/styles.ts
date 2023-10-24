import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  max-width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.purple200};

  .first-box {
    display: flex;
    align-items: center;

    width: 35%;
    max-width: 35%;
  }

  .description {
    color: ${(props) => props.theme.colors.gray700};
  }

  .item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    max-width: 35%;
  }

  .anex-box {
    display: flex;
    align-items: center;
    width: 15%;
    width: 15%;
    max-width: 15%;
  }
`;
