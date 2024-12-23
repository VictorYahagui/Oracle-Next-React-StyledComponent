import { styled } from "styled-components"
import { Title } from "../Title"
import { galeryPicturesTyped } from "../../../App"

const PictureColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Picture = styled.img`
    max-width: 13rem;
    border-radius: 1rem;
`

const StyledButton = styled.button`
  width: 100%;
  border: 2px solid transparent;
  border-radius: 1rem;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  background-image: linear-gradient(#103B71,#113C73 ), 
                    linear-gradient(90deg, rgba(201, 140, 241, 1) 0%, rgba(123, 120, 229, 1) 50%);
`;
export function Popular() {
    return (
        <section>
            <Title $align='center'>Populares</Title>
            <PictureColumn>
                {galeryPicturesTyped.map(picture => <Picture key={picture.id} src={picture.path} alt={picture.title} />)}
                <StyledButton>Ver mais</StyledButton>
            </PictureColumn>
        </section>
    )
}