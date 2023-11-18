import styled from "styled-components";

export const StyledContainer = styled.div`
    /* Internal grid with 2 rows - the first one having 2 columns, second one unified*/
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto;
    
    h1 {
        margin: 1rem 0 0 0;
    }

    h3 {
        font-style: italic;
        color: grey;
        margin-top: 0;
    }

    img {
        margin-top: 1rem;
        margin-right: 2rem;
        object-fit: contain;
        width: 75px;
        height: 75px;
    }

`