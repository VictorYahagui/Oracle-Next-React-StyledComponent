import styled from "styled-components"
import { NavItem } from "./NavItem"

const StyledList = styled.ul`
    width: 13rem;
    list-style: none;
    padding: 0;
    margin: 0;
`
export function Aside() {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavItem activeIcon="/public/icon/home-ativo.png" inActiveIcon="/public/icon/home-inativo.png" text="Home" isActive={true} />
                    <NavItem activeIcon="/public/icon/mais-vistas-ativo.png" inActiveIcon="/public/icon/mais-vistas-inativo.png" text="Most Viwed" isActive={false} />
                    <NavItem activeIcon="/public/icon/mais-curtidas-ativo.png" inActiveIcon="/public/icon/mais-curtidas-inativo.png" text="Most Liked" isActive={false} />
                    <NavItem activeIcon="/public/icon/novas-ativo.png" inActiveIcon="/public/icon/novas-inativo.png" text="New" isActive={false} />
                    <NavItem activeIcon="/public/icon/surpreenda-me-ativo.png" inActiveIcon="/public/icon/surpreenda-me-inativo.png" text="Surprise Me" isActive={false} />
                </StyledList>
            </nav>
        </aside>
    )
};
