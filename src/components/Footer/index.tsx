import { styled } from "styled-components"
import { Link } from "../Link"


const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #04244F;
    color: white;
    margin-top: 2rem;
    div {
        display: flex;
        gap: 1rem;
    }
    h5 {
        margin: 0;
        font-weight: normal;
        font-size: 1rem;
    }
`
export function Footer() {
    return (
        <StyledFooter>
            <div>
                <Link icon="./img/sociais/facebook.svg" title="Facebook" />
                <Link icon="./img/sociais/instagram.svg" title="Facebook" />
                <Link icon="./img/sociais/twitter.svg" title="Facebook" />
            </div>
            <div>
                <h5>
                    Desenvolvido por Victor Yahagui
                </h5>
            </div>
        </StyledFooter>
    )
};
