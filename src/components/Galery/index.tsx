import { styled } from "styled-components"
import { Title } from "./Title"
import { TagFilter } from "./TagFilter"
import { Popular } from "./Popular"
import { Image } from "./Image"
import { GaleryPictureType } from "../../App"

interface GaleryProps {
    galeryPictures: GaleryPictureType[],
    handleSelectPicture: (picture: GaleryPictureType) => void,
    toggleFavorite: (picture: GaleryPictureType) => void
}

const StyledGalery = styled.div`
    display: flex;
`
const FluidSection = styled.section`
`
const PictureGalery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`


export function Galery(props: GaleryProps) {
    return (
        <>
            <TagFilter />
            <StyledGalery>
                <FluidSection>
                    <Title $align="">
                        Navegue pela galeria
                    </Title>
                    <PictureGalery>
                        {props.galeryPictures.map(galeryPicture => {
                            return (
                                <Image
                                    key={galeryPicture.id}
                                    picture={galeryPicture}
                                    isActive={galeryPicture.favorite}
                                    handleSelectPicture={props.handleSelectPicture}
                                    toggleFavorite={props.toggleFavorite}
                                />
                            )
                        })}
                    </PictureGalery>
                </FluidSection>
                <Popular />
            </StyledGalery>
        </>
    )
};
