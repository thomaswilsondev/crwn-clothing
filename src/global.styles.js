import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9f5f6;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
  text-decoration: none;
  color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
