import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #643a6b;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: all 1s;
  &:hover {
    padding: 20px 50px;
    & h2 {
      font-weight: bold;

      font-size: 30px;
    }
    & p {
      transition: all 1s;
      &:hover {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  h2 {
    padding-top: 20px;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #19376d;
    font-weight: bold;
  }

  p {
    margin-top: -1px;
    color: #576cbc;
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 350px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #5f264a;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .directory-body-container {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`;
