import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    h1 { font-size: 3.2rem; }
    h2 { font-size: 2.4rem; }
    h3 { font-size: 1.8rem; }
    h4 { font-size: 1.6rem; }
    h5 { font-size: 1.4rem; }
    h6 { font-size: 1.2rem; }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        word-break: break-word;
    }

    header.article__header {
        h1 {
            font-size: 4rem;
            text-decoration: underline;
        }
    }

    article {
        h1, h2, h3, h4 {
            margin-top: 1em;
        }

        p, ul, ol, a, div, span {
            font-size: 1.4rem;
        }

        p {
            margin-bottom: 1em;
        }

        pre {
            margin: 1em 0em 2em;
            padding: 2em;
            background: #999;
            code {
                font-size: 1.2rem;
            }
        }

        ul, ol {
            padding: 2rem;
        }

        a {
            color: teal;
            text-decoration: underline;
        }
    } 

    @media (max-width: 480px) {
        h1 { font-size: 2.4rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.8rem; }
        h4 { font-size: 1.6rem; }
        h5 { font-size: 1.4rem; }
        h6 { font-size: 1.2rem; }
        
        header.article__header {
            h1 {
                font-size: 2.4rem;
            }
    }
    }
`;
