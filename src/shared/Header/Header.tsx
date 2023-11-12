import { StyledHeaderButton } from "./HeaderButton/styles";
import { StyledHeader } from "./styles";

export const Header = () => {
    return (
        <StyledHeader>
            <img src = "../../favicon.svg" />
            <h1>Weather Dashboard</h1>
            <StyledHeaderButton />
        </StyledHeader>
    );
};