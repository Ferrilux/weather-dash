import { FC } from "react"
import { StyledBackground } from "./styles"


export const Background: FC<any> = ({ children }) => {
    return <StyledBackground >{children}</StyledBackground>
}