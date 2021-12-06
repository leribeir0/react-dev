import {createGlobalStyle} from 'styled-components';
import imgBackground from '../assets/background.svg';

export const GlobalStyle  = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1000px){
            font-size: 93.75%;
        }

        @media (max-width: 720){
            font-size: 87.5%;
        }
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    body{
        background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
        -wekit-font-smoothing: antialiased;
    }
    
    #root{
        max-width: 960px;
        margin:0 auto;
        padding:2.5 rem 1.25rem;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;