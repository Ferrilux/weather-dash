import { useState } from "react";
import { StyledContainer } from "./styles";


export const DayInformation = () => {
    const [weather] = useState("Cloudy")

    return (
        <StyledContainer>
            <div>
                <h1>Saturday</h1>
                <h3>{weather}</h3>
            </div>
            <img src = "../../favicon.svg" />
            <InformationPanel />
        </StyledContainer>
    );
};

const InformationPanel = () => {
    return (
        // change the style below once this ad hoc component has its own file
        <div style={{ gridColumnStart: 1, gridColumnEnd: 3}}> 
            <p>Temp:</p>
            <p>Rainfall chance:</p>
            <p>Humidity:</p>
            <p>Wind:</p>
        </div>
    )
}