import styled from "styled-components";

export const StyledDashboard = styled.div`
    /* setings for external grid - Header/Dash/Footer */
    overflow: auto;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    /* Internal dashboard grid with 2 columns*/
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 70% 30%;

    /* From https://css.glass - styling for glass-like card effect */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.9px);
    -webkit-backdrop-filter: blur(11.9px);
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.9px);
    -webkit-backdrop-filter: blur(11.9px);
`