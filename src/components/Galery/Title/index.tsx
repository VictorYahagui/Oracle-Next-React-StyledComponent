import { styled } from "styled-components";

type TitleType = {
    $align: string;
}

export const Title = styled.h2<TitleType>`
    color: #7b78e6;
    font-size: 2rem;
    font-weight: normal;
    text-align: ${props => props.$align ? props.$align : 'left'};
`