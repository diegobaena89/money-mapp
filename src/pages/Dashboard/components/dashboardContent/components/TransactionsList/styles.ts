import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  max-width: 100%;
  padding: 10px 20px;
  border-radius: 8px;

  @media (max-width: 680px) {
    padding: 5px 10px;
  }

  .first-box {
    display: flex;
    align-items: center;

    width: 35%;
    max-width: 35%;

    @media (max-width: 680px) {
      width: 28%;
      max-width: 28%;
    }
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
