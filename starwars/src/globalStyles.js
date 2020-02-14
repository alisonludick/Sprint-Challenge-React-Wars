import { createGlobalStyle } from 'styled-components';

import image from './sw-bg.jpg';
export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		min-height: 100vh;
	}
	body {
		font-family: sans-serif;
        background-image: url(${image});
		background-size: cover;
	}
	.header {
		text-align: center;
		padding: 50px 50px 25px;
		h1 {
            color: darkturquoise;
            text-shadow: 1px 1px white; 
		}
		.page {
            padding-top: 10px;
            color: darkturquoise;
            text-shadow: 1px 1px white; 
            font-size: x-large; 
        }
        #page {
            font-weight: bold;
        }
		input {
			appearance: none;
			text-align: center;
			width: 30px;
		}
    }
    
`;