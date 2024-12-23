import { styled } from "styled-components"

interface ButtonProps {
  id: number;
  isSelected: boolean;
  title: string;
  handleClick: (id: number) => void;
}

type StyledButtonType = {
  $selected: boolean;
}

const StyledButton = styled.button<StyledButtonType>`
  border: 2px solid transparent;
  border-radius: 1rem;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  ${props =>
    props.$selected
      ? `background-image: linear-gradient(#3e676a, #3e676a), 
         linear-gradient(90deg, rgba(201, 140, 241, 1) 0%, rgba(123, 120, 229, 1) 50%);`
      : `background-image: linear-gradient(#3e676a, #3e676a), 
         linear-gradient(#3e676a, #3e676a);`}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
export function Button(props: ButtonProps) {
  return (
    <StyledButton $selected={props.isSelected} onClick={() => props.handleClick(props.id)}>
      {props.title}
    </StyledButton>
  )
};
