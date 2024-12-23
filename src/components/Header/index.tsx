import { styled } from "styled-components"
import SearchBar from "../SearchBar"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
    img {
        max-width: 13rem;
    }
`
export function Header() {
    return (
        <StyledHeader>
            <img src="/img/logo.png" alt="Logo" />
            <SearchBar />
        </StyledHeader>
    )
};
