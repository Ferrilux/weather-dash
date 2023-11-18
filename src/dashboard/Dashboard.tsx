import { DayInformation } from "./DayInformation/DayInformation";
import { StyledCard } from "./styles";

export const Dashboard = () => {
    return (
        <StyledCard> 
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consequatur illum aut voluptate assumenda sed molestias tenetur repellat repellendus aperiam eos suscipit deserunt ullam corporis molestiae corrupti, harum eius animi?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consequatur illum aut voluptate assumenda sed molestias tenetur repellat repellendus aperiam eos suscipit deserunt ullam corporis molestiae corrupti, harum eius animi?</p>
            </div>
            <DayInformation/>
        </StyledCard>
    );
};