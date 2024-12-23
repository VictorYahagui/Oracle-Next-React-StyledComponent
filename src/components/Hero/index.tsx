import { styled } from "styled-components"

interface HeroProps {
    text: string;
    imgUrl: string;
}
type StyledHeroType = {
    $url: string;
}
const StyledHero = styled.div<StyledHeroType>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.$url})`};
    color: white;
    h3 {
        font-size: 2rem;
        width: 19rem;
        font-weight: normal;
        padding-left: 4rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
`
export function Hero(props: HeroProps) {
    return (
        <StyledHero $url={props.imgUrl}>
            <h3>{props.text}</h3>
        </StyledHero>
    )
};
