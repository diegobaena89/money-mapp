import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  max-width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.gray800};

  @media (max-width: 680px) {
    padding: 5px 10px;
  }

  .first-box {
    display: flex;
    width: 40%;
    max-width: 40%;

    @media (max-width: 680px) {
      width: 25%;
      max-width: 25%;
    }
  }

  .description {
    color: ${(props) => props.theme.colors.gray700};
  }

  .item-box {
    display: flex;
    justify-content: center;
    width: 40%;
    max-width: 40%;
  }

  .anex-box {
    display: flex;
    align-items: center;
    width: 15%;
    width: 15%;
    max-width: 15%;
  }
`;
