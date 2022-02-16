import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
`

const ToDo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    row-gap: 10px;
    border: 1px solid black;
    padding: 15px;
    border-radius: 20px;
    width: 40%;
    background-color: whitesmoke;
    box-shadow: 3px 5px 5px grey;
`

const Header = styled.div`
    background-color: green;
`

const Div = styled.div`
    text-align: center;
`

const Ptag = styled.p`
    color: #282828;
    font-size: 30px;
    font-weight: 800;
    font-family: sans-serif;
`


export const Styled = { Root, ToDo, Header, Div, Ptag }