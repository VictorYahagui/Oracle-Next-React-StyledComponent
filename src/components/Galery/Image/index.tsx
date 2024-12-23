import { styled } from "styled-components";
import heartActive from '../../../../public/icon/favorito-ativo.png'
import heartUnactive from '../../../../public/icon/favorito.png'
import expand from '../../../../public/icon/expandir.png'
import { GaleryPictureType } from "../../../App";
import { ButtonIcon } from "../../Button";

interface ImageProps {
    picture: GaleryPictureType;
    isActive?: boolean;
    isExpanded?: boolean;
    handleSelectPicture?: (picture: GaleryPictureType) => void;
    toggleFavorite: (picture: GaleryPictureType) => void;
}

type StyledButtonProps = {
    $expanded: boolean;
}

const StyledFigure = styled.figure<StyledButtonProps>`
    width: ${props => props.$expanded ? '80%' : '28rem'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 1rem 1rem 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 1rem 1rem;
        color: white;
        box-sizing: border-box;
        padding: 1rem;
        h3 {
            font-size: 1rem;
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            
        }
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export function Image({ isExpanded = false, ...props }: ImageProps) {
    function handleClick(picture: GaleryPictureType) {
        if (props.handleSelectPicture) {
            return props.handleSelectPicture(picture);
        }
        console.log("function may not have been initialized");
    }
    return (
        <StyledFigure $expanded={isExpanded} id={`picture-${props.picture.id}`}>
            <img src={`${props.picture.path}`} alt={props.picture.title} />
            <figcaption>
                <h4>{props.picture.title}</h4>
                <Footer>
                    <h3>{props.picture.source}</h3>
                    <ButtonIcon onClick={() => props.toggleFavorite(props.picture)}>
                        <img src={props.isActive ? heartActive : heartUnactive} alt="Icon" />
                    </ButtonIcon>
                    {!isExpanded && <ButtonIcon onClick={() => handleClick(props.picture)}>
                        <img src={expand} alt="Icon" />
                    </ButtonIcon>}
                </Footer>
            </figcaption>
        </StyledFigure>
    )
};
