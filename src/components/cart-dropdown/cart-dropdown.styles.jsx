import styled from "styled-components";

import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #fff;
  }
  .text-messenger {
    margin: auto;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
`;
