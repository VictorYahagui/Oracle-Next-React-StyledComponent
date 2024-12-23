import { styled } from "styled-components"
import tagsJSON from "./tags.json"
import { Button } from "./Button";
import { useState } from "react";

type TagsType = {
    id: number,
    title: string
}
//Remapeia o tipo do json para o esperado pelo type
const tags: TagsType[] = tagsJSON.map((tag) => ({
    id: tag.id,
    title: tag.titulo,
}));

const TagFilterStyled = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    padding: 2rem 0;
    span {
        padding-right: 3rem;
        font-size: 1.5rem;
        color: white;
    }
`
export function TagFilter() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setSelectedId(id === selectedId ? null : id);
    };
    return (

        <TagFilterStyled >
            <span>Busque por tags:</span>
            {
                tags.map((tag) => (
                    <Button key={tag.id} id={tag.id} title={tag.title} isSelected={selectedId === tag.id} handleClick={handleClick} />
                ))
            }
        </TagFilterStyled>


    )
};
