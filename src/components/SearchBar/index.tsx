import { styled } from "styled-components"

const InputWrapper = styled.div`
width: 35rem;
height: 3rem;
padding: 0 1rem;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
border-radius: .5rem;
border: 2px solid transparent;
background-image: linear-gradient(90deg, #041833 0%, #041833 50%),
    linear-gradient(90deg, rgba(201, 140, 241, 1) 0%, rgba(123, 120, 229, 1) 50%);
background-clip: padding-box, border-box;
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    color: #fff;
}
`;

export default function SearchBar() {
    return (
        <InputWrapper>
            <input type="text" placeholder="O que você procura?" />
            <img src="/icon/search.png" alt="Search" />
        </InputWrapper>
    )
};
