import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0 ; 
        padding: 0;
        box-sizing:border-box;
        outline:0; 
    }

    :root {
        --darkBlue: #012340;
        --deepBlush : #dc6e82;
        --pictonBlue : #59b5e9;
        --blue : #023E73;
        --Eminence : #6b2977;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --gray: #666360;
        --red: #c53030;
    }

    body {
        background: linear-gradient(90deg,rgba(5,199,242,1) 0%,rgba(2,62,115,1) 12%,rgba(13,13,13,1) 100%);
        
        color: var(--white)
    }
    body, input, button {
        font-size: 1rem;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight:700;
    }
    button {
        cursor: pointer;
    }
    a{
        text-decoration:none;
    }

`;
