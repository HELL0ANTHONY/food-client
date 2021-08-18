import styled from "styled-components";

const colors = {
  fontColor: "#171717",
  fontColorHover: "#c1cfc0",
  backgroundColor: "#181e1e"
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  a {
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    color: ${colors.fontColor};
    background-color: ${colors.backgroundColor};
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8);

    &:hover {
      box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 0.8);
      color: ${colors.fontColorHover};
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
