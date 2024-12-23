import styled from "styled-components";

interface NavItemProps {
    isActive: boolean;
    text: string;
    activeIcon: string;
    inActiveIcon: string;
}

const StyledItem = styled.li<StyledItemType>`
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$isActive ? `#7878e5` : `#d9d9d9`};
    font-family: ${props => props.$isActive ? `font-weight: bold` : `font-weight: regular`};
    text-decoration: none;
`
type StyledItemType = {
    $isActive: boolean;
}
export function NavItem(props: NavItemProps) {
    return (
        <StyledItem $isActive={props.isActive}>
            <img src={props.isActive ? props.activeIcon : props.inActiveIcon} alt="Icon" />
            {props.text}
        </StyledItem>
    )
};
