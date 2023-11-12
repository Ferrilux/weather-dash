import styled from "styled-components";

export const StyledHeader = styled.div`
    font-style: italic;
    margin-bottom: 1rem;
    background-color: #D9D9D9;
    border-radius: 16px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 2rem auto auto;
    align-items: center;

    img {
        width: 2rem;
        height: 2rem;
        justify-self: start;
        margin: 0.7rem;
    }

    h1 {
        justify-self: start;
        margin: 0.5rem;
        color: gray;
    }
`