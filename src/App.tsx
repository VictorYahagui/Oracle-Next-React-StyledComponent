import styled from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import { Header } from "./components/Header"
import { Aside } from "./components/Aside"
import { Hero } from "./components/Hero"
import { Galery } from "./components/Galery"

import pictures from "./fotos.json"

import { useState } from "react"
import { ModalZoom } from "./components/ModalZoom"
import { Footer } from "./components/Footer"

export type GaleryPictureType = {
  title: string;
  source: string;
  path: string;
  id: string;
  tagId: number;
  favorite: boolean;
}

export const galeryPicturesTyped: GaleryPictureType[] = pictures.map(picture => ({
  title: picture.titulo,
  source: picture.fonte,
  path: picture.path,
  id: picture.id,
  tagId: picture.tagId,
  favorite: false,
}));

const BgGradient = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(4,24,51);
  background: linear-gradient(180deg, rgba(4,24,51,1) 0%, rgba(4,36,79,1) 50%, rgba(21,69,128,1) 100%);
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 1.5rem;
`

const GaleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export function App() {

  const [galeryPictures, setGaleryPictures] = useState<GaleryPictureType[]>(galeryPicturesTyped)
  const [selectedPicture, setSelectedPicture] = useState<GaleryPictureType | null>(null);

  const handleCloseModal = (close: boolean) => {
    if (close) {
      return setSelectedPicture(null); // Fecha o modal ao definir null
    }
  };
  const toggleFavorite = (picture: GaleryPictureType) => {
    if (picture.id === selectedPicture?.id) {
      setSelectedPicture({
        ...selectedPicture,
        favorite: !selectedPicture.favorite
      })
    }
    setGaleryPictures(galeryPictures.map(galeryPictureTyped => {
      if (galeryPictureTyped.id === picture.id) {
        return { ...galeryPictureTyped, favorite: !picture.favorite }
      }
      return galeryPictureTyped;
    }))
  }
  return (
    <BgGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <GaleryContent>
            <Hero text="A galeria mais completa de fotos do espaço!" imgUrl="./src/assets/banner.png" />
            <Galery galeryPictures={galeryPictures} handleSelectPicture={picture => setSelectedPicture(picture)} toggleFavorite={toggleFavorite} />
          </GaleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom onClick={handleCloseModal} picture={selectedPicture} toggleFavorite={toggleFavorite} />
      <Footer/>
    </BgGradient>
  )
}


