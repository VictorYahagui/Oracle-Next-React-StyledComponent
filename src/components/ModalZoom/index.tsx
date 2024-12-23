
import { styled } from 'styled-components';
import { GaleryPictureType } from '../../App';
import { Image } from '../Galery/Image';
import { ButtonIcon } from '../Button';

interface ModalZoomProps {
    picture: GaleryPictureType | null;
    onClick: (close: boolean) => void;
    toggleFavorite: (picture: GaleryPictureType) => void;
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
`
const StyledDialog = styled.dialog`
    position: fixed;
    top: 5%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 60rem;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 1rem;
            right: 4rem;
        }
    }

`

export function ModalZoom(props: ModalZoomProps) {

    return (
        <>
            {props.picture &&
                <>
                    <Overlay onClick={() => props.onClick(true)} />
                    <StyledDialog open={!!props.picture}>
                        <Image picture={props.picture} isExpanded={true} toggleFavorite={() => props.toggleFavorite(props.picture!)} isActive={props.picture.favorite}></Image>
                        <form method="dialog">
                            <ButtonIcon onClick={() => props.onClick(true)} formMethod="dialog">
                                <img src="/icon/fechar.png" alt="Icon" />
                            </ButtonIcon>
                        </form>
                    </StyledDialog >
                </>
            }
        </>
    )
};
