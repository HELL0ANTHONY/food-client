import styled from "styled-components";

const colors = {
  background: "#DFEEEA",
  footerBackground: "#082032",
  footerFontColor: "#F6F6F6"
};

export const Main = styled.div`
  background-color: ${colors.background};
  display: grid;
  grid-template-areas:
    "title title title"
    "photo photo photo"
    "footer footer footer";
  width: 260px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 10px 10px 34px -13px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 34px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 34px -13px rgba(0, 0, 0, 0.75);
`;

export const Header = styled.header`
  grid-area: title;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 5px 5px 0px 0px;

  h3 {
    font-family: "Klee One", cursive;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }
`;

export const Image = styled.div`
  grid-area: photo;
  height: 200px;
  display: grid;
  background: linear-gradient(
    to bottom,
    #dfeeea 50%,
    rgba(17, 79, 84, 1) 0%,
    #082032 50%
  );

  img {
    justify-self: center;
    align-self: center;
    border-radius: 4px;
    width: 220px;
    height: 180px;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  height: 100px;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.footerBackground};
  color: ${colors.footerFontColor};

  h3 {
    justify-self: center;
    font-family: Arial;
    margin-top: 5px;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
    padding: 3px;

    span {
      text-transform: capitalize;
      font-family: "Klee One", cursive;
    }
  }
`;
