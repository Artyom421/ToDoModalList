import styled from "styled-components";

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    row-gap: 10px;
    border: 1px solid black;
    padding: 15px;
    border-radius: 20px;
    width: 50%;
`

const Header = styled.div`
    background-color: green;
`

export const Styled = { Root, Header }