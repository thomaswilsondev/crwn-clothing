import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  .element-2 {
    grid-column: 2/-1;
  }
  .element-3 {
    grid-column: 1/3;
  }
`;
